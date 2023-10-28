import style from './slider.module.scss';
import img from '../../../../assets/img/slider_image/01.jpg';
import icon from '../../../../assets/icons/save.svg';
import clock from '../../../../assets/icons/clock.svg';
import like from '../../../../assets/icons/like.png';

const Slider = () => {
  return (
    <>
      <div className={style.slider}>
        <div className={style.slider__imgSection}>
          <img src={img} alt='courses ' className={style.slider__imgSection__img} />
          <div className={style.slider__imgSection__label}>
            <span className={style.slider__imgSection__label__span}>
              Best Seller
            </span>
          </div>
          <div className={style.slider__imgSection__save}>
            <img src={icon} className={style.slider__imgSection__save__icon} alt='save icon' />
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
            <p className={style.slider__contentSection__pPrice}>
              $12.50
            </p>
          </div>
        </div>
        
        <div className={style.slider__iconsSection}>
          {/* <div className={style.slider__iconsSection__clock}>
            <img src={clock} className={style.slider__iconsSection__clock__img} alt='clock icon' />
            <p className={style.slider__iconsSection__clock__string}>
              220 hours
            </p>
          </div>
          <div className={style.slider__iconsSection__clock}>
            <img src={like} className={style.slider__iconsSection__clock__img} alt='clock icon' />
            <p className={style.slider__iconsSection__clock__string}>
              220 hours
            </p>
          </div> */}
        </div>
      </div>
    </>
  )
}

export default Slider;