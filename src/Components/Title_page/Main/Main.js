import { useEffect, useState } from 'react';
import style from './Main-title-page.module.scss';


const Main = () => {

    const header = 'Welcome to the best IT course site';
    const tab = [...header];
    
    const [string, setString] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);
    
    useEffect(() => {
        const typing = setInterval(() => {
            if (currentIndex < tab.length) {
                setString(prevString => prevString + tab[currentIndex]);
                setCurrentIndex(prevIndex => prevIndex + 1);
            } else {
                clearInterval(typing);
            }
        }, 100);
    
        return () => {
            clearInterval(typing);
        };
    }, [currentIndex]);

    return (
        <>
            <main className={style.titlePage__mainContent}>
                <h1 className={style.titlePage__mainContent__h1}>
                    {string}
                </h1>
                <button className={style.titlePage__mainContent__button}>
                    Let's start Learn !
                </button>
            </main>
        </>
    )
}

export default Main;