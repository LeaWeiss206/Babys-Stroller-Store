import { useSelector } from "react-redux"
import { removeProduct } from "./redux/actions/cartActions"
import { addQty, addSumQty, decreaseQty } from "./redux/actions/carriagesActions"
import { useDispatch } from "react-redux"
import Table from 'react-bootstrap/Table';
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import trash from '../Project/images/trash.png'

export default function CartDetails() {

    const products = useSelector((state) => state.cart)
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const [rendering, setRendering] = useState(0);

    const addToTheCart = (item) => {
        
            if(products.find((c)=> c.id===item.id).qty>0)
            dispatch(decreaseQty(item.id))
            else 
            alert("no more left");
       
        setRendering(rendering + 1);
    }

    const removeFromCart = (item) => {
        if (item.qtyInCart === 1)
            dispatch(removeProduct(item.id));
        dispatch(addQty(item.id))
        setRendering(rendering + 1);
    }

    return (
        <>
        <div id ="CartDetails" >
            <Table striped bordered hover>
                <thead className="Table_thead">
                    <tr>
                        <th>#</th>
                        <th>name</th>
                        <th>image</th>
                        <th>sum</th>
                        <th>+/-</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {products ? products.map((item, index) => (
                        <tr key={item.id}>
                            <td>{index + 1}</td>
                            <td>{item.name}</td>
                            <td><img src={item.img} alt="Card image cap" className="img"></img></td>
                            <td>{item.price}</td>
                            <td key={`actions-${item.id}`}>
                                <pre>  <button type="button" class="btn btn-outline-info" onClick={() => addToTheCart(item)} >+</button>
                                    {" "} {item.qtyInCart} {" "}
                                    <button type="button" class="btn btn-outline-info" onClick={() => removeFromCart(item)} >-</button>
                                </pre>
                            </td>
                            <td><img src={trash} className="img_trash" onClick={() =>{ dispatch(removeProduct(item.id)); dispatch(addSumQty(item.id))}}></img></td>
                        </tr>
                    )) : <tr><td colSpan="5"><div>Products is null</div></td></tr>}
                </tbody>
            </Table>
            <Button className="Button1" variant="secondary" size="lg" onClick={() => navigate("/GoToPayment")}>
                GoToPayment
            </Button>

            </div>
        </>
    )
}