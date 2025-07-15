import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';


const Helmets = ({ titleKey = 'meta.title', descKey = 'meta.description' }) => {
  const { t } = useTranslation()

  return <Helmet>
    <title>{t(titleKey)}</title>
    <meta name="description" content={t(descKey)} />
    <meta name="keywords" content="Mobile Legends, гайди, герої, турнір, кіберспорт, ggenius, GGenius, млбб, мобла, ггеніус, ггуніус, герои, гайды, киберспорт, mlbb,MLBB" />
    <meta property="og:image" content="https://ggenius.gg/logo.webp" />
    <meta property="og:title" content="Ggenius — AI-платформа для турниров" />
    <meta property="og:url" content="https://ggenius.gg/" />
    <meta property="og:type" content="website" />
    <meta name="google-site-verification" content="e8cZ7JXTTYmpoCGCTEgfCeYSvBHT3yiFmNJLYv7nY_Y" />
    <meta property="og:type" content="website" />
    <meta property="og:description" content="Розумний Telegram-бот, який допоможе тобі грати краще.
GGenius підкаже кращих героїв, ефективні збірки, контрпіки і не дасть загубитися новачку в світі MLBB." />

    <link rel="canonical" href="https://ggenius.gg/" />
    <link rel="alternate" hreflang="uk" href="https://ggenius.gg/" />
    <link rel="alternate" hreflang="x-default" href="https://ggenius.gg/" />
    <meta property="og:image" content="https://ggenius.gg/logo.webp" />


    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:url" content="https://ggenius.gg/" />
    <meta property="twitter:title" content="GGenius" />
    <meta property="twitter:description" content="Розумний Telegram-бот, який допоможе тобі грати краще.
GGenius підкаже кращих героїв, ефективні збірки, контрпіки і не дасть загубитися новачку в світі MLBB." />
    <meta property="twitter:image" content="https://ggenius.gg/logo.webp" />
    <link rel="icon" href="/preview.webp" />


    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Sansation:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&family=Source+Sans+3:ital,wght@0,200..900;1,200..900&display=swap"
      rel="stylesheet"
    />

  
    <link rel="icon" type="image/png" href="/favicon/favicon-96x96.png" sizes="96x96" />
    <link rel="icon" type="image/svg+xml" href="/favicon/favicon.svg" />
    <link rel="shortcut icon" href="/favicon/favicon.ico" />
    <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
    <meta name="apple-mobile-web-app-title" content="GGenius" />
    <link rel="manifest" href="/favicon/site.webmanifest" />
  </Helmet>
}

export default Helmets;