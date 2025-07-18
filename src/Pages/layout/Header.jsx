import style from '../../assets/style/index.module.css'
import { Link, useLocation, useNavigate, useParams } from 'react-router';

import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';


const Header = () => {

  const [menu, setMenu] = useState(false)
  const location = useLocation();
  const currentPath = location.pathname;
  const { t, i18n } = useTranslation();
  const { l: lang } = useParams();
  const navigate = useNavigate();

  const [value, setValue] = useState(() => localStorage.getItem('value') || 'uk');

  useEffect(() => {
    const supportedLangs = ['uk', 'en'];
    const lang = location.pathname.split('/')[1];
    if (lang && supportedLangs.includes(lang)) {
      if (i18n.language !== lang) {
        i18n.changeLanguage(lang);
      }
      setValue(lang);
      localStorage.setItem('value', lang);
    }
  }, [location.pathname, i18n]);

  const changeLangukge = (newLang) => {
    setValue(newLang);
    localStorage.setItem('value', newLang);

    const pathParts = location.pathname.split('/').filter(Boolean);

    if (pathParts.length > 0) {
      pathParts[0] = newLang;
    } else {
      pathParts.unshift(newLang);
    }

    navigate(`/${pathParts.join('/')}`);
  }

  return <>
    <header className={style.header}>
      <div className={style.container}>
        <nav className={style.nav}>
          <Link to={`/${lang}/Home`} className={style.navLogo} aria-label='link to the Home'>
            <h1 className={style.logoSvg}>GGenius</h1>
          </Link>

          <div className={!menu ? style.navLinksListActive : style.navLinksList}>
            <ul className={style.navList}>
              <li className={style.navListItem}>
                <Link aria-label='link to the Home' to={`/${lang}/Home`} onClick={() => setMenu(!menu)} className={currentPath.endsWith('/Home') ? style.navListItemLinkActive : style.navListItemLink}>
                  {t('home')}
                </Link>
              </li>
              <li className={style.navListItem}>
                {/*
                 onClick = { e => e.preventDefault()} 
                to={`/${lang}/Heroes`}
                 */}
                <Link to={`/${lang}/Heroes`}  aria-label='link to the heroes page' 
                  onClick={() => setMenu(!menu)}
                className={currentPath.endsWith('Heroes') ? style.navListItemLinkActive : style.navListItemLink}>
                  {t('heroes')}
                </Link>
              </li>
              <li className={style.navListItem}>
                <Link aria-label='link to the Contact page' onClick={e => e.preventDefault()} className={style.navListItemLink}>
                  {t('Notice')}
                </Link>
              </li>
              <li className={style.navListItem}>
              {/*  
              to={`/${lang}/Blog`}
              */}
                <Link to={`/${lang}/Blog`} onClick={() => setMenu(!menu)} aria-label='link to the Guides page' className={currentPath.endsWith('Blog') ? style.navListItemLinkActive : style.navListItemLink}>
                  {t('Guides')}
                </Link>
              </li>
              <li className={style.navListItem}>
                <Link aria-label='link to the Esports page' onClick={e => e.preventDefault()} className={style.navListItemLink}>
                  {t('Esports')}
                </Link>
              </li>
              <li className={style.navListItem}>
                <Link aria-label='link to the About page' to={`/${lang}/About`} onClick={() => setMenu(!menu)} className={currentPath.endsWith('About') ? style.navListItemLinkActive : style.navListItemLink}>
                  {t('about')}
                </Link>
              </li>
            </ul>
            <div className={style.navGroups}>
              <select className={style.navLang} value={value} onChange={e => changeLangukge(e.target.value)}>
                <option value="uk">UK</option>
                <option value="en">EN</option>
              </select>

              <Link aria-label='link to the login page' className={style.navLogin}>
                {t('Login')}
              </Link>
            </div>
          </div>

          <button title='Menu' aria-label='Button Menu' className={style.navMenu} onClick={() => setMenu(!menu)}>
            <span className={menu ? style.navMenuSpan1Active : style.navMenuSpan1}></span>
            <span className={menu ? style.navMenuSpan2Active : style.navMenuSpan2}></span>
            <span className={menu ? style.navMenuSpan3Active : style.navMenuSpan3}></span>
          </button>
        </nav>
      </div>
    </header>
  </>
}

export default Header;