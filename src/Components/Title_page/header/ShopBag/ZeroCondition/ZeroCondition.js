import style from './ZeroCondition.module.scss';

const ZeroCondition = () => {
    return (
        <>
            <h3>Your Items:</h3>
            <p className={style.zeroCondition__p}>You haven't any items yet! </p> 
            <p className={style.zeroCondition__p}>Let's add one now!</p>
            <button className={style.zeroCondition__button}>
                See Courses
            </button>
        </>
    )
}

export default ZeroCondition;