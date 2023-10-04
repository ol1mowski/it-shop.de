import style from './Gain.module.scss';
import certificate from '../../assets/img/certificate.jpg';
import itSkill from '../../assets/img/it_skill.jpg';
import itJob from '../../assets/img/it_job.png';

const Gain = () => {
    return (
        <>
            <div className={style.gainContainer}>
                <h2 className={style.gainContainer__header}>
                    What You gain ?
                </h2>
                <div className={style.gainContainer__slider}></div>
                <div className={style.gainContainer__benefitsWrapper}>
                    
                </div>

            </div>
        </>
    )
}

export default Gain;    