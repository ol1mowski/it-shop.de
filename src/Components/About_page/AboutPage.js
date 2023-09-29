import style from "./AboutPage.module.scss";
import About_page_sections from "./About_page_sections/About_page_sections";
import teacher from '../../assets/icons/teacher.png';
import imgTeacher from '../../assets/img/it_teacher.png';
import certificate from '../../assets/icons/certificate.svg';
import refund from '../../assets/icons/refund.png';

const image = '../../../assets/icons/teacher.png';

const elements = [
  {
    id: 1,
    img: teacher,
    describe: `Our programming courses are led by industry experts with years of experience. `,
    isBig: false,
  },
  {
    id: 2,
    img: certificate,
    describe: 'We have the best code teacher whitch work as senior programmers',
    isBig: true,
  },
  {
    id: 3,
    img: refund,
    describe: ` We're confident in the quality of our courses, which is why we offer a money-back guarantee.`,
    isBig: false,
  },
]

const AboutPage = () => {
  return (
    <>
      <div className={style.container}>
        <div id='id' className={style.containerSections}>
          <div className={style.containerSections__headerSection}>
            <h2>
              About
            </h2>
          </div>
          {elements.map((item) => <About_page_sections key={item.id} img={item.img} isBig={item.isBig} describe={item.describe} />)}
        </div>
        <div className={style.containerImg}>
          <img className={style.containerImg__img} src={imgTeacher} alt="Teacher Img" />
        </div>
      </div>

    </>
  );
};
export default AboutPage;
