import s from '../footer/footer.module.scss'
import image from '../../images/logo (2).svg'
import telegram from "../../images/telegram-fill.svg"
import whatsap from "../../images/whatsapp-fill.svg"
import compass from "../../images/compass-fill.svg"
import { Link } from 'react-router-dom'
function Footer() {
    return(
        <>
        <div className={s.footer__otstup2}>
        <div className={s.footer}>
            <div className={s.footer__box}>
                <div className={s.footer__logo}><img src={image} alt="" />
                <p>Vinyl Music</p>
                </div>
                <div className={s.footer__navigation}>
                    <Link to = "/" className = {s.footer__link}>Главная</Link>
                    <Link to = "/catalog" className = {s.footer__link}>Каталог</Link>
                    <Link to = "/artist" className = {s.footer__link}>Артисты</Link>
                    <p>@CopyrightAll right reversed</p>
                </div>
                <div className= {s.footer__media} >
                    <p>Наши соц сети</p>
                    <div className={s.footer_mediaicon}>
                    <img src = {telegram} alt="" />
                    <img src = {whatsap} alt="" />
                    <img src = {compass} alt="" />
                    </div>
                </div>
            </div>
        </div>
        </div>
        </>
    )
}

export default Footer