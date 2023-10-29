import style from "./slider.module.scss";
import img from "../../../../assets/img/slider_image/01.jpg";
import icon from "../../../../assets/icons/save.svg";
import clock from "../../../../assets/icons/clock.svg";
import like from "../../../../assets/icons/like.png";

const Slider = () => {

  const COURSES_INFO = [
    {
      id: 1,
      bestseller: true,
      title: 'Fullstack Web Developer Course from Scratch',
      autor: 'Albert Flores',
      price: 12.50,
      time: 220,
      rating: 94,
      students: 4.2,
    },
  ];

  return (
    <>
      <div className={style.slider}>
        <div className={style.slider__imgSection}>
          <img
            src={img}
            alt="courses "
            className={style.slider__imgSection__img}
          />
          <div className={style.slider__imgSection__label}>
            {COURSES_INFO[0].bestseller ? <span className={style.slider__imgSection__label__span}>
              Best Seller
            </span> : null}
          </div>
          <div className={style.slider__imgSection__save}>
            <img
              src={icon}
              className={style.slider__imgSection__save__icon}
              alt="save icon"
            />
          </div>
        </div>

        <div className={style.slider__contentSection}>
          <div className={style.slider__contentSection__wrapper}>
            <h3 className={style.slider__contentSection__h3}>
            { COURSES_INFO[0].title }
            </h3>
            <p className={style.slider__contentSection__pAutor}>
              By { COURSES_INFO[0].autor }
            </p>
            <p className={style.slider__contentSection__pPrice}>${ COURSES_INFO[0].price }0</p>
          </div>
        </div>
        <div className={style.slider__line}></div>

        <div className="card-footer p-3 d-flex align-items-center m-auto fs-sm text-muted py-4">
          <div className="d-flex align-items-center me-4">
            <img src={clock} alt="clock icon" className={style.clock} />
            { COURSES_INFO[0].time } hours
          </div>
          <div className="d-flex align-items-center">
            <img src={like} alt="clock icon" className={style.like} />
            { COURSES_INFO[0].rating }% ({ COURSES_INFO[0].students }K)
          </div>
        </div>
      </div>
    </>
  );
};

export default Slider;
