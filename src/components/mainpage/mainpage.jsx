import s from "../mainpage/mainpage.module.scss"
import tyler from "../../images/tyler.png"
import drake from "../../images/drake.png"
import kobain from "../../images/kobain.png"
import beatles from "../../images/beatles.png"
import hotikovo from "../../images/hotikovo.png"
import plastinka from "../../images/plastinka.png"

function Main(){
    return(
    <>
    
        <div className={s.main}>
            <div className={s.main__box}>
                <div className={s.main__about}>
                    <h1>Vinyl Music</h1>
                    <p>в нашем магазине вы можете купить виниловые пластинки</p>
                </div>
                <img src={plastinka} alt="" />
            </div>
        </div>
        <div className={s.popular}>
            <p>Популярное</p>
        </div>
        <div className={s.artist}>
            <div className={s.artist__box}>
                <div className={s.artist__about}>
                    <img src={tyler} alt="" />
                    <div className={s.artist__disc}>
                        <p className={s.artist__name}>Tyler the creater</p>
                        <button className={s.artist__btn}>перейти</button>
                    </div>
                </div>
                <div className={s.artist__about}>
                    <img src={drake} alt="" />
                    <div className={s.artist__disc}>
                        <p className={s.artist__name}>Tyler the creater</p>
                        <button className={s.artist__btn}>перейти</button>
                    </div>
                </div>
                <div className={s.artist__about}>
                    <img src={kobain} alt="" />
                    <div className={s.artist__disc}>
                        <p className={s.artist__name}>Tyler the creater</p>
                        <button className={s.artist__btn}>перейти</button>
                    </div>
                </div>
                <div className={s.artist__about}>
                    <img src={beatles} alt="" />
                    <div className={s.artist__disc}>
                        <p className={s.artist__name}>Tyler the creater</p>
                        <button className={s.artist__btn}>перейти</button>
                    </div>
                </div>
                <div className={s.artist__about}>
                    <img src={tyler} alt="" />
                    <div className={s.artist__disc}>
                        <p className={s.artist__name}>Tyler the creater</p>
                        <button className={s.artist__btn}>перейти</button>
                    </div>
                </div>
                <div className={s.artist__about}>
                    <img src={drake} alt="" />
                    <div className={s.arist__disc}>
                        <p className={s.artist__name}>Tyler the creater</p>
                        <button className={s.artist__btn}>перейти</button>
                    </div>
                </div>
                <div className={s.artist__about}>
                    <img src={kobain} alt="" />
                    <div className={s.artist__disc}>
                        <p className={s.artist__name}>Tyler the creater</p>
                        <button className={s.artist__btn}>перейти</button>
                    </div>
                </div>
                <div className={s.artist__about}>
                    <img src={beatles} alt="" />
                    <div className={s.artist__disc}>
                        <p className={s.artist__name}>Tyler the creater</p>
                        <button className={s.artist__btn}>перейти</button>
                    </div>
                </div>
            </div>
        </div>
        <div className={s.about__us}>
            <p>О нас</p>
        </div>

        <div className={s.find}>
            <div className={s.find__box}>
                <div className={s.find__where}>
                <h1>Vinyl music</h1>
            <p>Все хорошее только в Хотьково</p>
            <p>+888553535</p>
            <p>drakemeatsussy@whiteparty.diddy</p>
                </div>
                <img src={hotikovo} alt="" />
            </div>
        </div>
    </>
    )
}

export default Main