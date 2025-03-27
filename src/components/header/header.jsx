import { Link } from 'react-router-dom'
import s from '../header/header.module.scss'
import image from '../../images/logo.svg'

function Header () {
    return (
        <>
        <div className={s.header}>
            <div className = {s.header__box}>  
                <div className={s.header__logo}><img src={image} alt="" /></div>
                <div className={s.header__navigation}>
                <Link to ='/' className={s.header__link} >Главная</Link>
                <Link to = "/catalog" className={s.header__link}>Каталог</Link>
                <Link to = "/cart" className={s.header__link}>Корзина</Link>
                <Link to = "/artist" className={s.header__link}>Артисты</Link>
                </div>
                <div className={s.header__btn}>
                    <Link to = "/join" >
                    <button className={s.header__enter}>Войти</button>
                    </Link>
                    </div>
            </div>
        
        </div>
        </>
    )
}


export default Header