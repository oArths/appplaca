import './Styles.css';
import logo from "./img/car.png"

// hearder feito separadamente para facilitar o processo final
function Header(){
    return(
        <div className='header'>
           <div className='div-img'><img src={logo} alt='Logo' href="./"></img></div> 
            <h1><strong>InfoPlaca</strong></h1>
        </div>
    )

}
export default  Header;