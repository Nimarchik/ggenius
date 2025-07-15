import { useTranslation } from 'react-i18next';
import style from '../../assets/style/index.module.css'
import logo from '../../assets/pictures/About/file_0000000051f0620aaa793dae457b6ac7-removebg-preview.svg'
import logoMis from '../../assets/pictures/About/dart-mission-goal-success-svgrepo-com.svg'
import logoPla from '../../assets/pictures/About/talent-development-svgrepo-com.svg'
import logoCup from '../../assets/pictures/About/cup-reward-svgrepo-com.svg'

import insignia from '../../assets/pictures/About/insignia.png'
import give from '../../assets/pictures/About/give.png'
import trophy from '../../assets/pictures/About/trophy.png'
import { Link } from 'react-router';
import alpha from '../../assets/pictures/About/alpha.jpg'
import fasha from '../../assets/pictures/About/fasha.jpeg'
import Helmets from '../Helmets';


const About = () => {
  const { t } = useTranslation()

  return <>

    <Helmets titleKey='abouts.title' descKey='abouts.description' />

    <section className={style.about}>
      <div className={style.container}>
        <div className={style.aboutWrapper}>
          <div className={style.aboutWrapperCont}>
            <p className={style.aboutWrapperContSub}>
              {t('aboutWrapperContSub')}
            </p>
            <h1 className={style.aboutWrapperContTitle}>
              {t('aboutWrapperContTitle')}
            </h1>
          </div>
        </div>
      </div>
    </section>

    <section className={style.aboutCont}>
      <div className={style.container}>
        <div className={style.aboutContWrapper}>
          <div className={style.aboutContWrapperCont}>
            <h2 className={style.aboutContWrapperTitle}>
              {t('aboutContWrapperTitle')}
            </h2>
            <p className={style.aboutContWrapperSub}>
              {t('aboutContWrapperSub')}
            </p>
          </div>
          <img className={style.aboutContWrapperImg} src={logo} alt="img logo" />
        </div>
      </div>
    </section>

    <section className={style.mission}>
      <div className={style.container}>
        <div className={style.missionWrapper}>
          <div data-aos="zoom-out-down">
            <h3 className={style.missionWrapperTitle}>
              {t('missionWrapperTitle')}
            </h3>
          </div>

          <div className={style.missionWrapperGroups}>

            <div data-aos="fade-right">
              <div className={style.missionWrapperGtoupsMis}>
                <div className={style.missionWrapperGtoupsMisCont}>
                  <h3 className={style.missionWrapperGtoup1Title}>
                    {t('missionWrapperGtoup1Title')}
                  </h3>
                  <p className={style.missionWrapperGtoupsMisContSub}>
                    {t('missionWrapperGtoupsMisContSub')}
                  </p>
                </div>
                <img className={style.missionWrapperGtoupsMisImg} src={logoMis} alt="icon mission" />
              </div>
            </div>

            <div data-aos="fade-left">
              <div className={style.missionWrapperGtoupsPla}>
                <div className={style.missionWrapperGtoupsPlaCont}>
                  <h3 className={style.missionWrapperGtoupPlaContTitle}>
                    {t('missionWrapperGtoupPlaTitle')}
                  </h3>
                  <p className={style.missionWrapperGtoupsPlaContSub}>
                    {t('missionWrapperGtoupsPlaContSub')}
                  </p>
                </div>
                <img className={style.missionWrapperGtoupsPlaImg} src={logoPla} alt="icon platform" />
              </div>
            </div>

            <div data-aos="fade-right">
              <div className={style.missionWrapperGtoupsMis}>
                <div className={style.missionWrapperGtoupsMisCont}>
                  <h3 className={style.missionWrapperGtoup1Title}>
                    {t('missionWrapperGtoupCupTitle')}
                  </h3>
                  <p className={style.missionWrapperGtoupsMisContSub}>
                    {t('missionWrapperGtoupsCupContSub')}
                  </p>
                </div>
                <img className={style.missionWrapperGtoupsMisImg} src={logoCup} alt="icon cup" />
              </div>
            </div>

          </div>
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

            <div data-aos="fade-right"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine">
              <div className={style.roadmapWrapperTimeLineCompleated}>
                <div className={style.roadmapWrapperTimeLineCompleatedImg}>✅</div>
                <div className={style.roadmapWrapperTimeLineCompleatedCont}>
                  <p className={style.roadmapWrapperTimeLineCompleatedSubs}>Q4 2025</p>
                  <h4 className={style.roadmapWrapperTimeLineCompleatedTitle}>Запуск Telegram-бота GGenius</h4>
                  <p className={style.roadmapWrapperTimeLineCompleatedSub}>
                    {t('roadmapWrapperTimeLineCompleatedSubAbout')}
                  </p>
                  <div className={style.progressbar} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
                    <div className={style.progressFill}></div>

                  </div>
                  <p className={style.progressbarSub}>
                    {t('progressbarSub')}
                  </p>
                </div>
              </div>
            </div>

            <div data-aos="fade-right"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine">
              <div className={style.roadmapWrapperTimeLineCurrent}>
                <div className={style.roadmapWrapperTimeLineCurrentImg}>🚀</div>
                <div className={style.roadmapWrapperTimeLineCurrentCont}>
                  <p className={style.roadmapWrapperTimeLineCurrentSubs}>Q1 2026</p>
                  <h4 className={style.roadmapWrapperTimeLineCurrentTitle}>Впровадження власної криптовалюти для гравців та комʼюніті</h4>
                  <p className={style.roadmapWrapperTimeLineCurrentSub}>
                    {t('roadmapWrapperTimeLineCurrentSubAbout')}
                  </p>
                  <div className={style.progressbarCurrent} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
                    <div className={style.progressFillCurrentAbout}></div>

                  </div>
                  <p className={style.progressbarSub}>
                    {t('progressbarSubCurrentAbout')}
                  </p>
                </div>
              </div>
            </div>

            <div data-aos="fade-right"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine">
              <div className={style.roadmapWrapperTimeLineFuture}>
                <div className={style.roadmapWrapperTimeLineFutureImg}></div>
                <div className={style.roadmapWrapperTimeLineFutureCont}>
                  <p className={style.roadmapWrapperTimeLineFutureSubs}>Q1 2027</p>
                  <h4 className={style.roadmapWrapperTimeLineFutureTitle}>
                    {t('roadmapWrapperTimeLineFutureTitle27')}
                  </h4>
                  <p className={style.roadmapWrapperTimeLineFutureSub}>
                    {t('roadmapWrapperTimeLineFuture1SubAbout')}
                  </p>
                  <div className={style.progressbar} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
                    <div className={style.progressFillFuture}></div>

                  </div>
                  <p className={style.progressbarSub}>
                    {t('progressbarSubFutureAbout1')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className={style.prospects}>
      <div className={style.container}>
        <div className={style.prospectsWrapper}>

          <div data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="500">
            <div className={style.prospectsWrapperCont}>
              <h4 className={style.prospectsWrapperContTitle}>
                {t('prospectsWrapperContTitle')}
              </h4>
              <p className={style.prospectsWrapperContSub}>
                {t('prospectsWrapperContSub')}
              </p>
            </div>
          </div>


          <div className={style.prospectsWrapperList}>

            <div data-aos="flip-left" data-aos-duration="500">
              <div className={style.prospectsWrapperListItem}>
                <img src={insignia} alt="icon insignia" className={style.prospectsWrapperListItemImg} />
                <h5 className={style.prospectsWrapperListItemTitle}>
                  {t('prospectsWrapperListItemTitleGame')}
                </h5>
                <p className={style.prospectsWrapperListItemSub}>
                  {t('prospectsWrapperListItemSubGame')}
                </p>
              </div>
            </div>

            <div data-aos="flip-left" data-aos-duration="600">
              <div className={style.prospectsWrapperListItem}>
                <img src={give} alt="icon cryptocurrency" className={style.prospectsWrapperListItemImg} />
                <h5 className={style.prospectsWrapperListItemTitle}>
                  {t('prospectsWrapperListItemTitleCryp')}
                </h5>
                <p className={style.prospectsWrapperListItemSub}>
                  {t('prospectsWrapperListItemSubCryp')}
                </p>
              </div>
            </div>

            <div data-aos="flip-left" data-aos-duration="3000">
              <div className={style.prospectsWrapperListItem}>
                <img src={trophy} alt="icon influence" className={style.prospectsWrapperListItemImg} />
                <h5 className={style.prospectsWrapperListItemTitle}>
                  {t('prospectsWrapperListItemTitleFut')}
                </h5>
                <p className={style.prospectsWrapperListItemSub}>
                  {t('prospectsWrapperListItemSubFut')}
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>

    <section className={style.subscribe}>
      <div className={style.container}>
        <div className={style.subscribeWrapper}>


          <div className={style.subscribeWrapperCont}>
            <h6 className={style.subscribeWrapperContTitle}>
              {t('subscribeWrapperContTitle')}
            </h6>
            <p className={style.subscribeWrapperContSub}>
              {t('subscribeWrapperContSub')}
            </p>
          </div>




          <div className={style.subscribeWrapperList}>
            <div data-aos="fade-up"
              data-aos-anchor-placement="center-bottom">
              <div className={style.subscribeWrapperListItem}>
                <Link aria-label='link to the Telegram chanel' className={style.subscribeWrapperListItemTgCa} to={'https://t.me/ggenius_gg'}>
                  <img className={style.subscribeWrapperListItemImgTgCa} src={alpha} alt="img mllbb hero alpha" />
                  <span className={style.span}></span>
                  <div className={style.subscribeWrapperListItemCont}>
                    <h6 className={style.subscribeWrapperListItemContTitle}>
                      {t('subscribeWrapperListItemContTitleTg')}
                    </h6>
                    <p className={style.subscribeWrapperListItemContSub}>
                      {t('subscribeWrapperListItemContSubTg')}
                    </p>
                    <p className={style.subscribeWrapperListItemLink}>
                      {t('subscribeWrapperListItemLink')} {'>'}
                    </p>
                  </div>
                </Link>
              </div>
            </div>



            <div data-aos="fade-up"
              data-aos-anchor-placement="center-bottom">
              <div className={style.subscribeWrapperListItem}>
                <Link aria-label='link to the Telegram chat' className={style.subscribeWrapperListItemTgCh} to={'https://t.me/ggenius_chat'}>
                  <img className={style.subscribeWrapperListItemImg} src={fasha} alt="img mllbb hero fasha" />
                  <span className={style.span}></span>

                  <div className={style.subscribeWrapperListItemCont}>
                    <h6 className={style.subscribeWrapperListItemContTitle}>
                      {t('subscribeWrapperListItemContTitle')}
                    </h6>
                    <p className={style.subscribeWrapperListItemContSubs}>
                      {t('subscribeWrapperListItemContSub')}
                    </p>
                    <p className={style.subscribeWrapperListItemLink1}>
                      {t('subscribeWrapperListItemLink')} {'>'}
                    </p>
                  </div>
                </Link>
              </div>
            </div>

          </div>


        </div>
      </div>
    </section>
  </>
}

export default About;