import style from  "./Card.module.scss"

function Card(props) {
  // console.log(props);
  return (
    <div className={style.card}>
            <div className={style.unlikedFav}>
              <img src="/img/unliked.svg" alt="unliked"/>
            </div>
            <img width={133} height={112} src={props.imageUrl} alt="sneakers"/>
            <h5>{props.title}</h5>
            <div className={style.cardBottom}>
              <div className={style.cardBottomSpace}>
                <span>Цена:</span>
                <b>{props.price} руб.</b>
              </div>
              <button className={style.button} onClick={props.onClick}>
                <img width={11} height={11} src="/img/unused.svg" alt="unused"/>
              </button>
            </div>
          </div>
  )
}

export default Card