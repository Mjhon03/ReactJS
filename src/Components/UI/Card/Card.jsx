import './Card.css';

export const Card = ({coin}) =>{
    return(
        <>
        
        <div key={coin.id} className='card'>
            <img src={coin.URL} alt="Img-card" className="cardImg" />
            <h2 className="card_name">{coin.name}</h2>
            <button className='btn'>Get</button>
        </div>
        </>
    )
}