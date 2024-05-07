import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import { useEffect } from "react";
export default function GoToPayment() {
    const products = useSelector((state) => state.cart)
    const FinalSum = products.reduce((acc, product) => acc + (product.qtyInCart * product.price), 0);;
    const navigate = useNavigate();
    useEffect(() => {
        alert("Are you sure you want to go to checkout?")
    }, [])


    return (
        <>
  <div id ="CartDetails" >
            <Table striped bordered hover className="secndTable">
                <thead className="Table_thead">
                    <tr>
                        <th>image</th>
                        <th>name</th>
                        <th>sum of Products</th>
                        <th>sum to pay</th>
                    </tr>
                </thead>
                <tbody>
                    {products ? products.map((item, index) => (
                        <tr key={item.id}>
                            <td><img src={item.img} alt="Card image cap" className="img"></img></td>
                            <td>{item.name}</td>
                            <td>{item.qtyInCart}</td>
                            <td>{item.price * item.qtyInCart}</td>
                        </tr>
                    )) : <tr><td colSpan="5"><div>Products is null</div></td></tr>}
                </tbody>
            </Table>
            <h4>Final sum: {FinalSum}</h4>

            <Button variant="secondary" size="lg" >
                buy now
            </Button>
            </div>

        </>
    )

}