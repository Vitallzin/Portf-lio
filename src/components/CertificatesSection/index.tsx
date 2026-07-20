import { certificates } from '../../data/portfolio'
import BentoCard from '../BentoCard'
import SectionHeader from '../SectionHeader'
import PdfThumbnail from './PdfThumbnail'
import './CertificatesSection.css'

function CertificatesSection() {
  return (
    <section className="page-section" id="certificados">
      <SectionHeader
        eyebrow="Certificados"
        title="Cursos e certificações."
        description="Formações complementares que reforçam minha base técnica."
      />
      <div className="bento-grid certificates-grid">
        {certificates.map((certificate, index) => (
          <BentoCard
            className="span-3 certificate-card reveal"
            key={certificate.title}
            style={{ '--delay': `${index * 60}ms` } as React.CSSProperties}
          >
            {certificate.credentialUrl ? (
              <a className="certificate-cover" href={certificate.credentialUrl} target="_blank" rel="noreferrer">
                <PdfThumbnail src={certificate.credentialUrl} alt={`Certificado: ${certificate.title}`} />
              </a>
            ) : (
              <div className="certificate-cover certificate-cover-empty">
                <span className="icon-token">🎓</span>
              </div>
            )}
            <div className="certificate-body">
              <h3>{certificate.title}</h3>
              <p className="certificate-issuer">{certificate.issuer}</p>
              <div className="certificate-footer">
                <span className="certificate-date">{certificate.date}</span>
                {certificate.credentialUrl ? (
                  <div className="certificate-actions">
                    <a className="certificate-link" href={certificate.credentialUrl} target="_blank" rel="noreferrer">
                      Ver certificado ↗
                    </a>
                    <a
                      className="certificate-download"
                      href={certificate.credentialUrl}
                      download
                      aria-label={`Baixar certificado: ${certificate.title}`}
                      title="Baixar certificado"
                    >
                      ⬇
                    </a>
                  </div>
                ) : (
                  <span className="certificate-pending">Em breve</span>
                )}
              </div>
            </div>
          </BentoCard>
        ))}
      </div>
    </section>
  )
}

export default CertificatesSection
