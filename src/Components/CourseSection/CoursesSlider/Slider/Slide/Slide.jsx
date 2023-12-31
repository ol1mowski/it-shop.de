import style from './slide.module.scss';
import icon from "../../../../../assets/icons/save.svg";
import clock from "../../../../../assets/icons/clock.svg";
import like from "../../../../../assets/icons/like.png";

const Slide = props => {


    return (
        <>
            <div style={props.slideStyle} id={props.tagId} className={style.slider}>
                <div className={style.slider__imgSection}>
                    <img
                        src={props.img}
                        alt="courses "
                        className={style.slider__imgSection__img}
                    />
                    {props.bestseller ? <div className={style.slider__imgSection__label}>
                        <span className={style.slider__imgSection__label__span}>
                            Best Seller
                        </span>
                    </div> : null}
                    {props.sale ? <div className={style.slider__imgSection__label} style={{ backgroundColor: '#ef4545' }}>
                        <span className={style.slider__imgSection__label__span}>
                            Sale
                        </span>
                    </div> : null}
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
                            {props.title}
                        </h3>
                        <p className={style.slider__contentSection__pAutor}>
                            By {props.autor}
                        </p>
                        {props.sale ? (<p className={style.slider__contentSection__pPrice} style={{ color: '#ef4545' }}>${props.price}</p>) : <p className={style.slider__contentSection__pPrice}>${props.price}</p>}
                        { props.sale ? <p className={style.slider__contentSection__pPrice__old}>${props.oldPrice}</p> : null}
                    </div>
                </div>
                <div className={style.slider__line}></div>
                <div className="card-footer p-3 d-flex align-items-center m-auto fs-sm text-muted py-4">
                    <div className="d-flex align-items-center me-4">
                        <img src={clock} alt="clock icon" className={style.clock} />
                        {props.time} hours
                    </div>
                    <div className="d-flex align-items-center">
                        <img src={like} alt="clock icon" className={style.like} />
                        {props.rating}% ({props.students}K)
                    </div>
                </div>
            </div>
        </>

    );
};

export default Slide;