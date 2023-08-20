import style from './Title-page.module.scss';
import logo from '../../assets/icons/company_logo.jpg';

const TitlePage = () => {
    return (
        <>
            <header className={style.titlePage__header}>
                <div className={style.titlePage__header__iconLogo}>
                    <img className={style.titlePage__header__iconLogo__img} src={logo} alt='Companies logo' />
                </div>
                <section className={style.titlePage__header__menu}>
                    <div className={style.titlePage__header__menu__wrapper}>
                        <div className={style.titlePage__header__menu__items}>
                            About
                        </div>
                        <div className={style.titlePage__header__menu__items}>
                            What you gain
                        </div>
                        <div className={style.titlePage__header__menu__items}>
                            Offerts
                        </div>
                        <div className={style.titlePage__header__menu__items}>
                            Contact
                        </div>
                    </div>
                </section>
            </header>
            <main className={style.titlePage__mainContent}>

            </main>
        </>
    )
};

export default TitlePage;