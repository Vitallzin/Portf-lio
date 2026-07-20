import { useEffect, useRef } from 'react'
import AboutGrid from '../../components/AboutGrid'
import CertificatesSection from '../../components/CertificatesSection'
import CommentsSection from '../../components/CommentsSection'
import ContactSection from '../../components/ContactSection'
import Footer from '../../components/Footer'
import GithubSection from '../../components/GithubSection'
import HeroSection from '../../components/HeroSection'
import Navbar from '../../components/Navbar'
import ProjectsSection from '../../components/ProjectsSection'
import SoftSkillsSection from '../../components/SoftSkillsSection'
import TechSection from '../../components/TechSection'
import './Home.css'
import { HOME_SCROLL_KEY } from './scrollRestore'

function Home() {
  const cursorRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const savedScrollY = sessionStorage.getItem(HOME_SCROLL_KEY)

    if (savedScrollY !== null) {
      sessionStorage.removeItem(HOME_SCROLL_KEY)
      requestAnimationFrame(() => {
        window.scrollTo({ top: Number(savedScrollY), behavior: 'auto' })
      })
    }
  }, [])

  useEffect(() => {
    const revealElements = Array.from(document.querySelectorAll<HTMLElement>('.reveal'))

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { rootMargin: '0px 0px -12% 0px', threshold: 0.14 },
    )

    revealElements.forEach((element) => observer.observe(element))

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const supportsFinePointer = window.matchMedia('(pointer: fine)').matches
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const cursor = cursorRef.current

    if (!supportsFinePointer || reducedMotion || !cursor) {
      return
    }

    let frame = 0

    const handleMove = (event: MouseEvent) => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => {
        cursor.style.transform = `translate3d(${event.clientX}px, ${event.clientY}px, 0)`
        cursor.style.opacity = '1'
      })
    }

    const handleLeave = () => {
      cursor.style.opacity = '0'
    }

    window.addEventListener('mousemove', handleMove)
    document.documentElement.addEventListener('mouseleave', handleLeave)

    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('mousemove', handleMove)
      document.documentElement.removeEventListener('mouseleave', handleLeave)
    }
  }, [])

  return (
    <main className="app-shell">
      <div className="cursor-glow" ref={cursorRef} aria-hidden="true" />
      <Navbar />
      <HeroSection />
      <ProjectsSection />
      <GithubSection />
      <TechSection />
      <CertificatesSection />
      <AboutGrid />
      <SoftSkillsSection />
      <ContactSection />
      <CommentsSection />
      <Footer />
    </main>
  )
}

export default Home
