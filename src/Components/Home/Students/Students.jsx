import style from './Students.module.scss';
import orange from '../../../assets/img/small_presons/orange.jpg';
import green from '../../../assets/img/small_presons/green.jpg';
import blue from '../../../assets/img/small_presons/blue.jpg';

const Students = () => {

    return (
        <>
            <section className={style.student}>
                <div className={style.student__images}>
                    <div id={style.one} className={style.studentsPhotos}>
                        <img src={orange} alt='student photos' className={style.studentsPhotos__img} />
                    </div>
                    <div id={style.two} className={style.studentsPhotos}>
                        <img src={blue} alt='student photos' className={style.studentsPhotos__img} />
                    </div>
                    <div id={style.three} className={style.studentsPhotos}>
                        <img src={green} alt='student photos' className={style.studentsPhotos__img} />
                    </div>
                </div>
                <div className={style.student__content}>
                    <p className={style.student__content__p}>
                        <span className={style.student__content__p__span}>10K+</span> students are already with us
                    </p>
                </div>
            </section>
        </>
    )
}

export default Students;