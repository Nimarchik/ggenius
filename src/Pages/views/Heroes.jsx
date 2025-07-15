import { Link, useParams } from 'react-router';
import style from '../../assets/style/index.module.css'
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Helmets from '../Helmets';

const Heroes = () => {

  const [heroes, setHeroes] = useState([])
  const [heroImg, setHeroImg] = useState('')
  const { t } = useTranslation();
  const { l: lang } = useParams();
  const [loading, setLoading] = useState(true)
  const [currentPage, setCurrentPage] = useState(localStorage.getItem("currentPage") || 1);
  const itemsPerPage = 15;

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const visibleHeroes = heroes.slice(startIndex, endIndex);

  localStorage.setItem('currentPage', currentPage)

  useEffect(() => {
    if (currentPage) {
      window.scroll(0, 0)
    }
  }, [currentPage])


  useEffect(() => {
    const cacheKey = 'heroes_cache';
    const cacheExpiration = 1000 * 60 * 5;

    const cached = localStorage.getItem(cacheKey);
    if (cached) {
      const parsed = JSON.parse(cached);
      const now = new Date().getTime();

      if (now - parsed.timestamp < cacheExpiration) {
        setHeroes(parsed.data);
        setLoading(false);
        return;
      }
    }

    const api = 'http://localhost/server/heroes/index.php';

    // const api = 'https://ggenius-api.infy.uk/api/heroes/index.php?nocache=' + Date.now()
    fetch(api)
      .then(res => res.json())
      .then(data => {
        const heroesData = data.data.reverse();
        console.log(data);

        setHeroes(heroesData);
        localStorage.setItem(
          cacheKey,
          JSON.stringify({
            data: heroesData,
            timestamp: new Date().getTime()
          })
        );
        setLoading(false);
      })
      .catch(error => {
        console.error('Ошибка при выполнении запроса:', error);
      });
  }, []);

  useEffect(() => {
    localStorage.setItem('img', heroImg)
  }, [heroImg])


  if (loading) return <div className={style.loading}>
    <div className={style.spin}>
      <span className={style.spinSpan}></span>
    </div>
  </div>

  return <>
    <Helmets titleKey='Heroes.title' descKey="Heroes.description" />

    <section className={style.heroes}>
      <div className={style.container}>
        <div className={style.heroesWrapper}>

          <div data-aos="fade-down">
            <div className={style.heroesWrapperCont}>
              <h1 className={style.heroesWrapperTitle}>
                {t('heroesWrapperTitle')}
              </h1>
              <p className={style.heroesWrapperContSub}>
                {t('heroesWrapperContSub')}
              </p>
            </div>
          </div>

          <div className={style.heroesWrapperBody}>
            {/* <div className={style.heroesWrapperBodyFilter}>
              <h2 className={style.heroesWrapperBodyFilterTitle}>
                {t('heroesWrapperBodyFilterTitle')}
              </h2>
              <label className={style.heroesWrapperBodyFilterLable} >
                <svg className={style.heroesWrapperBodyFilterLableSvg} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z" />
                </svg>
                <p className={value == 'Marksman' ? style.heroesWrapperBodyFilterLableSunActive : style.heroesWrapperBodyFilterLableSun}>
                  {t('Marksman')}
                </p>
                <input className={style.heroesWrapperBodyFilterLableImp} type='checkbox' value='Marksman' checked={value === 'Marksman'} onChange={handleRoleChange} />
              </label>
              <label className={style.heroesWrapperBodyFilterLable}>
                <svg className={style.heroesWrapperBodyFilterLableSvg} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z" />
                </svg>
                <p className={value == 'mage' ? style.heroesWrapperBodyFilterLableSunActive : style.heroesWrapperBodyFilterLableSun}>
                  {t('mage')}
                </p>
                <input className={style.heroesWrapperBodyFilterLableImp} type='checkbox' value='mage' id='mage' checked={value === 'mage'} onChange={handleRoleChange} />
              </label>
              <label className={style.heroesWrapperBodyFilterLable}>
                <svg className={style.heroesWrapperBodyFilterLableSvg} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z" />
                </svg>
                <p className={value == 'tank' ? style.heroesWrapperBodyFilterLableSunActive : style.heroesWrapperBodyFilterLableSun}>
                  {t('tank')}
                </p>
                <input className={style.heroesWrapperBodyFilterLableImp} type='checkbox' value='tank' id='tank' checked={value === 'tank'} onChange={handleRoleChange} />
              </label>
              <label className={style.heroesWrapperBodyFilterLable}>
                <svg className={style.heroesWrapperBodyFilterLableSvg} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z" />
                </svg>
                <p className={value == 'support' ? style.heroesWrapperBodyFilterLableSunActive : style.heroesWrapperBodyFilterLableSun}>
                  {t('support')}
                </p>
                <input className={style.heroesWrapperBodyFilterLableImp} type='checkbox' value='support' id='support' checked={value === 'support'} onChange={handleRoleChange} />
              </label>
              <label className={style.heroesWrapperBodyFilterLable}>
                <svg className={style.heroesWrapperBodyFilterLableSvg} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z" />
                </svg>
                <p className={value == 'fighter' ? style.heroesWrapperBodyFilterLableSunActive : style.heroesWrapperBodyFilterLableSun}>
                  {t('fighter')}
                </p>
                <input className={style.heroesWrapperBodyFilterLableImp} type='checkbox' value='fighter' id='fighter' checked={value === 'fighter'} onChange={handleRoleChange} />
              </label>
              <label className={style.heroesWrapperBodyFilterLable}>
                <svg className={style.heroesWrapperBodyFilterLableSvg} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z" />
                </svg>
                <p className={value == 'assassin' ? style.heroesWrapperBodyFilterLableSunActive : style.heroesWrapperBodyFilterLableSun}>
                  {t('assassin')}
                </p>
                <input className={style.heroesWrapperBodyFilterLableImp} type='checkbox' value='assassin' id='assassin' checked={value === 'assassin'} onChange={handleRoleChange} />
              </label>
            </div> */}


            <ul className={style.heroesList}>
              {
                visibleHeroes.map(item => (


                  <li key={item.heroid} className={style.heroesListItem} >
                    <Link
                      to={`/${lang}/PreviewHeroes/${item.heroid}`}

                      state={{ item }} className={style.heroesListItemLink}>

                      <img className={style.heroesListItemImg} src={item.key} alt="hero pictures" onClick={() => setHeroImg(item.key)} />
                      <div className={style.heroesListItemCont}>
                        {/* <p className={style.heroesListItemContRole}>
                          {t(item.data[index].name)}
                        </p> */}
                        <h2 className={style.heroesListItemTitle}>
                          {t(item.name)}
                        </h2>
                      </div>
                    </Link>
                  </li>
                ))
              }
            </ul>
            <div className={style.pagination}>
              {Array.from({ length: Math.ceil(heroes.length / itemsPerPage) }, (_, i) => (
                <button
                  key={i}
                  className={currentPage == i + 1 ? style.activePageButton : style.pageButton}
                  onClick={() => setCurrentPage(i + 1)}
                >
                  {i + 1}
                </button>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  </>
}

export default Heroes;