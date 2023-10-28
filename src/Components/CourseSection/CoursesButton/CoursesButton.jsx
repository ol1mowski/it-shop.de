import style from "./CoursesButton.module.scss";
// import buttonArrow from "../../../assets/icons/button_arrow.png";
const CoursesButton = () => {
  return (
    <>
      <div className={style.buttonWrapper}>
        <a href="/" className={style.buttonWrapper__a}>
          <div className={style.buttonWrapper__a__button}>
            See all courses
            {/* <img
              src={buttonArrow}
              alt="arrow icon"
              className={style.buttonWrapper__a__button__icon}
            /> */}
          </div>
        </a>
      </div>
    </>
  );
};

export default CoursesButton;
