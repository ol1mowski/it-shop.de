import Content from "./Content/Content";
import style from "./Home.module.scss";
import InputsSection from "./InputsSection/InputsSection";
import Students from "./Students/Students";
import StudentsBackground from "./StudentsBackground/StudentsBackground";

const Home = () => {
  return (
    <>
      <main className={style.home__mainContent}>
        <Content />
        <InputsSection />
        <Students />
        <StudentsBackground />
      </main>
    </>
  );
};

export default Home;
