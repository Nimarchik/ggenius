import { useEffect } from 'react'
import { Outlet, useLocation, useParams } from 'react-router'

import style from '../assets/style/index.module.css'
import Heder from './layout/Header'
import Footer from './layout/Footer'
import { animated, useTransition } from 'react-spring'
import Aos from 'aos'
// import i18n from '../i18n'
import { useTranslation } from 'react-i18next'
import Helmets from './Helmets'


function App() {
  const { i18n } = useTranslation();
  const { l: lang } = useParams();
  const location = useLocation();

  useEffect(() => {
    if (lang && i18n.language !== lang) {
      i18n.changeLanguage(lang);
    }
  }, [lang, i18n, location.pathname]);

  useEffect(() => {
    window.scroll(0, 0)
  }, [])

  Aos.init()


  const transitions = useTransition(location, {
    from: {
      opacity: 0,
      transform: 'scale(0)',
      position: 'relative',
    },
    enter: {
      opacity: 1,
      transform: 'scale(1)',
    },
  })



  return (
    <>
      <Helmets />

      <div className={style.wrapper}>
        <Heder />
        <main key={i18n.language} className={style.main}>
          {
            transitions((style, location) => (
              <animated.div className={style.animated} style={style}>
                <Outlet location={location} />
              </animated.div>
            ))
          }
        </main>
        <Footer />
      </div>
    </>
  )
}


export default App