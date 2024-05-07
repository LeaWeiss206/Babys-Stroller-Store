import { useDispatch, useSelector } from "react-redux"
import { useState } from "react"
import { addProduct } from "./redux/actions/cartActions"
import { decreaseQty } from "./redux/actions/carriagesActions"
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom"
import MoreDetails from "./MoreDetails";

export default function CarriageDepartment() {
    const carriages = useSelector((state) => state.carriages)
    const cart = useSelector((state) => state.cart);
    const [sunOfProducts, setSunOfProducts] = useState(0)
    const dispatch = useDispatch()

    const navigate = useNavigate();


    const addToCart = (item) => {
        if (cart.find((p) => p.id === item.id)) {
            if (carriages.find((c) => c.id === item.id).qty > 0)
                dispatch(decreaseQty(item.id))
            else
                alert("no more left");
        }
        else {
            dispatch(addProduct(item))
            dispatch(decreaseQty(item.id))
        }

        setSunOfProducts(sunOfProducts + 1)
    }
    return (

        <>
        <div id ="CartDetails">
            <div id="allCards">
                {carriages ? carriages.map((item, index) => (
                    <>

                        <div id="container" key={index}>
                            <div className="card" key={`carriage-${item.id}`}>

                                <img className="card-img-top" src={item.img} alt="Card image cap"></img>
                                <div className="card-body">
                                    <h5 className="card-title">{item.name}</h5>
                                    <h4 className="card-text">{item.price}</h4>


                                    <button type="button" className="btn btn-info" onClick={() => addToCart(item)}>Add to cart</button>
                                    <MoreDetails name={item.name} description={item.description} key={`MoreDetails-${item.id}`}></MoreDetails>
                                </div>
                            </div>
                        </div>

                    </>

                )) : <div>Products is null</div>}
            </div>


            <Button id="Button_cart" variant="secondary" size="lg" onClick={() => navigate("/CartDetails")}>
                🛒      {sunOfProducts}
            </Button>

            </div>

        </>

    )
}