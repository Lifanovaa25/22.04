import { FC } from 'react';

import s from './Statistics.module.scss'

interface CardProps {
    icon?: string;
    iconCode?: string | any;
    value: string | number;
    idx: number;
    className?: string;
}
export const StatisticsCard: FC<CardProps> = ({ icon, value, idx, iconCode, className }) => {

    return (
        <>
            <div className={[s.card, className].join(' ')} key={idx}>
                <img src={icon} alt="" />
                {iconCode}
                <p className={[s.card__description, 'desc'].join(' ')}>
                    {value}
                </p>
            </div>
        </>

    )
}