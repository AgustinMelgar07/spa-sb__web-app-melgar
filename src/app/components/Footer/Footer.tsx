import './Footer.css';
import Image from 'next/image';
import Link from 'next/link';
import { SocialNet } from '@/components';
import { Section } from './components';
import { reassemble } from '@/helpers';
import jsonData from '@/data.json';

const { logo, socialNets, footer, pages } = jsonData;
const { sections, copyright, madeBy } = footer;
const { stable } = pages;
const { services } = stable;

const links = reassemble(stable, (_, { page, title }) => ({
  href: `/${page}`,
  title,
}));

const Footer = () => (
  <footer className="cmp-footer full-background">
    <div className="main">
      <Image
        className="logo"
        src="/logo.svg"
        width={128}
        height={128}
        alt={logo.alt}
      />
      <div className="sections">
        <Section title={sections[0]}>
          <nav>
            {links.map(({ href, title }) => (
              <Link key={href} href={href}>
                {title}
              </Link>
            ))}
          </nav>
        </Section>
        <Section title={sections[1]}>
          <nav>
            {services.sections.map(({ serviceKey, title }) => (
              <Link key={serviceKey} href={`/services#${serviceKey}`}>
                {title}
              </Link>
            ))}
          </nav>
        </Section>
        <Section title={sections[2]}>
          <nav className="social-nets">
            {socialNets.items.map(({ name, url, faIcon }) => (
              <SocialNet
                key={name}
                url={url}
                title={`${socialNets.title} ${name}`}
                faIcon={`fa-brands fa-${faIcon}`}
              />
            ))}
          </nav>
        </Section>
        <Section title={sections[3]}>
          <iframe
            className="map"
            title="Ubicación del spa"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1133.788836062149!2d-58.97941985334309!3d-27.451043973783484!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94450cf0c80be0d3%3A0xc9f9278c74810912!2sUTN%20-%20Facultad%20Regional%20Resistencia!5e1!3m2!1ses-419!2sar!4v1725131960437!5m2!1ses-419!2sar"
            height="256"
            loading="lazy"
          />
        </Section>
        {/* Nueva sección para botón o imagen */}
        <Section title="Si Pagas con nuestra app tendras un 10% de descuento en cualquiera de nuestros productos">
          <div className="download-section">
            <a
              href="https://drive.google.com/uc?export=download&id=1bOBsmmPYPMbwuE3dM8Hg-NY-6PhP2Nlw"
              className="download-button"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/playstore2.png"
                alt="."
                width={100}
                height={100}
              />
            </a>
          </div>
        </Section>
      </div>
    </div>
    <div className="bot">
      <small className="text">{copyright}</small>
      <small className="text">
        {madeBy.text}{' '}
        <a href={madeBy.link.url} target="_blank" rel="noopener">
          {madeBy.link.title}
        </a>
      </small>
    </div>
  </footer>
);

export default Footer;
