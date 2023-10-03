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
                    <div class="card mb-5 ">
                        <img src={certificate} class="card-img-top" alt="..."/>
                            <div class="card-body">
                                <h5 class="card-title">Certificate</h5>
                                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            </div>
                    </div>
                    <div class="card mb-5">
                        <img src={itSkill} class="card-img-top" alt="..."/>
                            <div class="card-body">
                                <h5 class="card-title">IT skill</h5>
                                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            </div>
                    </div>
                    <div class="card mb-5">
                        <img src={itJob} class="card-img-top" alt="..."/>
                            <div class="card-body">
                                <h5 class="card-title">Improve your chance to get your first it job</h5>
                                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Gain;    