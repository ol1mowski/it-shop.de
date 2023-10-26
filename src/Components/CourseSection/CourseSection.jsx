import CoursesNavigation from './CoursesNavigation/CoursesNavigation';
import PopularCourses from './PopularCourses/PopularCourses';
import style from './courseSection.module.scss';

const CourseSection = () => {
    return (
        <>
           <CoursesNavigation />
            <PopularCourses />
        </>
    );
};

export default CourseSection;