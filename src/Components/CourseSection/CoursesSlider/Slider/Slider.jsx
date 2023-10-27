import img from "../../../../assets/img/Title_persons/green.png";

import style from './slider.module.scss';

const Slider = props => {
  return (
    <>
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
            <img
              src={props.save}
              alt="save icon"
              id={style.save}
              className={style.save}
            />
          </a>
          <img src={props.src} className="card-img-top" alt="Image" />
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
    </>
  );
};

export default Slider;
