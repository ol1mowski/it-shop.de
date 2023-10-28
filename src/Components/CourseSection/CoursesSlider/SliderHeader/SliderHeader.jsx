import style from './sliderHeader.module.scss';
import arrow from '../../../../assets/icons/arrow.svg';


const SliderHeader = () => {
    return (
        <>
            <header className={style.header}>
                <div className={style.header__title}>
                    <h2 className={style.header__title__h2}>
                        Popular Courses
                    </h2>
                </div>
                <div className={style.header__arrowsMenu}>
                    <div className={style.header__arrowsMenu__arrowLeft}>
                        <img src={arrow} className={style.header__arrowsMenu__arrowLeft__icon} alt='arrow icon' />
                    </div>
                    <div className={style.header__arrowsMenu__arrowRight}>
                        <img src={arrow} className={style.header__arrowsMenu__arrowRight__icon} alt='arrow icon' />
                    </div>
                </div>
            </header>
        </>
    );
};

export default SliderHeader;