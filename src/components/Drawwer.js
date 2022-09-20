function Drawwer() {
  return (
    <div style={{ display:'none'}} className="overlay">
      <div className="drawwer">
          <h2>
            Корзина
            <img src="/img/delete.svg" alt="delete"/></h2>
          <div className="items">
            <div className="itemCart">
              <div style={{backgroundImage: "url(/img/sneakers/sneakers1.jpg)"}} className="itemCartSneakersImg">
              </div>
              <div className="PBClass">
                <p>Мужские Кроссовки Nike Air Max 270</p>
                <b>12 999 руб.</b>
              </div>
              <div className="itemCartDelete">
                <img src="/img/delete.svg" alt="delete"/>
              </div>
            </div>

            <div className="itemCart">
              <div style={{backgroundImage: "url(/img/sneakers/sneakers1.jpg)"}} className="itemCartSneakersImg">
              </div>
              <div className="PBClass">
                <p>Мужские Кроссовки Nike Air Max 270</p>
                <b>12 999 руб.</b>
              </div>
              <div className="itemCartDelete">
                <img src="/img/delete.svg" alt="delete"/>
              </div>
            </div>
          </div>

          <div className="cartTotalBLock">
            <ul>
              <li className="itemsBottom">
                <span>Итого: </span>
                <div></div>
                <b>21 498 руб.</b>
              </li>
              <li className="itemsBottom">
                <span>Налог 5%: </span>
                <div></div>
                <b>1074 руб.</b>
              </li>
            </ul>
            <button className="greenButton">Оформить заказ<img src="/img/arrow.svg" alt="arrow"/></button>
          </div>
        </div>
    </div>
    
  )
}

export default Drawwer;