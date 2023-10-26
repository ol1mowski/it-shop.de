import style from "./Home.module.scss";
import LeftSide from "./LeftSide/LeftSide";
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
