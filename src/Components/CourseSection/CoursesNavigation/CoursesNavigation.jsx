import style from './coursesNavigation.module.scss';

const CoursesNavigation = () => {
    return (
        <>
            <div id={style.wrapper} class="col-lg-3 col-md-4">

                <ul class="nav nav-tabs flex-nowrap overflow-auto flex-md-column pb-2 pb-md-0 mb-3 mb-md-5" role="tablist">
                    <div className={style.first}>
                        <li class="nav-item">
                            <a href="#" id={style.active} class="nav-link d-inline-block text-nowrap active" role="tab" aria-selected="true">Web Development</a>
                        </li>
                    </div>
                    <div className={style.otherList}>
                        <li class="nav-item">
                            <a href="#" class="nav-link d-inline-block text-nowrap" role="tab" aria-selected="false"><span className={style.aText}>Data Science</span></a>
                        </li>
                    </div>
                    <div className={style.otherList}>
                        <li class="nav-item">
                            <a href="#" class="nav-link d-inline-block text-nowrap" role="tab" aria-selected="false"><span className={style.aText}>Mobile Development</span></a>
                        </li>
                    </div>
                    <div className={style.otherList}>
                        <li class="nav-item">
                            <a href="#" class="nav-link d-inline-block text-nowrap" role="tab" aria-selected="false"><span className={style.aText}>Programming</span></a>
                        </li>
                    </div>
                    <div className={style.otherList}>
                        <li class="nav-item">
                            <a href="#" class="nav-link d-inline-block text-nowrap" role="tab" aria-selected="false"><span className={style.aText}>Game Development</span></a>
                        </li>
                    </div>
                    <div className={style.otherList}>
                        <li class="nav-item">
                            <a href="#" class="nav-link d-inline-block text-nowrap" role="tab" aria-selected="false"><span className={style.aText}>Software Testing</span></a>
                        </li>
                    </div>
                    <div className={style.otherList}>
                        <li class="nav-item">
                            <a href="#" class="nav-link d-inline-block text-nowrap" role="tab" aria-selected="false"><span className={style.aText}>Software Engineering</span></a>
                        </li>
                    </div>
                    <div className={style.otherList}>
                        <li class="nav-item">
                            <a href="#" class="nav-link d-inline-block text-nowrap" role="tab" aria-selected="false"><span className={style.aText}>Network &amp; Security</span></a>
                        </li>
                    </div>
                </ul>
                <a href="portfolio-courses.html" class="btn btn-outline-primary btn-lg d-none d-md-inline-flex">
                    See all courses
                    <i class="bx bx-right-arrow-alt fs-xl ms-2"></i>
                </a>
            </div>
        </>
    );
};

export default CoursesNavigation;