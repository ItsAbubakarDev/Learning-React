import Title from './Title.jsx'
import Description from './Description.jsx'
import './Product.css'
function Product({title,price,features = ["Durable" , "High Tech" , "Fast"]}){
    let list = features.map((feature)=> <li>{feature}</li>)
    let styles = {backgroundColor:price>30000 ?"yellow":"pink"}
    return (
        
        <div className='Product' style={styles}>
            <Title title={title}></Title>
            <Description price = {price}></Description>
            <p>{list}</p>
            {price>30000?<p>"Discount of 5%"</p> :null}
        </div>
    )
}

export default Product