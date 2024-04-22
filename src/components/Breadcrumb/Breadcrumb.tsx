import separator from './../../assets/images/icons/arrow.svg'
import s from './Breadcrumb.module.scss'
export const Breadcrumb = () => {
    return (
        <ul className={s.breadcrumb}>
            <li><a href="#" className={[s.crumb, 'tag'].join(' ')}>Блог</a></li>
            <li><img src={separator} /></li>
            <li><a href="#" className={[s.crumb, 'tag'].join(' ')}> Автор Виктория Матина</a></li>
        </ul>
    )
}
export default Breadcrumb;