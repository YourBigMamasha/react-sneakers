function Header() {
  return (
    <header>
        <div className="headerLeft">
          <img width={40} height={40} src="/img/logo.png" alt="logo"/>
          <div className="headerleftinfo">
            <h3>
            React Sneakers
            </h3>
            <p>
            Магазин лучших кроссовок
            </p>
          </div>
        </div>
        <ul className="headerRight">
          <li className="margLiCart">
            <img width={18} height={18} src="/img/Cart.svg"  alt="Cart"/>
            <span>1205</span>
          </li>
          <li>
            <img width={18} height={18} src="/img/favorite.svg" alt="favorite"/>
          </li>
          <li>
            <img width={18} height={18} src="/img/profile.svg" alt="profile"/>
          </li>
        </ul>
      </header>
  )
}

export default Header;