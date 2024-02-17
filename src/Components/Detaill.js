import { useEffect , useState } from "react"
import Navbar from "./Navbar"
import { useParams } from "react-router-dom"
export default function Detail() {
    const param = useParams()
    const [productD, setProductD] = useState({})
    useEffect(() => {
        console.log(param)
        let url = 'https://fakestoreapi.com/products/'
        fetch(url + param.id).then(
            res => res.json()
        ).then(
            res => setProductD(res)
        )
    }, [])
    console.log(productD)
    return (
        <>
            <Navbar />
             <div className="row">
            <div className="col-6">
                <img className="img-fluid" src={productD.image} alt="dc"/>
            </div>
            <div className="col-6 d-flex flex-direction-column">
                <h3>{productD.title}</h3>
            </div>
    </div>
        </>
)
}