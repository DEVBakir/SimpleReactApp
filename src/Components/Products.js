import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStar as faStarRegular  } from "@fortawesome/free-regular-svg-icons"
import { faStar as faStarSolid } from  "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router-dom";
function Categories(props) {
    const [category, setCategory] = useState([]);
    useEffect(() => {
        console.log("ddzzd")
        fetch('https://fakestoreapi.com/products/categories')
        .then(res=>res.json())
            .then(json => setCategory(json))  
            .catch(err => console.log(err))
    },[])
    return (
        <div className="categories ds-flex text-black-50 flex-wrap flex-md-nowrap justify-content-center">
            {
                category.map((el,ind) => 
                    <div className={`text-uppercase ${ind === 0 && "active"}`} onClick={(ev) => {
                        document.querySelector(".Products .categories > div.active").classList.remove("active");
                        ev.target.classList.add("active");
                        props.method(el);
                    }} key={el}>
            {el}
        </div>
                )
            }

    </div>
    )
}
function StarReview(props) {
    let result  = [];
    for (var i = 0; i < props.num; i++) {
        result.push(<FontAwesomeIcon icon={faStarSolid} className="active" key={i + "Star"} />)
    }

    for (;i < 5; i++) {
        result.push(<FontAwesomeIcon icon={faStarRegular} key={i + "Star"} />)
    }
    return (
        <div className="stars">
            {result}
        </div>       
    )
}
function Product(props) {
    let style = {
        backgroundImage : `url(${props.img})`
    }
    return (
        <div className="col-12 col-md-6 col-lg-3">
            <div className="product p-3">
                <div className="bg-prod" style={style}>

                </div>
                <div className="product-body py-3 px-4">
                    <StarReview num={props.num} />
                    <h6 className="text-capitalize fw-500 py-1">{props.title}</h6>
                    <span className="fw-bold price  fs-6">${props.price}</span>
                    <Link className="btn bg-primary text-light d-block my-2"
                        to={"/product/" + props.id} >Detail</Link>  
                </div>
            </div>
        </div>
    )
}
export default function Products() {
    let getProductByCategorie = (cat) => {
        fetch('https://fakestoreapi.com/products/category/'+ cat)
        .then(res=>res.json())
            .then(json => setProducts(json))
        .catch(err => console.log(err))
    }
    let [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json => {
                setProducts(json)
            }).catch(err => console.log(err))

    },[]) 
    return (
        <div className="Products p-sm-5 p-2">
            <div className="d-flex justify-content-between mb-4">
                <h3>TOP PRODUCTS</h3>
                <Categories method={getProductByCategorie} />
            </div>
            <div className="row">
                {
                    products.map((el) => 
                        <Product title={el.title} num={el.rating.rate} img={el.image} price={el.price} key={el.id} id={el.id}  />
                    )  
                }
            </div>
        </div>
    )
}