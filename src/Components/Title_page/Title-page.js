import style from './Title-page.module.scss';
import logo from '../../assets/icons/company_logo.jpg';
import hamburger from '../../assets/icons/hamburger_menu.svg';
import { useEffect, useRef, useState } from 'react';

const TitlePage = () => {

    const hamburgerBtn = useRef(null);
    const menu = useRef(null);

    const [click, setClick] = useState(false);

    useEffect(() => {

        const clickHamburgerHandler = () => {
            click ? setClick(false) : setClick(true);
            click ? menu.current.style.display = 'block' : menu.current.style.display = 'none';
            menu.current.addEventListener('animationend', () => {
                click ? menu.current.style.transform = 'translateY(0)' : menu.current.style.transform = 'translateY(-100vh)';          
            });
        }

        hamburgerBtn.current.addEventListener('click', clickHamburgerHandler);

        return (() => {
            hamburgerBtn.current.removeEventListener('click', clickHamburgerHandler);
        });

    });

    return (
        <>
            <header className={style.titlePage__header}>
                <div className={style.titlePage__header__iconLogo}>
                    <img className={style.titlePage__header__iconLogo__img} src={logo} alt='Companies logo' />
                </div>
                <section className={style.titlePage__header__menu}>
                    <div className={style.titlePage__header__menu__hamburger}>
                        <img ref={hamburgerBtn} src={hamburger} alt='hamburger-menu' className={style.titlePage__header__menu__hamburger__img} />
                    </div>
                    <div ref={menu} className={style.titlePage__header__menu__wrapper}>
                        <div className={style.titlePage__header__menu__container}>
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
                    </div>
                </section>
            </header>
            <main className={style.titlePage__mainContent}>

            </main>
        </>
    )
};

export default TitlePage;