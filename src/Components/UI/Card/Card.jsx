import './Card.css';
import image from '../../../Images/card.jpg'

export const Card = () =>{
    return(
        <>
        <div className='card'>
            <img src={image} alt="Img-card" className="cardImg" />
            <button className='btn'>Get</button>
        </div>
        </>
    )
}