import Card from './components/Card';
import Drawwer from './components/Drawwer';
import Header from './components/Header';

const arr = [
  {title: 'Мужские Кроссовки Nike Blazer Mid Suede' , price: 12999, imageUrl:"/img/sneakers/sneakers1.jpg"},
  {title: 'Мужские Кроссовки Nike Air Max 270' , price: 12999, imageUrl:"/img/sneakers/sneakers2.jpg"},
  {title: 'Мужские Кроссовки Nike Blazer Mid Suede 2' , price: 8499, imageUrl:"/img/sneakers/sneakers3.jpg"},
  {title: 'Кроссовки Puma X Aka Boku Future Rider' , price: 8999, imageUrl:"/img/sneakers/sneakers4.jpg"},
]
function App() {
  return (
    <div className="wrapper">
      <Drawwer />  
      <Header />
      <div className="content">
        <div className="contentBeginning">
          <h1>
            Все кроссовки
          </h1>
          <div className="placeHolder">
            <img src="/img/search.svg" alt="search"/>
            <input placeholder="Поиск..."/>
          </div>
        </div>
        <div className="sneakers">
         {
          arr.map((obj) => (<Card
            title={obj.title}
            price={obj.price}
            imageUrl={obj.imageUrl}
            onClick={()=>{console.log(obj)}}/> ))
         }
        </div>
      </div>
    </div>
  );
}

export default App;
