import { Link, useParams } from 'react-router';
import style from '../../assets/style/index.module.css'
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';



const Heroes = () => {

  const [heroes, setHeroes] = useState([])
  const [value, setValue] = useState('')
  const { t } = useTranslation();
  const { l: lang } = useParams();



  useEffect(() => {
    const api = 'http://localhost/server/heroes/index.php'
    fetch(api)
      .then(response => {
        // console.log(response);
        // if (!response.ok) {
        //   throw new Error('Ошибка сети или сервера');
        // }
        return response.json();
      })
      .then(data => {
        setHeroes(data.data);
        console.log(data.data);
        localStorage.setItem('img', data.data[0].key)

      })
      .catch(error => {
        console.error('Ошибка при выполнении запроса:', error);
      });

  }, []);

  console.log(value);

  const handleRoleChange = (e) => {
    const role = e.target.value;
    setValue(prev => prev === role ? null : role); // включить/отключить
  };



  // const filteredHeroes = value
  //   ? heroes.filter((item, index) => item.heroid === value)
  //   : heroes;




  return <>
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
            <div className={style.heroesWrapperBodyFilter}>
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
            </div>


            <ul className={style.heroesList}>
              {
                heroes.map((item) => (

                  <li  key={item.heroid} className={style.heroesListItem} >
                    <Link
                      to={`/${lang}/PreviewHeroes/${item.heroid}`}
                      state={{ item }} className={style.heroesListItemLink}>
                      
                      <img className={style.heroesListItemImg} src={item.key} alt="" />
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
          </div>
        </div>
      </div>
    </section >
  </>
}

export default Heroes;