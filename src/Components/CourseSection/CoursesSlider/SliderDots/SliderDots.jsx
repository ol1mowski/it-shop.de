import style from './sliderDots.module.scss';

const SliderDots = () => {
    return (
        <>
            <section className={style.sliderDots}>
                <div className={style.sliderDots__dot__active}></div>
                <div className={style.sliderDots__dot}></div>
                <div className={style.sliderDots__dot}></div>
                <div className={style.sliderDots__dot}></div>
            </section>
        </>
    )
}

export default SliderDots;