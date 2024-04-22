
import s from './Statistics.module.scss'
import { StatisticsCard } from './StatisticsCard'

import eye from './../../assets/images/icons/eye.svg'
import clock from './../../assets/images/icons/clock.svg'
// import fire from './../../assets/images/icons/fire.svg'
// import hand from './../../assets/images/icons/hand.svg'
import { FC } from 'react'

interface StatisticsProps {
   
     className?:string;
 }
export const Statistics: FC<StatisticsProps> = ({className}) => {
    const items = [
        {
            icon:eye,
            value: 1321,
        },
        {
            icon:clock,
            value: '10 мин',
        },
        {
             iconCode: <span>&#128293;</span>,
            // icon:fire,
            value: '1321',
        },
        {
            //  iconCode:  <span>✍️</span>,
             iconCode:  <span>&#9997;&#65039;</span>,     
            // icon:fire,
            value: '1321',
        }
    ]
    return (<>
        <div className={[s.statistics,className].join(' ')}>
            {items.map((item,index) => 
            <StatisticsCard idx={index} 
            iconCode={item.iconCode} 
            icon={item.icon} value={item.value} className={className}/>
            
            )}
        </div>
    </>)
}
export default Statistics