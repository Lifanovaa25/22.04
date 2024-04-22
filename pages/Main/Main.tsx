
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb';
import ScrollButton from '../../components/ScrollButton/ScrollButton';
import Banner from "./components/Banner/Banner";
import Cards from './components/Cards/Cards';
import Header from "./components/Header/Header";

import s from './Main.module.scss'
import { useEffect, useState } from 'react';

export const Main = () => {
    const isMobileScreen = window.screen.width <= 768;
    const [swiper, setSwiper] = useState(false)
    useEffect(() => {
        isMobileScreen ? setSwiper(!swiper) : ''

    }, [])
    return (
        <>
            <ScrollButton />
            <main className={s.main}>
                <div className={s.container}>

                    <Breadcrumb />
                    <Header />
                    {!isMobileScreen &&
                        <Banner />
                    }

                    <Cards />
                </div>
                <div className={s.slider_container}>
                    <h1 className={[s.main__title, 'h1'].join(' ')}>Выбор редактора</h1>
                    <Cards isSwiper={swiper} />
                </div>
            </main>
        </>
    )
}
export default Main;