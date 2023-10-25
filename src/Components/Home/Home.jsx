import Content from "./Content/Content";
import style from "./Home.module.scss";
import InputsSection from "./InputsSection/InputsSection";
import LeftSide from "./LeftSide/LeftSide";
import Students from "./Students/Students";
import StudentsBackground from "./StudentsBackground/StudentsBackground";

const Home = () => {
  return (
    <>
      <main className={style.home__mainContent}>
        <LeftSide />
        <StudentsBackground />
      </main>
    </>
  );
};

export default Home;
