import style from './sliderHeader.module.scss';
import arrow from '../../../../assets/icons/arrow.svg';
import { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { decrement, increment } from '../../../../store/indexState';


const SliderHeader = () => {

    const dispatch = useDispatch()

    const prev = useRef(null);
    const next = useRef(null);


    const prevArrow = useRef(null);
    const nextArrow = useRef(null);

    const [index, setIndex] = useState(0);

    useEffect(() => {

        const showPrev = () => {
            if (index > 0) {
                setIndex(prev => prev - 1);
                dispatch(decrement());
            }
        };

        const showNext = () => {
            if (index < 4) {
                setIndex(prev => prev + 1);
                dispatch(increment());
            }
        };

        prev.current.addEventListener('click', showPrev);
        next.current.addEventListener('click', showNext);

        return (() => {
            prev.current.removeEventListener('click', showPrev);
            next.current.removeEventListener('click', showNext);
        })

    }, [prev, next, index]);

    useEffect(() => {
        if (index > 0) {
            prevArrow.current.style.opacity = 1;
        } else {
            prevArrow.current.style.opacity = .4;
        }
        if (index === 4) {
            nextArrow.current.style.opacity = .4;
        } else {
            nextArrow.current.style.opacity = 1;
        }

    }, [index])

    return (
        <>
            <header className={style.header}>
                <div className={style.header__title}>
                    <h2 className={style.header__title__h2}>
                        Popular Courses
                    </h2>
                </div>
                <div className={style.header__arrowsMenu}>
                    <div ref={prev} className={style.header__arrowsMenu__arrowLeft}>
                        <img ref={prevArrow} src={arrow} className={style.header__arrowsMenu__arrowLeft__icon} alt='arrow icon' />
                    </div>
                    <div ref={next} className={style.header__arrowsMenu__arrowRight}>
                        <img ref={nextArrow} src={arrow} className={style.header__arrowsMenu__arrowRight__icon} alt='arrow icon' />
                    </div>
                </div>
            </header>
        </>
    );
};

export default SliderHeader;