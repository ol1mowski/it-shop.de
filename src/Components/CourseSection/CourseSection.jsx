import CoursesNavigation from './CoursesNavigation/CoursesNavigation';
import CoursesSlider from './CoursesSlider/CoursesSlider';
import style from './courseSection.module.scss';
import CoursesButton from './CoursesButton/CoursesButton';

const CourseSection = () => {
    return (
        <>
        <section className={style.main}>

           <CoursesNavigation />
           <CoursesSlider />
           <CoursesButton />
        </section>
        </>
    );
};

export default CourseSection;