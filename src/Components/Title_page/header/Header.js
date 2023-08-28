import style from './Header.module.scss';
import logo from '../../../assets/icons/company_logo.jpg';
import hamburger from '../../../assets/icons/hamburger_menu.svg';
import { useEffect, useRef, useState } from 'react';
import bag from '../../../assets/icons/bag.svg';
import { useSelector } from 'react-redux';
import ZeroCondition from './ShopBag/ZeroCondition/ZeroCondition';

const Header = () => {

    const hamburgerBtn = useRef(null);
    const menu = useRef(null);
    const schopBag = useRef(null);
    const bagInfo = useRef(null);

    const counter = useSelector(state => state.counter.counter);
    const totalPrice = useSelector(state => state.counter.totalPrice);


    const [click, setClick] = useState(true);
    const [show, setShow] = useState(true);

    useEffect(() => {

        const bagClickHandler = () => {
            setShow(prev => !prev);
            show ? bagInfo.current.style.display = 'block' : bagInfo.current.style.display = 'none';
        }

        schopBag.current.addEventListener('click', bagClickHandler);

        return (() => {
            schopBag.current.removeEventListener('click', bagClickHandler);
        })

    }, [schopBag, show])

    useEffect(() => {

        const clickHamburgerHandler = () => {
            click ? setClick(false) : setClick(true);
            if (click) {
                menu.current.style.display = 'flex';
                menu.current.style.justifyContent = 'center';
                menu.current.style.alignItems = 'center';
            }

            else {
                menu.current.style.display = 'none';
            }
            menu.current.addEventListener('animationend', () => {
                click ? menu.current.style.transform = 'translateY(0)' : menu.current.style.transform = 'translateY(-100vh)';
            });
        }

        hamburgerBtn.current.addEventListener('click', clickHamburgerHandler);

        return (() => {
            hamburgerBtn.current.removeEventListener('click', clickHamburgerHandler);
        });

    }, [click, menu]);

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
                            <div className={style.titlePage__header__menu__items__bag}>
                                Shoping Bag
                            </div>
                            <div className={style.titlePage__header__menu__items__bagContent}>
                                {/* <div className={style.titlePage__header__menu__items__bagContent__top}>
                                    <ZeroCondition />
                                </div> */}
                                <div className={style.titlePage__header__menu__items__bagContent__price}>
                                    <h2>
                                        Total: ${totalPrice}
                                    </h2>
                                    <button className={style.titlePage__header__menu__items__bagContent__button}>
                                        Pay now
                                    </button>
                                </div>
                            </div>
                            <aside ref={schopBag} className={style.titlePage__header__shopBag}>
                                <img src={bag} alt='shoping bag img' />
                                <div className={style.titlePage__header__shopBag__count}>
                                    {counter}
                                </div>
                            </aside>
                        </div>
                    </div>
                </section>


                <section ref={bagInfo} className={style.titlePage__header__shopBagContent}>
                    <div className={style.titlePage__header__shopBagContent__info}>
                        {!counter ? <ZeroCondition /> : null}
                    </div>
                    <div className={style.titlePage__header__shopBagContent__total}>
                        <h2>
                            Total: ${totalPrice}
                        </h2>
                        <button className={style.titlePage__header__shopBagContent__total__button}>
                            Pay now
                        </button>
                    </div>

                </section>
            </header>
        </>
    )
}

export default Header;