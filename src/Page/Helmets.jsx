import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';


const Helmets = ({ titleKey = 'meta.title', descKey = 'meta.description' }) => {
  const { t } = useTranslation()

  return <Helmet>
    <title>{t(titleKey)}</title>
    <meta name="description" content={t(descKey)} />
    <meta name="keywords" content={t('keywords')} />
    <meta property="og:title" content="GGenius" />
    <meta property="og:description" content={t('descript')} />
    <meta property="og:image" content="https://ggenius.gg/preview.jpg" />
    <meta name="google-site-verification" content="e8cZ7JXTTYmpoCGCTEgfCeYSvBHT3yiFmNJLYv7nY_Y" />


    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://ggenius.gg/" />
    <meta property="og:title" content="GGenius" />
    <meta property="og:description" content="Революційний інтерфейс для кіберспортивної спільноти MLBB! AI Cards Hub - це інтерактивна система карток, які живуть, реагують на дотик та надають персоналізовані AI-поради." />
    <meta property="og:image" content="https://metatags.io/images/meta-tags.png" />


    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:url" content="https://ggenius.gg/" />
    <meta property="twitter:title" content="GGenius" />
    <meta property="twitter:description" content="Революційний інтерфейс для кіберспортивної спільноти MLBB! AI Cards Hub - це інтерактивна система карток, які живуть, реагують на дотик та надають персоналізовані AI-поради." />
    <meta property="twitter:image" content="https://metatags.io/images/meta-tags.png" />


  </Helmet>
}

export default Helmets;