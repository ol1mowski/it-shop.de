import Courses from './Courses/Courses';
import style from './coursesNavigation.module.scss';

const CoursesNavigation = () => {

    const COURSES = [
        {
            id: 1,
            name: 'Data Science',
        },
        {
            id: 2,
            name: 'Mobile Development',
        },
        {
            id: 3,
            name: 'Programming',
        },
        {
            id: 4,
            name: 'Game Development',
        },
        {
            id: 5,
            name: 'Software Testing',
        },
        {
            id: 6,
            name: 'Software Engineering',
        },
        {
            id: 7,
            name: 'Network & Security',
        },
    ]
    return (
        <>
            <div id={style.wrapper} className="col-lg-3 col-md-4">
                <ul id={style.ul} className="nav nav-tabs flex-nowrap overflow-auto flex-md-column pb-2 pb-md-0 mb-3 mb-md-5" role="tablist">
                        <li className="nav-item">
                            <a href="#" id={style.active} className="nav-link d-inline-block text-nowrap active" role="tab" aria-selected="true">Web Development</a>
                        </li>
                   { COURSES.map((val) => <Courses key={val.id} course={val.name} />) }
                </ul>
                <a id={style.a} href="portfolio-courses.html" className="btn btn-outline-primary btn-lg d-none d-md-inline-flex">
                    See all courses
                </a>
            </div>
        </>
    );
};

export default CoursesNavigation;