import './Recommendations.css'

const items = [
    {id:1,name:"TheF*****Burger",description:"Hamburguesa de 100% angus, triple de bacon, extra de pepinillo y nuestra salsa secreta...¿Que mas necesitas?",price:12.50,img:"https://panamarbakery.com/public/Image/2021/3/burger_pag70.jpg"},
    {id:2,name:"Muerte por costillar", description:"¿Alguna vez te has preguntado a que sabe un costillar en el infierno? ¡Es tu momento! (Solo para los más valientes)",price:17.00, img:"https://cdn2.cocinadelirante.com/sites/default/files/images/2020/10/como-hacer-costillas-al-carbon-facil.jpg"},
    {id:3,name:"Atardecer en la India",description:"Solo para los paladares amantes de las especias, con solo probarlo viajarás al continente asiatico",price:14.25,img:"https://directiatravel.com/public/upload/guide/2017/06/gastronomia-india_768x475.jpg"}
]

function Recommendations() {
    const print = items.map(element =>{
        return(
            <article key={element.id} className="Recommendations__item">
                <img src={element.img} alt={element.name} />
                <div className="Recommendation__text">
                    <h4>{element.name}</h4>
                    <p>{element.description}</p>
                </div>
                <h5 className='Recommendation__price'>{element.price.toFixed(2)}€</h5>
            </article>
        )
    })
  return (
    <div className='Recommendations__container'>
        {print}
    </div>
  )
}

export default Recommendations