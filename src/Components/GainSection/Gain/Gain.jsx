import style from './gain.module.scss';

const Gain = props => {

    const { img, header, content } = props;

    return (
        <>
            <div className={style.gainContainer}>
                <div className={style.gainContainer__imgWrapper}>
                    <img src={img} alt='icon' className={style.gainContainer__imgWrapper__img} />
                </div>
                <div className={style.gainContainer__content}>
                    <h3 className={style.gainContainer__content__h3}>
                        {header}
                    </h3>
                    <p className={style.gainContainer__content__p}>
                        {content}
                    </p>
                </div>
            </div>
        </>
    );
};

export default Gain;