import { useLocation, useParams } from "react-router";
import { useTranslation } from "react-i18next";
import style from '../assets/style/index.module.css'
import { useEffect, useState } from "react";



const PreviewHeroes = () => {



  const { id, lang } = useParams();
  const [heroesDetail, setHeroesDetail] = useState(null)
  const [loading, setLoading] = useState(true);
  const { t } = useTranslation();
  const img = localStorage.getItem('img')
  console.log(img);
  
  // const [items, setItems] = useState(location.state?.items || [])


  // useEffect(() => {
  //   if (location.state && location.state.items) {
  //     setItems(location.state.items)
  //   }
  //   localStorage.getItem('value')
  // }, [location.state])

  useEffect(() => {



    if (!id) return;

    fetch('http://localhost/server/Heroes_Detail/index.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id: id }),
    })
      .then(res => res.json())
      .then(data => {
        setHeroesDetail(data.data)
        // console.log(data.data);
        setLoading(false);

      })
      .catch(err => {
        console.error('Ошибка при отправке ID:', err);
      });

  }, [id, lang]);

  const clearText = (htmlString) => {
    if (!htmlString) return '';

    const converted = htmlString
      .replace(/<font[^>]*color=["']?([^"'>]+)["']?[^>]*>/gi, '<span style="color: #fba51f">')
      .replace(/<\/font>/gi, '</span>');

    return converted;
  };



  if (loading) return <div className={style.loading}>
    <div className={style.spin}>
      <span className={style.spinSpan}></span>
    </div>
  </div>


  // if (!heroesDetail?.hero?.data) {
  //   return <div className={style.loading}>
  //     <div className={style.spin}>
  //       <span className={style.spinSpan}></span>
  //     </div>
  //   </div>
  // }

  // if (heroesDetail === null) {
  //   return <div>Герой не найден</div>;
  // }



  // console.log(heroesDetail);







  return <>

    <section className={style.preview}>
      <div className={style.container}>
        <div className={style.previewWrapper}>
          <div className={style.previewWrapperCont}>
            <div className={style.previewWrapperContInner}>
              <img className={style.previewWrapperContImg} src={img} alt="" />

              <h1 className={style.previewWrapperTitle}>{t(heroesDetail.name)}</h1>
            </div>
            <div className={style.previewWrapperContInf}>
              <div className={style.previewWrapperContInf1}>
                <h2 className={style.previewWrapperContInf1Title}>{t('previewWrapperContInf1Title')}
                  {/* <img className={style.previewWrapperContInnerGoupsImg} src={heroesDetail.hero.data.sortlabel[0] == 'Marksman' ? heroesDetail.hero.data.roadsort[0].data.road_sort_icon : heroesDetail.hero.data.roadsorticon1} alt="" /> */}

                </h2>
                <p className={style.previewWrapperContInf1Sub}>
                  {/* {t(heroesDetail.hero.data.roadsort[0].data.road_sort_title)} */}
                </p>
              </div>
              <div className={style.previewWrapperContInf2}>
                <h2 className={style.previewWrapperContInf2Title}>{t('previewWrapperContInf2Title')}
                  {/* <img className={style.previewWrapperContInnerGoupsImg} src={heroesDetail.hero.data.sorticon1} alt="" /> */}
                </h2>
                <p className={style.previewWrapperContInf2Sub}>
                  {/* {t(heroesDetail.hero.data.sortlabel[0])} */}
                </p>
              </div>
              <div className={style.previewWrapperContInf3}>
                <h2 className={style.previewWrapperContInf2Title}>{t('previewWrapperContInf3Title')}</h2>
                {/* <p className={heroesDetail.hero.data.sortlabel[0] == 'Mage' ? style.previewWrapperContInf3SubMag : style.previewWrapperContInf3SubFiz && heroesDetail.hero.data.speciality[1] == 'Magic Damage' ? style.previewWrapperContInf3SubMag : style.previewWrapperContInf3SubFiz}>
                  {heroesDetail.hero.data.sortlabel[0] == 'Mage' ? t(heroesDetail.hero.data.sortlabel[0]) : t(heroesDetail.hero.data.speciality[1])}

                 
                </p> */}
              </div>
            </div>

          </div>
          <div className={style.previewWrapperSkills}>
            <h3 className={style.previewWrapperSkillsTitle}>
              {t('previewWrapperSkillsTitle')}
            </h3>
            <ul className={style.previewWrapperContList}>
              {/* {
                heroesDetail.hero.data.heroskilllist[0].skilllist.map((skill, index) => (
                  <li key={index} className={style.previewWrapperContListItem}>
                    <div className={style.previewWrapperContListItemCont}>
                      <img className={style.previewWrapperContListItemImg} src={skill.skillicon} alt="" />
                      <h2 className={style.previewWrapperContListItemContTitle}>{skill.skillname}</h2>
                      <p className={style.previewWrapperContListItemContSub}>{skill["skillcd&cost"]}</p>
                    </div>
                    <p
                      className={style.previewWrapperContListItemSubs}
                      dangerouslySetInnerHTML={{ __html: clearText(skill.skilldesc) }}
                    ></p>
                  </li>
                ))
              } */}
            </ul>
          </div>


        </div>
      </div>
    </section>
  </>
}

export default PreviewHeroes;