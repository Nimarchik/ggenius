import { Helmet } from 'react-helmet-async';

const Helmets = () => {
  return <Helmet>
    <title>Ggenius — AI-платформа для турниров</title>
    <meta name="description" content="Платформа для геймеров, турниров и AI-карт." />
    <meta property="og:title" content="Ggenius" />
    <meta property="og:description" content="Создавай, побеждай, улучшайся с Ggenius." />
    <meta property="og:image" content="https://example.com/preview.jpg" />
  </Helmet>
}

export default Helmets;