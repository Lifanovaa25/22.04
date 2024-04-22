
import avatar from './../../../../assets/images/jpg/avatar.jpeg'
import s from './Header.module.scss'
export const Header = () => {
    return (
        <header className={s.header}>
            <div className={s.header__avatar}>
                <img src={avatar} alt="Виктория Матина" />
            </div>
            <div className={s.header__title}>
                <h1 className={s.header__title_h1}>Виктория Матина</h1>
                <p className={[s.header__subtitle, 'p_text'].join(' ')}>Автор статей</p>
            </div>
        </header>
    )
}
export default Header;