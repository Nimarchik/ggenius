import { Logger } from 'sass';
import style from '../../assets/style/index.module.css'
import { useEffect, useState } from 'react';
import { Link } from 'react-router';

const Blog = () => {

  const [patches, setPatches] = useState([]);


  useEffect(() => {
    const api = 'http://localhost/server/patch/patch.php';
    fetch(api)
      .then(res => res.json())
      .then(data => {
        setPatches(data);
        console.log(data);
      })
      .catch(err => {
        console.error('Ошибка загрузки патчей:', err);
      });
  }, []);

  return <>
    <section className={style.blog}>
      <div className={style.container}>
        <div className={style.blogWrapper}>
          <h1 className={style.blogWrapperTitle}>
            Патчи
          </h1>
          <div className={style.blogWrapperPatches}>
            {
              patches.map((item, index) => (
                <div className={style.blogWrapperPatchesInner} key={index}>
                  <div className={style.blogWrapperPatchesInnerGroup}>
                    <p className={style.blogWrapperPatchesInnerTitle}>{item.version}</p>
                    <p className={style.blogWrapperPatchesInnerGroupTime}>
                      {item.releaseDate}
                    </p>
                  </div>
                  <p className={style.blogWrapperPatchesInnerSub}>
                    {item.changeLogs
                    }
                  </p>
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