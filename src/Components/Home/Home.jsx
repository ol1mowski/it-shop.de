import Content from './Content/Content';
import style from './Home.module.scss';
import InputsSection from './InputsSection/InputsSection';
import Students from './Students/Students';


const Home = () => {

    return (
        <>
            <main className={style.home__mainContent}>
            <Content />
            <InputsSection />
            <Students />
            </main>
        </>
    )
}

export default Home;