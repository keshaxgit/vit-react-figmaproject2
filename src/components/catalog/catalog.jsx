import s from "../catalog/catalog.module.scss"
import tyler from "../../images/tyler.png"
import damn from "../../images/DAMN.png"
import forallthedogs from "../../images/for all the dogs.png" 

function Catalog(){
    return(
        <>
        <div className = {s.main}>
            <div className={s.main__box}>
                <div className={s.filter}>
                    <div className={s.filter__name}>Фильтрация</div>
                    <div className={s.filter__chose}>
                        <div className={s.filter__year}>
                            <p>Год</p>
                            <p><input type="checkbox" name="" id="" />2000</p>
                            <p><input type="checkbox" name="" id="" />2001</p>
                            <p><input type="checkbox" name="" id="" />2002</p>
                        </div>
                        <div className={s.filter__time}>
                            <p>Длительность</p>
                            <p><input type="checkbox" name="" id="" />100</p>
                            <p><input type="checkbox" name="" id="" />110</p>
                            <p><input type="checkbox" name="" id="" />120</p>
                        </div>
                        <div className={s.filter__genre}>
                            <p>Жанр</p>
                            <p><input type="checkbox" name="" id="" />Техно</p>
                            <p><input type="checkbox" name="" id="" />Гламур</p>
                            <p><input type="checkbox" name="" id="" />Блодны</p>
                        </div>
                    </div>
                </div>
            </div>
                <div className={s.catalog}>
                    <div className={s.catalog__box}>
                        <div className={s.catalog__cart}>
                            <img src={damn} alt=""  className={s.pic}/>
                            <div className={s.cart__misc}>
                                <p className={s.cart__name}>DAMN</p>
                                <p className={s.cart__cost}>$25</p>
                            </div>
                        </div>
                        <div className={s.catalog__cart}>
                            <img src={tyler} alt=""  className={s.pic}/>
                            <div className={s.cart__misc}>
                                <p className={s.cart__name}>DAMN</p>
                                <p className={s.cart__cost}>$25</p>
                            </div>
                        </div>
                        <div className={s.catalog__cart}>
                            <img src={forallthedogs} alt=""  className={s.pic}/>
                            <div className={s.cart__misc}>
                                <p className={s.cart__name}>DAMN</p>
                                <p className={s.cart__cost}>$25</p>
                            </div>
                        </div>
                        <div className={s.catalog__cart}>
                            <img src={damn} alt=""  className={s.pic}/>
                            <div className={s.cart__misc}>
                                <p className={s.cart__name}>DAMN</p>
                                <p className={s.cart__cost}>$25</p>
                            </div>
                        </div>
                        <div className={s.catalog__cart}>
                            <img src={tyler} alt=""  className={s.pic}/>
                            <div className={s.cart__misc}>
                                <p className={s.cart__name}>DAMN</p>
                                <p className={s.cart__cost}>$25</p>
                            </div>
                        </div>
                        <div className={s.catalog__cart}>
                            <img src={forallthedogs} alt=""  className={s.pic}/>
                            <div className={s.cart__misc}>
                                <p className={s.cart__name}>DAMN</p>
                                <p className={s.cart__cost}>$25</p>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
        </>
    )
}

export default Catalog