import {Coins} from '../../../Coins.js';
import {Card} from '../../UI/Card/Card.jsx';
import {Text} from '../../UI/Text/Text.jsx'
import './MainCards.css'
export const MainCards =() =>{
    return(
        <>
        <main>
        <Text/>    
        <div className="main-card">
            {
                Coins.map(coin=>(
                    <Card coin={coin}/>
                    ))
                }
        </div>
        </main>
        </>
    )
}