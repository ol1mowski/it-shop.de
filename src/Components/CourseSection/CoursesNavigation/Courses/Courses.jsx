import style from "./courses.module.scss";

const Courses = (props) => {
  return (
    <>
      <li className="nav-item">
        <a
          href="#"
          id={style.a}
          className="nav-link d-inline-block text-nowrap active"
          role="tab"
          aria-selected="true"
        >
          {props.course}
        </a>
      </li>
    </>
  );
};

export default Courses;
