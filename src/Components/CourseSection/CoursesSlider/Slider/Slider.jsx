import style from "./slider.module.scss";
import img from "../../../../assets/img/slider_image/01.jpg";
import icon from "../../../../assets/icons/save.svg";
import clock from "../../../../assets/icons/clock.svg";
import like from "../../../../assets/icons/like.png";

const Slider = () => {
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
            <span className={style.slider__imgSection__label__span}>
              Best Seller
            </span>
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
              Fullstack Web Developer Course from Scratch
            </h3>
            <p className={style.slider__contentSection__pAutor}>
              By Albert Flores
            </p>
            <p className={style.slider__contentSection__pPrice}>$12.50</p>
          </div>
        </div>

        <div class="card-footer d-flex align-items-center p-1 fs-sm text-muted py-4">
          <div class="d-flex align-items-center me-4">
            <img src={clock} alt="clock icon" className={style.clock} />
            220 hours
          </div>
          <div class="d-flex align-items-center">
            <img src={like} alt="clock icon" className={style.like} />
            94% (4.2K)
          </div>
        </div>
      </div>
    </>
  );
};

export default Slider;
