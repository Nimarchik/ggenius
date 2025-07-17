import { Link, useParams } from 'react-router';
import style from '../../assets/style/index.module.css'
import { useTranslation } from 'react-i18next';
import Aos from 'aos';


const Footer = () => {
  const { t } = useTranslation();
  const { l: lang } = useParams();
  const currentPath = location.pathname;

  return <>
    <footer className={style.footer}>
      <div data-aos="fade-up"
        data-aos-anchor-placement="bottom-bottom">
        <div className={style.container}>
          <div className={style.footerWrapper}>
            <div className={style.footerWrapperLogoGroup}>
              <Link to={`/${lang}/Home`} className={style.footerLogo} aria-label='link to the Home'>
                GGenius
              </Link>
              <ul className={style.footerWrapperLogoGroupList}>
                <li className={style.footerWrapperLogoGroupListItem}>
                  <Link aria-label='link to the Telegram Chanel' to='https://t.me/ggenius_gg' className={style.footerWrapperLogoGroupListItemLink}>
                    <svg className={style.footerWrapperLogoGroupListItemTg} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.287 5.906q-1.168.486-4.666 2.01-.567.225-.595.442c-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294q.39.01.868-.32 3.269-2.206 3.374-2.23c.05-.012.12-.026.166.016s.042.12.037.141c-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8 8 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629q.14.092.27.187c.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.4 1.4 0 0 0-.013-.315.34.34 0 0 0-.114-.217.53.53 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09" />
                    </svg>
                  </Link>
                </li>
                <li className={style.footerWrapperLogoGroupListItem}>
                  <Link aria-label='link to the Discord server' to='https://discord.gg/8Ydy3dHaqV' className={style.footerWrapperLogoGroupListItemLink}>
                    <svg className={style.footerWrapperLogoGroupListItemDs} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M13.545 2.907a13.2 13.2 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.2 12.2 0 0 0-3.658 0 8 8 0 0 0-.412-.833.05.05 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.04.04 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032q.003.022.021.037a13.3 13.3 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019q.463-.63.818-1.329a.05.05 0 0 0-.01-.059l-.018-.011a9 9 0 0 1-1.248-.595.05.05 0 0 1-.02-.066l.015-.019q.127-.095.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.05.05 0 0 1 .053.007q.121.1.248.195a.05.05 0 0 1-.004.085 8 8 0 0 1-1.249.594.05.05 0 0 0-.03.03.05.05 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.2 13.2 0 0 0 4.001-2.02.05.05 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.03.03 0 0 0-.02-.019m-8.198 7.307c-.789 0-1.438-.724-1.438-1.612s.637-1.613 1.438-1.613c.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612m5.316 0c-.788 0-1.438-.724-1.438-1.612s.637-1.613 1.438-1.613c.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612" />
                    </svg>
                  </Link>
                </li>
                <li className={style.footerWrapperLogoGroupListItem}>
                  <Link aria-label='link to the Email ggenius' to='mailto:mlbb.boss.ua@gmail.com' className={style.footerWrapperLogoGroupListItemLink}>

                    <svg className={style.footerWrapperLogoGroupListItemEmail} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M2 2A2 2 0 0 0 .05 3.555L8 8.414l7.95-4.859A2 2 0 0 0 14 2zm-2 9.8V4.698l5.803 3.546zm6.761-2.97-6.57 4.026A2 2 0 0 0 2 14h6.256A4.5 4.5 0 0 1 8 12.5a4.49 4.49 0 0 1 1.606-3.446l-.367-.225L8 9.586zM16 9.671V4.697l-5.803 3.546.338.208A4.5 4.5 0 0 1 12.5 8c1.414 0 2.675.652 3.5 1.671" />
                      <path d="M15.834 12.244c0 1.168-.577 2.025-1.587 2.025-.503 0-1.002-.228-1.12-.648h-.043c-.118.416-.543.643-1.015.643-.77 0-1.259-.542-1.259-1.434v-.529c0-.844.481-1.4 1.26-1.4.585 0 .87.333.953.63h.03v-.568h.905v2.19c0 .272.18.42.411.42.315 0 .639-.415.639-1.39v-.118c0-1.277-.95-2.326-2.484-2.326h-.04c-1.582 0-2.64 1.067-2.64 2.724v.157c0 1.867 1.237 2.654 2.57 2.654h.045c.507 0 .935-.07 1.18-.18v.731c-.219.1-.643.175-1.237.175h-.044C10.438 16 9 14.82 9 12.646v-.214C9 10.36 10.421 9 12.485 9h.035c2.12 0 3.314 1.43 3.314 3.034zm-4.04.21v.227c0 .586.227.8.581.8.31 0 .564-.17.564-.743v-.367c0-.516-.275-.708-.572-.708-.346 0-.573.245-.573.791" />
                    </svg>
                  </Link>
                </li>
              </ul>
            </div>

            <ul className={style.footerWrapperList}>
              <li className={style.footerWrapperListItem}>
                {/* <h6 className={style.footerWrapperListItemTitle}>
                {t('footerWrapperListItemTitle')}
              </h6> */}
              </li>
              <li className={style.navListItem}>
                <Link aria-label='link to the Home page' to={`/${lang}/Home`} className={currentPath.endsWith('/Home') ? style.navListItemLinkActive : style.navListItemLink}>
                  {t('home')}
                </Link>
              </li>
              <li className={style.navListItem}>
                <Link aria-label='link to the Heroes page' to={`/${lang}/Heroes`} onClick={e => e.preventDefault()} className={currentPath.endsWith('Heroes') ? style.navListItemLinkActive : style.navListItemLink}>
                  {t('heroes')}
                </Link>
              </li>
              <li className={style.navListItem}>
                <Link aria-label='link to the Contact page' className={style.navListItemLink} onClick={e => e.preventDefault()}>
                  {t('Notice')}
                </Link>
              </li>
              <li className={style.navListItem}>
                <Link to={`/${lang}/Blog`} aria-label='link to the Guides page' className={currentPath.endsWith('Blog') ? style.navListItemLinkActive : style.navListItemLink}>
                  {t('Guides')}
                </Link>
              </li>
              <li className={style.navListItem}>
                <Link aria-label='link to the esports' className={style.navListItemLink} onClick={e => e.preventDefault()}>
                  {t('Esports')}
                </Link>
              </li>
              <li className={style.navListItem}>
                <Link aria-label='link to the About page' to={`/${lang}/About`} className={currentPath.endsWith('About') ? style.navListItemLinkActive : style.navListItemLink}>
                  {t('about')}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  </>
}

export default Footer;