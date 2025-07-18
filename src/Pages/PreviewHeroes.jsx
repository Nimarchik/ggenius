import { useParams } from "react-router";
import { useTranslation } from "react-i18next";
import style from '../assets/style/index.module.css'
import { useEffect, useMemo, useState } from "react";
import Helmets from "./Helmets";
import useTranslatedList from '../hooks/useTranslatedList';
import { translateWithCache } from "../translateWithCache";


const PreviewHeroes = () => {

  const { id, lang } = useParams();
  const [heroesDetail, setHeroesDetail] = useState(null)
  const [loading, setLoading] = useState(true);
  const { t } = useTranslation();
  const img = localStorage.getItem('img')


  useEffect(() => {
    if (!id) return;

    const cacheKey = `hero_detail_${id}`;
    const cacheExpiration = 1000 * 60 * 5;

    const cached = localStorage.getItem(cacheKey);
    if (cached) {
      const parsed = JSON.parse(cached);
      const now = new Date().getTime();

      if (now - parsed.timestamp < cacheExpiration) {
        setHeroesDetail(parsed.data);
        setLoading(false);
        return;
      }
    }

    // const api = 'http://localhost/server/Heroes_Detail/index.php'
    const api = 'https://ggenius-api.onrender.com/heroDetail.php'


    fetch(api, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',

      },
      body: JSON.stringify({ id: id }),
    })
      .then(res => res.json())
      .then(data => {
        setHeroesDetail(data.data);
        setLoading(false);


        localStorage.setItem(
          cacheKey,
          JSON.stringify({
            data: data.data,
            timestamp: new Date().getTime()
          })
        );
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
  console.log(heroesDetail);




  const langCode = localStorage.getItem('value')

  function useTranslatedMap(list, lang) {
    const normalizedList = useMemo(() => {
      if (!list) return [];
      return list.filter(Boolean);
    }, [list]);

    const translatedList = useTranslatedList(normalizedList, lang);

    return useMemo(() => {
      const map = {};
      normalizedList.forEach((item, i) => {
        map[item] = translatedList[i];
      });
      return map;
    }, [normalizedList, translatedList]);
  }

  // Получаем списки для перевода
  const skillNames = useMemo(() => heroesDetail?.skill?.skill?.map(s => s?.name) || [], [heroesDetail]);
  const deskNames = useMemo(() => heroesDetail?.skill?.skill?.map(d => d?.des) || [], [heroesDetail]);
  const packNames = useMemo(() => heroesDetail?.gear?.out_pack?.map(q => q?.equip?.name) || [], [heroesDetail])

  // Получаем мапы переводов
  const translatedMap = useTranslatedMap(skillNames, langCode);
  const translatedMapDesk = useTranslatedMap(deskNames, langCode);
  const translatedMapPack = useTranslatedMap(packNames, langCode)







  if (loading) return <div className={style.loading}>
    <div className={style.spin}>
      <span className={style.spinSpan}></span>
    </div>
  </div>

  return <>
    <Helmets titleKey="Heroes.title" descKey="Heroes.description" />
    <section className={style.preview}>
      <div className={style.container}>
        <div className={style.previewWrapper}>
          <div className={style.previewWrapperCont}>
            <div className={style.previewWrapperContInner}>
              <img className={style.previewWrapperContImg} src={img} alt="" />

              <h1 className={style.previewWrapperTitle}>{t(heroesDetail.name)}</h1>
            </div>
            <div className={style.previewWrapperContInf}>
              <div className={style.previewWrapperContInf2}>
                <h2 className={style.previewWrapperContInf2Title}>{t('previewWrapperContInf2Title')}
                </h2>
                <p className={style.previewWrapperContInf2Sub}>
                  {t(heroesDetail.type)}
                </p>
              </div>
              <div className={style.previewWrapperContInf3}>
                <h2 className={style.previewWrapperContInf3Title}>{t('previewWrapperContInf3Title')}</h2>
                <div className={style.previewWrapperContInf3List}>
                  {
                    heroesDetail.gear.out_pack.map((pack, index) => (

                      <div key={index} className={style.previevContInf3ListItem}>
                        <img src={pack.equip.icon} alt="" className={style.previevContInf3ListItemIcon} />
                        <p className={style.previevContInf3ListItemIconName}>
                          {/* {pack.equip.name} */}
                          {translatedMapPack[pack.equip.name] || pack.equip.name}

                        </p>
                      </div>
                    ))
                  }

                </div>
              </div>
            </div>

          </div>
          <div className={style.previewWrapperSkills}>
            <h3 className={style.previewWrapperSkillsTitle}>
              {t('previewWrapperSkillsTitle')}
            </h3>
            <ul className={style.previewWrapperContList}>

              {
                heroesDetail.skill.skill.map((skill, index) => (
                  <li key={index} className={style.previewWrapperContListItem}>
                    <div className={style.previewWrapperContListItemCont}>
                      <img className={style.previewWrapperContListItemImg} src={skill.icon} alt="" />
                      <h2 className={style.previewWrapperContListItemContTitle}>
                        {translatedMap[skill.name] || skill.name || 'Без названия'}
                      </h2>
                      {/* <p className={style.previewWrapperContListItemContSub}>{skill["skillcd&cost"]}</p> */}
                    </div>
                    <p
                      className={style.previewWrapperContListItemSubs}
                      dangerouslySetInnerHTML={{ __html: clearText(translatedMapDesk[skill.des] || skill.des) }}
                    ></p>
                  </li>
                ))
              }
            </ul>
          </div>


        </div>
      </div>
    </section>
  </>
}

export default PreviewHeroes;