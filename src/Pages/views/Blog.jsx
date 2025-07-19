import { Logger } from 'sass';
import style from '../../assets/style/index.module.css'
import { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router';
import { useTranslation } from 'react-i18next';
import Helmets from '../Helmets';
import useTranslatedList from '../../hooks/useTranslatedList';



const Blog = () => {
  const { t } = useTranslation();
  const [show, setShow] = useState(false)
  const [loading, setLoading] = useState(true)

  const [patches, setPatches] = useState([]);


  useEffect(() => {
    const api = 'https://ggenius-api.onrender.com/blogs/index.php';
    fetch(api)
      .then(res => res.json())
      .then(data => {
        setPatches(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Ошибка загрузки патчей:', err);
      });
  }, []);


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
  const title = useMemo(() => patches?.map(s => s?.title) || [], [patches]);
  const des = useMemo(() => patches?.map(s => s?.content) || [], [patches]);

  // Получаем мапы переводов
  const translatedMap = useTranslatedMap(title, langCode);
  const translatedMapDes = useTranslatedMap(des, langCode);






 if (loading) return <div className={style.loading}>
    <div className={style.spin}>
      <span className={style.spinSpan}></span>
    </div>
  </div>

  return <>
    <Helmets titleKey='Blog.title' descKey="Blog.description" />

    <section className={style.blog}>
      <div className={style.container}>
        <div className={style.blogWrapper}>
          <h1 className={style.blogWrapperTitle}>
            {t('blogWrapperTitle')}
          </h1>
          <div className={style.blogWrapperPatches}>
            {
              patches.map((item) => (
                <div onClick={() => setShow(!show)} className={style.blogWrapperPatchesInner} key={item.id}>
                  <div data-aos="fade-down">
                    <div className={style.blogWrapperPatchesInnerGroup}>
                      <img className={style.blogWrapperPatchesInnerGroupImg} src={item.image} alt="" />
                      <div className={style.blogWrapperPatchesInnerGroupText}>
                        <h1 className={style.blogWrapperPatchesInnerTitle}>{translatedMap[item.title] || item.title}</h1>
                        <p className={style.blogWrapperPatchesInnerGroupTextDate}>
                          {item.date}
                        </p>
                      </div>
                      <p className={show ? style.blogWrapperPatchesInnerGroupTimeActive : style.blogWrapperPatchesInnerGroupTime}>
                        {translatedMapDes[item.content] || item.content}
                      </p>
                      <p className={style.blogWrapperPatchesInnerGroupShow}>
                        {show ? t('hidden') : t('show')}
                      </p>
                    </div>
                    <p className={style.blogWrapperPatchesInnerSub}>
                      {item.changeLogs
                      }
                    </p>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </section>
  </>
}

export default Blog;