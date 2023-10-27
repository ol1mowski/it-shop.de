import CoursesNavigation from './CoursesNavigation/CoursesNavigation';
import CoursesSlider from './CoursesSlider/CoursesSlider';
import style from './courseSection.module.scss';

const CourseSection = () => {
    return (
        <>
        <section className={style.main}>

           <CoursesNavigation />
           <CoursesSlider />
        </section>
        </>
    );
};

export default CourseSection;