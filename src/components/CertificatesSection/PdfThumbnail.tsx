import { useEffect, useRef, useState } from 'react'
import * as pdfjsLib from 'pdfjs-dist'
import pdfjsWorkerUrl from 'pdfjs-dist/build/pdf.worker.min.mjs?url'

pdfjsLib.GlobalWorkerOptions.workerSrc = pdfjsWorkerUrl

const TARGET_WIDTH = 640
const RENDER_TIMEOUT = 12000

type Status = 'loading' | 'ready' | 'error'

function PdfThumbnail({ src, alt }: { src: string; alt: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [status, setStatus] = useState<Status>('loading')

  useEffect(() => {
    let cancelled = false
    setStatus('loading')

    async function renderThumbnail() {
      const pdf = await pdfjsLib.getDocument({ url: src }).promise
      const page = await pdf.getPage(1)
      const baseViewport = page.getViewport({ scale: 1 })
      const viewport = page.getViewport({ scale: TARGET_WIDTH / baseViewport.width })
      const canvas = canvasRef.current

      if (!canvas || cancelled) {
        return
      }

      canvas.width = viewport.width
      canvas.height = viewport.height

      const context = canvas.getContext('2d')
      if (!context) {
        throw new Error('Canvas context unavailable')
      }

      await page.render({ canvasContext: context, canvas, viewport }).promise

      if (!cancelled) {
        setStatus('ready')
      }
    }

    const timeout = new Promise((_, reject) => {
      setTimeout(() => reject(new Error('PDF render timeout')), RENDER_TIMEOUT)
    })

    Promise.race([renderThumbnail(), timeout]).catch((error) => {
      console.error('PdfThumbnail render failed', error)
      if (!cancelled) {
        setStatus('error')
      }
    })

    return () => {
      cancelled = true
    }
  }, [src])

  if (status === 'error') {
    return <div className="certificate-thumb-empty">Prévia indisponível</div>
  }

  return (
    <div className="certificate-thumb-wrap">
      {status === 'loading' ? <div className="certificate-thumb-loading" /> : null}
      <canvas className="certificate-thumb" ref={canvasRef} role="img" aria-label={alt} style={{ display: status === 'ready' ? 'block' : 'none' }} />
    </div>
  )
}

export default PdfThumbnail
