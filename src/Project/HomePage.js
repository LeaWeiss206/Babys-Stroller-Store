import Button from 'react-bootstrap/Button';
import {  useNavigate } from "react-router-dom";
import logo from '../Project/images/Asset 3.png'
export default function HomePage(){
    const navigate = useNavigate();
    return(
        <>
        <img src={logo} className = "logoimg"></img>
           <div  className=" btns">
        <Button variant="secondary" size="lg" onClick={() => navigate("/")}>
           to the shop
            </Button>
            <Button variant="secondary" size="lg" onClick={() => navigate("/About")}>
            about
            </Button>

</div>
        </>
    )
}