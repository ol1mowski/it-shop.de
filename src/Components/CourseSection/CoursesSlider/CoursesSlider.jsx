import style from "./coursesSlider.module.scss";

const CoursesSlider = () => {
  return (
    <>
      <div class="d-flex align-items-center justify-content-between pb-4 mb-3">
        <h2 id={style.h1} class="h1 mb-0 me-3">Popular Courses</h2>
        <div class="d-flex">
          <button
            type="button"
            id="popular-prev"
            class="btn btn-prev btn-icon btn-sm me-2"
            aria-label="Previous slide"
            tabindex="0"
            aria-controls="swiper-wrapper-e7eb2da919b6c945"
            aria-disabled="false"
          >
            <i class="bx bx-chevron-left"></i>
          </button>
          <button
            type="button"
            id="popular-next"
            class="btn btn-next btn-icon btn-sm ms-2"
            aria-label="Next slide"
            tabindex="0"
            aria-controls="swiper-wrapper-e7eb2da919b6c945"
            aria-disabled="false"
          >
            <i class="bx bx-chevron-right"></i>
          </button>
        </div>
      </div>
      
    </>
  );
};

export default CoursesSlider;
