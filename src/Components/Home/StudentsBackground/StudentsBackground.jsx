import style from './StudentsBackground.module.scss';
import grey from '../../../assets/img/Title_persons/grey.png';
import yellow from '../../../assets/img/Title_persons/yellow.png';
import green from '../../../assets/img/Title_persons/green.png';
import orange from '../../../assets/img/Title_persons/orange.png';
import biggerCircle from '../../../assets/img/Title_persons/bigger_circle.png';
import smallerCircle from '../../../assets/img/Title_persons/smaller_circle.png';

const StudentsBackground = () => {

    return (
        <>
            <section className={style.studentsBackground}>
                <img id={style.one} src={grey} alt="Main person img" className={style.studentsBackground__img}/>
                <img id={style.two} src={yellow} alt="Main person img" className={style.studentsBackground__img}/>
                <img id={style.three} src={green} alt="Main person img" className={style.studentsBackground__img}/>
                <img id={style.four} src={orange} alt="Main person img" className={style.studentsBackground__img}/>
                <img id={style.five} src={biggerCircle} alt="Main person img" className={style.studentsBackground__img}/>
                <img id={style.six} src={smallerCircle} alt="Main person img" className={style.studentsBackground__img}/>
            </section>
        </>
    )
}

export default StudentsBackground;