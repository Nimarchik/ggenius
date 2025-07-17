import { Logger } from 'sass';
import style from '../../assets/style/index.module.css'
import { useEffect, useState } from 'react';
import { Link } from 'react-router';
import { useTranslation } from 'react-i18next';
import Helmets from '../Helmets';


const Blog = () => {
  const { t } = useTranslation();
  const [show, setShow] = useState(false)

  const [patches, setPatches] = useState([]);


  useEffect(() => {
    const api = 'https://ggenius-api.onrender.com/blogs/index.php';
    fetch(api)
      .then(res => res.json())
      .then(data => {
        setPatches(data);
        // console.log(data);
      })
      .catch(err => {
        console.error('Ошибка загрузки патчей:', err);
      });
  }, []);

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
                        <h1 className={style.blogWrapperPatchesInnerTitle}>{item.title}</h1>
                        <p className={style.blogWrapperPatchesInnerGroupTextDate}>
                          {item.date}
                        </p>
                      </div>
                      <p className={show ? style.blogWrapperPatchesInnerGroupTimeActive : style.blogWrapperPatchesInnerGroupTime}>
                        {item.content}
                      </p>
                      <p className={style.blogWrapperPatchesInnerGroupShow}>
                        {show ? 'Згорнути ⬆️' : 'Розгорнути ⬇️'}
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