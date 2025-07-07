import { Helmet } from 'react-helmet-async';

const Helmets = () => {
  return <Helmet>
    <title>Ggenius — AI-платформа для турниров</title>
    <meta name="description" content="Гайды, герои, турниры и новости Mobile Legends" />
    <meta name="keywords" content="Mobile Legends, гайды, герои, турнир, киберспорт, ggenius, GGenius" />
    <meta property="og:title" content="Ggenius" />
    <meta property="og:description" content="Создавай, побеждай, улучшайся с Ggenius." />
    <meta property="og:image" content="https://example.com/preview.jpg" />
    <meta name="google-site-verification" content="e8cZ7JXTTYmpoCGCTEgfCeYSvBHT3yiFmNJLYv7nY_Y" />
  </Helmet>
}

export default Helmets;