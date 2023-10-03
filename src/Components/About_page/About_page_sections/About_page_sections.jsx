import style from './About_page_sections.module.scss';

const About_page_sections = props => {

    return (
        <>
            <div className={style.infoSection}>
                {props.isBig ? <img className={style.infoSection__img} id={style.big} src={props.img} alt='Teacher icon' /> : <img className={style.infoSection__img} src={props.img} alt='Teacher icon' />}

                {props.describe}
            </div>
        </>
    )
}

export default About_page_sections;