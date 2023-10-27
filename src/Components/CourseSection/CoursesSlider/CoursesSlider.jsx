import style from "./coursesSlider.module.scss";
import arrow from '../../../assets/icons/arrow.svg';

const CoursesSlider = () => {
  return (
    <>
      <div class="d-flex align-items-center justify-content-between pb-4 mb-3">
        <h2 id={style.h1} class="h1 mb-0 me-3">
          Popular Courses
        </h2>
        <div class="d-flex">
          <button
            type="button"
            aria-label="Previous slide"
            tabindex="0"
            className={style.button}
            aria-controls="swiper-wrapper-e7eb2da919b6c945"
            aria-disabled="false"
          >
            <img src={arrow} alt="Arrow icon"  id={style.left}className={style.arrow} />
          </button>
          <button
            type="button"
            className={style.button}
            aria-label="Next slide"
            tabindex="0"
            aria-controls="swiper-wrapper-e7eb2da919b6c945"
            aria-disabled="false"
          >
            <img src={arrow} alt="Arrow icon" id={style.right} className={style.arrow} />
          </button>
        </div>
      </div>
    </>
  );
};

export default CoursesSlider;
