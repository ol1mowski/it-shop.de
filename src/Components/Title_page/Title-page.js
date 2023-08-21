import { useEffect, useState } from 'react';
import style from './Title-page.module.scss';
import Header from './header/Header';

const TitlePage = () => {

    const header = 'Welcome to the best IT course site';

    const [string, setString] = useState('');

    useEffect(() => {
        let currentIndex = 0;
        const interval = setInterval(() => {
            if (currentIndex < header.length - 1) {
                setString(prevString => prevString + header[currentIndex]);
                currentIndex++;
            } else {
                clearInterval(interval);
            }
        }, 100);
    
        return () => {
            clearInterval(interval);
        };
    }, []);
    

    return (
        <>
            <Header />
            <main className={style.titlePage__mainContent}>
                <h1 className={style.titlePage__mainContent__h1}>
                    {string}
                </h1>
                <button className={style.titlePage__mainContent__button}>
                    Let's start Learn !
                </button>
            </main>
        </>
    );
};

export default TitlePage;
