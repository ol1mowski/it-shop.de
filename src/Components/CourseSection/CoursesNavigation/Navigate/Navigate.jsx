import style from "./navigate.module.scss";;

const Navigate = props => {
  return (
    <div className="d-flex align-items-center justify-content-between pb-4 mb-3">
      <h2 className="h1 mb-0 me-3">Popular Courses</h2>
      <div className="d-flex">
        <button
          type="button"
          className={style.button}
          aria-label="Previous slide"
          tabindex="-1"
          aria-controls="swiper-wrapper-8a449d5899f6e24e"
          aria-disabled="true"
          disabled=""
        >
          <img
            className={style.arrow}
            src={props.arrow}
            id={style.left}
            alt="arrow left side"
          />
        </button>
        <button
          type="button"
          className={style.button}
          aria-label="Next slide"
          tabindex="0"
          aria-controls="swiper-wrapper-8a449d5899f6e24e"
          aria-disabled="false"
        >
          <img
            className={style.arrow}
            src={props.arrow}
            id={style.right}
            alt="arrow right side"
          />
        </button>
      </div>
    </div>
  );
};

export default Navigate;
