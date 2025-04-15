import damn from "../../images/DAMN.png"
import s from "../cart/cart.module.scss"

function Cart(){
    return(
        <>
        <div className={s.main}>
            <div className={s.main__box}>
                <div className={s.cart__img}>
                    <div className={s.cart__disc}>
                        <img src={damn} alt="" className={s.big__img} />
                    </div>
                    <div className={s.mini__cart}>
                        <img src={damn} alt="" className={s.mini__img} />
                        <img src={damn} alt="" className={s.mini__img}/>
                        <img src={damn} alt="" className={s.mini__img}/>
                        <img src={damn} alt="" className={s.mini__img}/>
                    </div>
                </div>
                <div className={s.cart__misc}>
                    <h1 className={s.cart__name}>DAMN</h1>
                    <p className={s.cart__cost}>25$</p>
                    <p className={s.cart__info}>Восьмой студийный альбом канадского рэпера Дрейка, вышедший 6 октября 2023 года на лейблах OVO Sound и Republic Records. В альбоме приняли участие Teezo Touchdown, 21 Savage, J. Cole, Yeat, SZA, PartyNextDoor, Chief Keef, Бэд Банни, Sexyy Red и Lil Yachty. Он следует за двумя альбомами Дрейка, вышедшими в 2022 году: его седьмым сольным студийным альбомом Honestly, Nevermind и совместным студийным альбомом с 21 Savage под названием Her Loss.</p>
                <div className={s.add}>
                    <button className={s.add__cart}>Добавить в корзину</button>
                </div>
                </div>
            </div>
        </div>

        <div className={s.another__album}>
            <h1>Другие Альбомы</h1>
        </div>
        <div className={s.main__another}>
            <div className={s.another__box}>
                <div className={s.another__img}>
                    <img src={damn} alt=""  className={s.img__another}/>
                    <div className={s.another__misc}>
                        <p>DAMN</p>
                        <p>перейти</p>
                    </div>
                </div>
                <div className={s.another__img}>
                    <img src={damn} alt=""  className={s.img__another}/>
                    <div className={s.another__misc}>
                        <p>DAMN</p>
                        <p>перейти</p>
                    </div>
                </div>
                <div className={s.another__img}>
                    <img src={damn} alt=""  className={s.img__another}/>
                    <div className={s.another__misc}>
                        <p>DAMN</p>
                        <p>перейти</p>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Cart


