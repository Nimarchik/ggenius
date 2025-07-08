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
    <meta property="og:image" content="https://example.com/preview.jpg" />
    <meta name="google-site-verification" content="e8cZ7JXTTYmpoCGCTEgfCeYSvBHT3yiFmNJLYv7nY_Y" />
  </Helmet>
}

export default Helmets;