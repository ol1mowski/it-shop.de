import style from './Content.module.scss';


const Content = () => {

    return (
        <>
            <section className={style.content}>
                <h5 className={style.content__h5}>
                    Welcome!
                </h5>
                <h1 className={style.content__h1}>
                    Learn <span className={style.content__h1__span}>IT Online</span> with No Limits
                </h1>
                <p className={style.content__p}>
                    Enjoy our great selection of IT courses. Choose from more than 25K online video courses and become an IT expert now!
                </p>
            </section>
        </>
    )
}

export default Content;