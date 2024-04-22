

import HashTags from '../../../../components/HashTags/HashTags';
import Statistics from '../../../../components/Statistics/Statistics';
import banner from './../../../../assets/images/jpg/banner.png'
import s from './Banner.module.scss'
export const Banner = () => {
    const BannerTags = [
        {
            tag: 'маркетплейсы',
            link: '#'
        },
        {
            tag: 'выход на маркетплейс',
            link: '#'
        },
        {
            tag: 'инструменты Маяка',
            link: '#'
        }
    ]

    return (
        <div className={s.banner}>
            <article className={s.banner__article}>
                <h2 className={s.banner__h2}>Тарифы и условия доставки товаров до склада</h2>
                <p className={[s.banner__p, 'p_text-2'].join(' ')}>Узнайте, как Wildberries считает логистику, какая доплата за логистику Wildberries действует для поставщиков</p>
                <Statistics />
                <p className={[s.banner__date, 'desc'].join(' ')}>14.02.2024</p>
                <div className={s.banner__tags}>
                    <HashTags tagItems={BannerTags} />
                </div>
            </article>
            <figure className={s.banner__image}>
                <img src={banner} alt="Тарифы и условия доставки товаров до склада" />
            </figure>

        </div>
    )
}
export default Banner;