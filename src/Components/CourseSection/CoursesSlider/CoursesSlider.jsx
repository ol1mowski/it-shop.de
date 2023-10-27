import style from "./coursesSlider.module.scss";
import arrow from "../../../assets/icons/arrow.svg";
import Slider from "./Slider/Slider";
import img1 from '../../../assets/img/slider_image/01.jpg';
import img2 from '../../../assets/img/slider_image/02.jpg';
import img3 from '../../../assets/img/slider_image/03.jpg';
import img4 from '../../../assets/img/slider_image/04.jpg';
import img5 from '../../../assets/img/slider_image/05.jpg';
import save from '../../../assets/icons/save.svg';
import Navigate from "../CoursesNavigation/Navigate/Navigate";
import SliderDots from "./SliderDots/SliderDots";

const CoursesSlider = () => {
  return (
    <>
      <div className="col-lg-9 col-md-8">

        <Navigate arrow={arrow}/>

        <div
          className="swiper swiper-nav-onhover mx-n2 swiper-initialized swiper-horizontal swiper-pointer-events swiper-backface-hidden"
          data-swiper-options='{
  "slidesPerView": 1,
  "spaceBetween": 8,
  "pagination": {
    "el": ".swiper-pagination",
    "clickable": true
  },
  "navigation": {
    "prevEl": "#popular-prev",
    "nextEl": "#popular-next"
  },
  "breakpoints": {
    "560": {
      "slidesPerView": 2
    },
    "768": {
      "slidesPerView": 1
    },
    "850": {
      "slidesPerView": 2
    },
    "1200": {
      "slidesPerView": 3
    }
  }
}'
        >
          <div
            className="swiper-wrapper"
            id="swiper-wrapper-8a449d5899f6e24e"
            aria-live="polite"
          >
            <div
              className="swiper-slide h-auto pb-3 swiper-slide-active"
              role="group"
              aria-label="1 / 5"
            >
              <article className="card h-100 border-0 shadow-sm mx-2">
                <div className="position-relative">
                  <a
                    href="portfolio-single-course.html"
                    className="d-block position-absolute w-100 h-100 top-0 start-0"
                    aria-label="Course link"
                  ></a>
                  <span className="badge bg-success position-absolute top-0 start-0 zindex-2 mt-3 ms-3">
                    Best Seller
                  </span>
                  <a
                    href="#"
                    className="btn btn-icon btn-light bg-white border-white btn-sm rounded-circle position-absolute top-0 end-0 zindex-2 me-3 mt-3"
                    data-bs-toggle="tooltip"
                    data-bs-placement="left"
                    aria-label="Save to Favorites"
                    data-bs-original-title="Save to Favorites"
                  >
                    <img src={save} alt="save icon" className={style.save} />
                   </a>
                  <img
                    src={img1}
                    className="card-img-top"
                    alt="Image"
                  />
                </div>
                <div className="card-body pb-3">
                  <h3 className="h5 mb-2">
                    <a href="portfolio-single-course.html">
                      Fullstack Web Developer Course from Scratch
                    </a>
                  </h3>
                  <p className="fs-sm mb-2">By Albert Flores</p>
                  <p className="fs-lg fw-semibold text-primary mb-0">$12.50</p>
                </div>
                <div className="card-footer d-flex align-items-center fs-sm text-muted py-4">
                  <div className="d-flex align-items-center me-4">
                    <i className="bx bx-time fs-xl me-1"></i>
                    220 hours
                  </div>
                  <div className="d-flex align-items-center">
                    <i className="bx bx-like fs-xl me-1"></i>
                    94% (4.2K)
                  </div>
                </div>
              </article>
            </div>

            <div
              className="swiper-slide h-auto pb-3 swiper-slide-next"
              role="group"
              aria-label="2 / 5"
            >
              {/* <article className="card h-100 border-0 shadow-sm mx-2">
                <div className="position-relative">
                  <a
                    href="portfolio-single-course.html"
                    className="d-block position-absolute w-100 h-100 top-0 start-0"
                    aria-label="Course link"
                  ></a>
                  <a
                    href="#"
                    className="btn btn-icon btn-light bg-white border-white btn-sm rounded-circle position-absolute top-0 end-0 zindex-2 me-3 mt-3"
                    data-bs-toggle="tooltip"
                    data-bs-placement="left"
                    aria-label="Save to Favorites"
                    data-bs-original-title="Save to Favorites"
                  >
                    <img src={save} alt="save icon" className={style.save} />
                  </a>
                  <img
                    src={img2}
                    className="card-img-top"
                    alt="Image"
                  />
                </div>
                <div className="card-body pb-3">
                  <h3 className="h5 mb-2">
                    <a href="portfolio-single-course.html">
                      HTML, CSS, JavaScript Web Developer
                    </a>
                  </h3>
                  <p className="fs-sm mb-2">
                    By Jenny Wilson &amp; Marvin McKinney
                  </p>
                  <p className="fs-lg fw-semibold text-primary mb-0">$15.99</p>
                </div>
                <div className="card-footer d-flex align-items-center fs-sm text-muted py-4">
                  <div className="d-flex align-items-center me-4">
                    <i className="bx bx-time fs-xl me-1"></i>
                    160 hours
                  </div>
                  <div className="d-flex align-items-center">
                    <i className="bx bx-like fs-xl me-1"></i>
                    92% (3.1K)
                  </div>
                </div>
              </article> */}
            </div>
            <div
              className="swiper-slide h-auto pb-3"
              role="group"
              aria-label="3 / 5"
            >
              {/* <article className="card h-100 border-0 shadow-sm mx-2">
                <div className="position-relative">
                  <a
                    href="portfolio-single-course.html"
                    className="d-block position-absolute w-100 h-100 top-0 start-0"
                    aria-label="Course link"
                  ></a>
                  <span className="badge bg-danger position-absolute top-0 start-0 zindex-2 mt-3 ms-3">
                    Sale!
                  </span>
                  <a
                    href="#"
                    className="btn btn-icon btn-light bg-white border-white btn-sm rounded-circle position-absolute top-0 end-0 zindex-2 me-3 mt-3"
                    data-bs-toggle="tooltip"
                    data-bs-placement="left"
                    aria-label="Save to Favorites"
                    data-bs-original-title="Save to Favorites"
                  >
                    <i className="bx bx-bookmark"></i>
                  </a>
                  <img
                    src={img3}
                    className="card-img-top"
                    alt="Image"
                  />
                </div>
                <div className="card-body pb-3">
                  <h3 className="h5 mb-2">
                    <a href="portfolio-single-course.html">
                      HTML, CSS, JavaScript Web Developer
                    </a>
                  </h3>
                  <p className="fs-sm mb-2">By Robert Fox</p>
                  <p className="text-muted mb-0">
                    <span className="fs-lg fw-semibold text-danger me-2">
                      $9.99
                    </span>
                    <del>$44.99</del>
                  </p>
                </div>
                <div className="card-footer d-flex align-items-center fs-sm text-muted py-4">
                  <div className="d-flex align-items-center me-4">
                    <i className="bx bx-time fs-xl me-1"></i>
                    210 hours
                  </div>
                  <div className="d-flex align-items-center">
                    <i className="bx bx-like fs-xl me-1"></i>
                    98% (2.7K)
                  </div>
                </div>
              </article> */}
            </div>
            <div
              className="swiper-slide h-auto pb-3"
              role="group"
              aria-label="4 / 5"
            >
              {/* <article className="card h-100 border-0 shadow-sm mx-2">
                <div className="position-relative">
                  <a
                    href="portfolio-single-course.html"
                    className="d-block position-absolute w-100 h-100 top-0 start-0"
                    aria-label="Course link"
                  ></a>
                  <a
                    href="#"
                    className="btn btn-icon btn-light bg-white border-white btn-sm rounded-circle position-absolute top-0 end-0 zindex-2 me-3 mt-3"
                    data-bs-toggle="tooltip"
                    data-bs-placement="left"
                    aria-label="Save to Favorites"
                    data-bs-original-title="Save to Favorites"
                  >
                    <i className="bx bx-bookmark"></i>
                  </a>
                  <img
                    src={img4}
                    className="card-img-top"
                    alt="Image"
                  />
                </div>
                <div className="card-body pb-3">
                  <h3 className="h5 mb-2">
                    <a href="portfolio-single-course.html">
                      Data Science &amp; Machine Learning with Python
                    </a>
                  </h3>
                  <p className="fs-sm mb-2">By Esther Howard</p>
                  <p className="fs-lg fw-semibold text-primary mb-0">$13.99</p>
                </div>
                <div className="card-footer d-flex align-items-center fs-sm text-muted py-4">
                  <div className="d-flex align-items-center me-4">
                    <i className="bx bx-time fs-xl me-1"></i>
                    170 hours
                  </div>
                  <div className="d-flex align-items-center">
                    <i className="bx bx-like fs-xl me-1"></i>
                    96% (3.8K)
                  </div>
                </div>
              </article> */}
            </div>
            <div
              className="swiper-slide h-auto pb-3"
              role="group"
              aria-label="5 / 5"
            >
              {/* <article className="card h-100 border-0 shadow-sm mx-2">
                <div className="position-relative">
                  <a
                    href="portfolio-single-course.html"
                    className="d-block position-absolute w-100 h-100 top-0 start-0"
                    aria-label="Course link"
                  ></a>
                  <a
                    href="#"
                    className="btn btn-icon btn-light bg-white border-white btn-sm rounded-circle position-absolute top-0 end-0 zindex-2 me-3 mt-3"
                    data-bs-toggle="tooltip"
                    data-bs-placement="left"
                    aria-label="Save to Favorites"
                    data-bs-original-title="Save to Favorites"
                  >
                    <i className="bx bx-bookmark"></i>
                  </a>
                  <img
                    src={img5}
                    className="card-img-top"
                    alt="Image"
                  />
                </div>
                <div className="card-body pb-3">
                  <h3 className="h5 mb-2">
                    <a href="portfolio-single-course.html">
                      The Ultimate Guide to Unity Game Development
                    </a>
                  </h3>
                  <p className="fs-sm mb-2">By Albert Flores</p>
                  <p className="fs-lg fw-semibold text-primary mb-0">$29.99</p>
                </div>
                <div className="card-footer d-flex align-items-center fs-sm text-muted py-4">
                  <div className="d-flex align-items-center me-4">
                    <i className="bx bx-time fs-xl me-1"></i>
                    250 hours
                  </div>
                  <div className="d-flex align-items-center">
                    <i className="bx bx-like fs-xl me-1"></i>
                    95% (5.4K)
                  </div>
                </div>
              </article> */}
            </div>
          </div>

          <div className="swiper-pagination position-relative pt-2 pt-sm-3 mt-4 swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal">
            <span
              className="swiper-pagination-bullet swiper-pagination-bullet-active"
              tabindex="0"
              role="button"
              aria-label="Go to slide 1"
              aria-current="true"
            ></span>
            <span
              className="swiper-pagination-bullet"
              tabindex="0"
              role="button"
              aria-label="Go to slide 2"
            ></span>
            <span
              className="swiper-pagination-bullet"
              tabindex="0"
              role="button"
              aria-label="Go to slide 3"
            ></span>
            <span
              className="swiper-pagination-bullet"
              tabindex="0"
              role="button"
              aria-label="Go to slide 4"
            ></span>
            <span
              className="swiper-pagination-bullet"
              tabindex="0"
              role="button"
              aria-label="Go to slide 5"
            ></span>
          </div>
          <span
            className="swiper-notification"
            aria-live="assertive"
            aria-atomic="true"
          ></span>
        </div>
        <SliderDots />
        <a
          href="portfolio-courses.html"
          className="btn btn-outline-primary btn-lg w-100 d-md-none mt-3"
        >
          See all courses
          <i className="bx bx-right-arrow-alt fs-xl ms-2"></i>
        </a>
      </div>
    </>
  );
};

export default CoursesSlider;
