import style from "./AboutPage.module.scss";
import teacher from '../../assets/icons/teacher.png';

const AboutPage = () => {
  return (
    <>
      <div id={style.id} className={style.container}>
        <div className={style.container__headerSection}>
            <h2>
                About
            </h2>
        </div>
        <div className={style.container__infoSection}>
            <img src={teacher} alt='Teacher icon' />
            We have the best code teacher whitch work as senior programmers
        </div>
      </div>
    </>
  );
};
export default AboutPage;
