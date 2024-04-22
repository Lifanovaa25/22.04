
import prev1 from './../../../../assets/images/jpg/preview.png'
import prev2 from './../../../../assets/images/jpg/prev2.png'
import s from './Cards.module.scss'
import HashTags from '../../../../components/HashTags/HashTags'
import Statistics from '../../../../components/Statistics/Statistics'
import { FC } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/swiper-bundle.css'
interface CardsProps {
    isSwiper?: boolean
}
export const Cards: FC<CardsProps> = ({ isSwiper }) => {

    const Cards = [
        {
            href: '#',
            image: prev1,
            tags: [
                {
                    tag: 'маркетплейсы',
                    link: '#'
                },
                {
                    tag: 'инструменты Маяка',
                    link: '#'
                }],
            title: 'Что такое SEO-оптимизация на Вайлдберриз?',
            value: 'Поисковая оптимизация, иначе говоря, SEO на Вайлдберриз – это комплексная работа, результат ...',
            date: '14.02.2024'
        },
        {
            href: '#',
            image: prev2,
            tags: [
                {
                    tag: 'маркетплейсы',
                    link: '#'
                },
                {
                    tag: 'инструменты Маяка',
                    link: '#'
                }],
            title: 'Зачем нужна аналитика?',
            value: 'В статье разберем, где найти аналитику на Вайлдберриз и как ею пользоваться',
            date: '14.02.2024'
        },
        {
            href: '#',
            image: prev2,
            tags: [
                {
                    tag: 'маркетплейсы',
                    link: '#'
                },
                {
                    tag: 'инструменты Маяка',
                    link: '#'
                }],
            title: 'Анализ ниши на Вайлдберриз',
            value: 'Рассказываем как правильно анализировать нишу, находить лучшие товары для продажи и работать с конкуренцией.',
            date: '14.02.2024'
        },
    ]
  
    return (

        <div className={s.cards_items}>
            {isSwiper ? (
                <Swiper
                    spaceBetween={20}
                    slidesPerView={1.2}
                >
                    {Cards.map((item, index) =>
                        <SwiperSlide>
                            <a key={index} href={item.href} className={[s.cards_items__item, s.cards_items__slide].join(' ')}>

                                <img src={item.image} alt={item.title} className={s.cards_items__img} />
                                <div className={s.cards_items__wrap}>
                                    <div className={s.cards_items__content}>
                                        <h3 className={[s.cards_items__h3, 'article'].join(' ')}>{item.title}</h3>
                                        <p className={[s.cards_items__p, 'p_text-2'].join(' ')}>{item.value}</p>

                                        <div className={s.cards_items__tags}>
                                            <HashTags tagItems={item.tags} />
                                        </div>
                                    </div>
                                    <div className={s.cards_items__content}>

                                        <Statistics className={[s.desc_tags, s.desc_tags_swiper].join(' ')} />
                                        <div className={[s.cards_items__date, 'desc'].join(' ')}>{item.date}</div>
                                    </div>
                                </div>
                            </a>
                        </SwiperSlide>
                    )}

                </Swiper>
            ) : (
                <>
                    {Cards.map((item, index) =>
                        <a key={index} href={item.href} className={s.cards_items__item}>
                            <img src={item.image} alt={item.title} className={s.cards_items__img} />
                            <div className={s.cards_items__wrap}>
                                <div className={s.cards_items__content}>
                                    <h3 className={[s.cards_items__h3, s.cards_items__h3_28, 'article'].join(' ')}>{item.title}</h3>
                                    <p className={[s.cards_items__p, 'p_text-2'].join(' ')}>{item.value}</p>
                                    <div className={s.cards_items__tags}>
                                        <HashTags tagItems={item.tags} />
                                    </div>
                                </div>
                                <Statistics className={[s.desc_tags,s.desc_tags_card].join(' ')} />
                                <div className={[s.cards_items__date, 'desc'].join(' ')}>{item.date}</div>
                            </div>
                        </a>

                    )}
                </>
            )}

        </div>

    )
}
export default Cards;