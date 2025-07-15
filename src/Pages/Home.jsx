
import style from '../assets/style/index.module.css'
import ggenius from '../assets/pictures/Home/ggenius.webp'
import { Link } from 'react-router';
import { useTranslation } from 'react-i18next';
import Helmets from './Helmets';


const Home = () => {
  const { t } = useTranslation()

  return <>

    <Helmets titleKey='homes.title' descKey='homes.description' />

    <section className={style.home}>
      <div className={style.container}>
        <div className={style.homeWrapper}>
          <div className={style.homeWrapperCont}>
            <h1 className={style.homeWrapperTitle}>
              <p className={style.homeWrapperTitleSubs}>
                {t('homeWrapperTitleSubs')}
              </p>
              {t('homeWrapperTitle')}
            </h1>

            <p className={style.homeWrapperSub}>
              {t('homeWrapperSub')}
            </p>
            <div className={style.homeWrapperContBtns}>
              <Link aria-label='link to the Telegram chat' to={'https://t.me/ggenius_gg'} className={style.homeWrapperContBtn}>
                <svg className={style.homeWrapperContBtnTg} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path className={style.tgPath} d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.287 5.906q-1.168.486-4.666 2.01-.567.225-.595.442c-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294q.39.01.868-.32 3.269-2.206 3.374-2.23c.05-.012.12-.026.166.016s.042.12.037.141c-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8 8 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629q.14.092.27.187c.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.4 1.4 0 0 0-.013-.315.34.34 0 0 0-.114-.217.53.53 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09" />
                </svg>
                Telegram
              </Link>
              <Link aria-label='link to the Discord server' to={'https://discord.gg/8Ydy3dHaqV'} className={style.homeWrapperContBtnDs}>
                <svg className={style.homeWrapperContBtnDsSvg} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M13.545 2.907a13.2 13.2 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.2 12.2 0 0 0-3.658 0 8 8 0 0 0-.412-.833.05.05 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.04.04 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032q.003.022.021.037a13.3 13.3 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019q.463-.63.818-1.329a.05.05 0 0 0-.01-.059l-.018-.011a9 9 0 0 1-1.248-.595.05.05 0 0 1-.02-.066l.015-.019q.127-.095.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.05.05 0 0 1 .053.007q.121.1.248.195a.05.05 0 0 1-.004.085 8 8 0 0 1-1.249.594.05.05 0 0 0-.03.03.05.05 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.2 13.2 0 0 0 4.001-2.02.05.05 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.03.03 0 0 0-.02-.019m-8.198 7.307c-.789 0-1.438-.724-1.438-1.612s.637-1.613 1.438-1.613c.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612m5.316 0c-.788 0-1.438-.724-1.438-1.612s.637-1.613 1.438-1.613c.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612" />
                </svg>
                Discord
              </Link>
            </div>

          </div>
          <img src={ggenius} alt="Logo GGenius" className={style.homeWrapperImg} />
        </div>
      </div>
    </section>

    <section className={style.works}>
      <div className={style.container}>
        <div className={style.worksWrapper}>
          <div data-aos="fade-up">
            <div className={style.worksWrapperCont}>
              <h2 className={style.worksWrapperTitle}>
                {t('worksWrapperTitle')}
              </h2>
              <p className={style.worksWrapperSub}>
                {t('worksWrapperSub')}
              </p>
            </div>
          </div>

          <ul className={style.worksWrapperList}>
            <li className={style.worksWrapperListItem}>
              <div data-aos="fade-right">
                <div className={style.worksWrapperListItemGroups}>
                  <svg className={style.worksWrapperListItemImg} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
                  </svg>
                  <div className={style.worksWrapperListItemCont}>
                    <h3 className={style.worksWrapperListItemTitle}>
                      {t('Register')}
                    </h3>
                    <p className={style.worksWrapperListItemSub}>
                      {t('RegisterSub')}
                    </p>
                  </div>
                </div>
              </div>
            </li>

            <li className={style.worksWrapperListItem}>
              <div data-aos="fade-left">
                <div className={style.worksWrapperListItemGroups}>
                  <div className={style.worksWrapperListItemCont}>

                    <h3 className={style.worksWrapperListItemTitle}>
                      {t('AI')}
                    </h3>
                    <p className={style.worksWrapperListItemSub}>
                      {t('AISub')}
                    </p>
                  </div>
                  <svg className={style.worksWrapperListItemImg} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M6 12.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5M3 8.062C3 6.76 4.235 5.765 5.53 5.886a26.6 26.6 0 0 0 4.94 0C11.765 5.765 13 6.76 13 8.062v1.157a.93.93 0 0 1-.765.935c-.845.147-2.34.346-4.235.346s-3.39-.2-4.235-.346A.93.93 0 0 1 3 9.219zm4.542-.827a.25.25 0 0 0-.217.068l-.92.9a25 25 0 0 1-1.871-.183.25.25 0 0 0-.068.495c.55.076 1.232.149 2.02.193a.25.25 0 0 0 .189-.071l.754-.736.847 1.71a.25.25 0 0 0 .404.062l.932-.97a25 25 0 0 0 1.922-.188.25.25 0 0 0-.068-.495c-.538.074-1.207.145-1.98.189a.25.25 0 0 0-.166.076l-.754.785-.842-1.7a.25.25 0 0 0-.182-.135" />
                    <path d="M8.5 1.866a1 1 0 1 0-1 0V3h-2A4.5 4.5 0 0 0 1 7.5V8a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1v1a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-1a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1v-.5A4.5 4.5 0 0 0 10.5 3h-2zM14 7.5V13a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7.5A3.5 3.5 0 0 1 5.5 4h5A3.5 3.5 0 0 1 14 7.5" />
                  </svg>
                </div>
              </div>
            </li>

            <li className={style.worksWrapperListItem}>
              <div data-aos="fade-right">
                <div className={style.worksWrapperListItemGroups}>
                  <svg className={style.worksWrapperListItemImg} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M2.5.5A.5.5 0 0 1 3 0h10a.5.5 0 0 1 .5.5q0 .807-.034 1.536a3 3 0 1 1-1.133 5.89c-.79 1.865-1.878 2.777-2.833 3.011v2.173l1.425.356c.194.048.377.135.537.255L13.3 15.1a.5.5 0 0 1-.3.9H3a.5.5 0 0 1-.3-.9l1.838-1.379c.16-.12.343-.207.537-.255L6.5 13.11v-2.173c-.955-.234-2.043-1.146-2.833-3.012a3 3 0 1 1-1.132-5.89A33 33 0 0 1 2.5.5m.099 2.54a2 2 0 0 0 .72 3.935c-.333-1.05-.588-2.346-.72-3.935m10.083 3.935a2 2 0 0 0 .72-3.935c-.133 1.59-.388 2.885-.72 3.935" />
                  </svg>
                  <div className={style.worksWrapperListItemCont}>
                    <h3 className={style.worksWrapperListItemTitle}>
                      {t('Tournament')}
                    </h3>
                    <p className={style.worksWrapperListItemSub}>
                      {t('TournamentSub')}
                    </p>
                  </div>
                </div>
              </div>
            </li>
          </ul>

        </div>
      </div>
    </section>
    <section className={style.roadmap}>
      <div className={style.container}>
        <div className={style.roadmapWrapper}>
          <div data-aos="zoom-in">
            <div className={style.roadmapWrapperCont}>
              <h4 className={style.roadmapWrapperContTitle}>
                {t('roadmapWrapperTitle')}
              </h4>
              <p className={style.roadmapWrapperContSub}>
                {t('roadmapWrappersub')}
              </p>
            </div>
          </div>
          <div className={style.roadmapWrapperTimeLine}>
            <div data-aos="zoom-out-right">
              <div className={style.roadmapWrapperTimeLineCompleated}>
                <div className={style.roadmapWrapperTimeLineCompleatedImg}>✅</div>
                <div className={style.roadmapWrapperTimeLineCompleatedCont}>
                  <p className={style.roadmapWrapperTimeLineCompleatedSubs}>Q1 2025</p>
                  <h4 className={style.roadmapWrapperTimeLineCompleatedTitle}>MVP Launch</h4>
                  <p className={style.roadmapWrapperTimeLineCompleatedSub}>
                    {t('roadmapWrapperTimeLineCompleatedSub')}
                  </p>
                  <div className={style.progressbar}>
                    <div className={style.progressFill}></div>

                  </div>
                  <p className={style.progressbarSub}>
                    {t('progressbarSub')}
                  </p>
                </div>
              </div>
            </div>
            <div data-aos="zoom-out-right">

              <div className={style.roadmapWrapperTimeLineCurrent}>
                <div className={style.roadmapWrapperTimeLineCurrentImg}>🚀</div>
                <div className={style.roadmapWrapperTimeLineCurrentCont}>
                  <p className={style.roadmapWrapperTimeLineCurrentSubs}>Q2 2025</p>
                  <h4 className={style.roadmapWrapperTimeLineCurrentTitle}>AI Cards Hub Launch</h4>
                  <p className={style.roadmapWrapperTimeLineCurrentSub}>
                    {t('roadmapWrapperTimeLineCurrentSub')}
                  </p>
                  <div className={style.progressbarCurrent}>
                    <div className={style.progressFillCurrent}></div>

                  </div>
                  <p className={style.progressbarSub}>
                    {t('progressbarSubCurrent')}
                  </p>
                </div>
              </div>
            </div>
            <div data-aos="zoom-out-right">

              <div className={style.roadmapWrapperTimeLineFuture}>
                <div className={style.roadmapWrapperTimeLineFutureImg}>👥</div>
                <div className={style.roadmapWrapperTimeLineFutureCont}>
                  <p className={style.roadmapWrapperTimeLineFutureSubs}>Q3 2025</p>
                  <h4 className={style.roadmapWrapperTimeLineFutureTitle}>Community & Tournaments</h4>
                  <p className={style.roadmapWrapperTimeLineFutureSub}>
                    {t('roadmapWrapperTimeLineFuture1Sub')}
                  </p>
                  <div className={style.progressbar} >
                    <div className={style.progressFillFuture1}></div>

                  </div>
                  <p className={style.progressbarSub}>
                    {t('progressbarSubFuture1')}
                  </p>
                </div>
              </div>
            </div>
            <div data-aos="zoom-out-right">

              <div className={style.roadmapWrapperTimeLineFuture}>
                <div className={style.roadmapWrapperTimeLineFutureImg}>💎</div>
                <div className={style.roadmapWrapperTimeLineFutureCont}>
                  <p className={style.roadmapWrapperTimeLineFutureSubs}>Q4 2025</p>
                  <h4 className={style.roadmapWrapperTimeLineFutureTitle}>Platform Launch & Token</h4>
                  <p className={style.roadmapWrapperTimeLineFutureSub}>
                    {t('roadmapWrapperTimeLineFuture2Sub')}
                  </p>
                  <div className={style.progressbar} >
                    <div className={style.progressFillFuture2}></div>

                  </div>
                  <p className={style.progressbarSub}>
                    {t('progressbarSubFuture2')}
                  </p>
                </div>
              </div>
            </div>
            <div data-aos="zoom-out-right">

              <div className={style.roadmapWrapperTimeLineFuture}>
                <div className={style.roadmapWrapperTimeLineFutureImg}>🌍</div>
                <div className={style.roadmapWrapperTimeLineFutureCont}>
                  <p className={style.roadmapWrapperTimeLineFutureSubs}>Q1 2026</p>
                  <h4 className={style.roadmapWrapperTimeLineFutureTitle}>Global Expansion</h4>
                  <p className={style.roadmapWrapperTimeLineFutureSub}>
                    {t('roadmapWrapperTimeLineFuture3Sub')}
                  </p>
                  <div className={style.progressbar} >
                    <div className={style.progressFillFuture3}></div>

                  </div>
                  <p className={style.progressbarSub}>
                    {t('progressbarSubFuture3')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>

}


export default Home
