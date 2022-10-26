import './styles.css';
import music from './images/icon-music.svg';
import hero from './images/illustration-hero.svg'


function OrderSummary (){
    return (
       <div id="container">
            <img id='hero' alt='hero' src={hero}/>
            <section id='text'>
                <h1>Order Summary</h1>
                <p>You can now listen to millions of songs, audiobooks, and podcasts on any device anywhere you like!</p>
            </section>
            <section id='price'>
                    <div id='price2'>
                        <div>
                            <img id='music' alt='music' src={music}/>
                        </div>
                        <div>
                            <h3 className='divPrice'>Annual Plan</h3>
                            <p className='divPrice'>$59.99/year</p>
                        </div>
                        <div id='marginPrice'>
                            <p id='link'>Change</p>
                        </div>
                    </div>
            </section>
            <section id='buttons'>
                <button id='btn1'>Proceed to Payment</button>
                <button id='btn2'>Cancel Order</button>
            </section>
       </div> 
    )
}


export default OrderSummary;