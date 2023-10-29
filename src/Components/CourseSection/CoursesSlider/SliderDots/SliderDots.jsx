import { useSelector } from 'react-redux';
import style from './sliderDots.module.scss';
import { useEffect, useRef } from 'react';

const SliderDots = () => {

    const index = useSelector((state) => state.indexSlice.index);

    const one = useRef(null);
    const two = useRef(null);
    const three = useRef(null);
    const four = useRef(null);
    const five = useRef(null);


    useEffect(() => {

        switch (index) {
            case 0:
                one.current.id = style.active;
                two.current.id = '';
                three.current.id = '';
                four.current.id = '';
                five.current.id = '';
                break;
            case 1:
                one.current.id = '';
                two.current.id = style.active;
                three.current.id = '';
                four.current.id = '';
                five.current.id = '';
                break;
            case 2:
                one.current.id = '';
                two.current.id = '';
                three.current.id = style.active;
                four.current.id = '';
                five.current.id = '';
                break;
            case 3:
                one.current.id = '';
                two.current.id = '';
                three.current.id = '';
                four.current.id = style.active;
                five.current.id = '';
                break;
            case 4:
                one.current.id = '';
                two.current.id = '';
                three.current.id = '';
                four.current.id = '';
                five.current.id = style.active;
                break;
            default:
                one.current.id = '';
                two.current.id = '';
                three.current.id = '';
                four.current.id = '';
                five.current.id = '';
        }
    }, [index])

    return (
        <>
            <section className={style.sliderDots}>
                <div ref={one} className={style.sliderDots__dot}></div>
                <div ref={two} className={style.sliderDots__dot}></div>
                <div ref={three} className={style.sliderDots__dot}></div>
                <div ref={four} className={style.sliderDots__dot}></div>
                <div ref={five} className={style.sliderDots__dot}></div>
            </section>
        </>
    )
}

export default SliderDots;
