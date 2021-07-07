import React from 'react';
import CardItem from './CardItem';
import './Cards.css'

function Cards() {
    return (
        <div className="cards">
            <h1>Check out these Epic Destinations!</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem
                         src="http://localhost:3000/images/img-9.jpg"
                         text="Explore the hidden waterfall deep inside Bhimashankar"
                         label="Adventure"
                         path='/services' />

                        <CardItem
                         src="http://localhost:3000/images/img-2.jpg"
                         text="Explore the hidden Beaches of GOA in a private cruise"
                         label="Luxury"
                         path='/services' />
                    </ul>
                    <ul className="cards__items">
                        <CardItem
                         src="http://localhost:3000/images/img-3.jpg"
                         text="Set sail in the Arabic Sea visiting Uncharted waters"
                         label="Mystery"
                         path='/services' />

                        <CardItem
                         src="http://localhost:3000/images/img-4.jpg"
                         text="Exprience Football on top of the Himalayan mountains"
                         label="Fun"
                         path='/services' />
                        <CardItem
                         src="http://localhost:3000/images/img-8.jpg"
                         text="Ride through the Sahara Desert on a guided camel tour"
                         label="Adventure"
                         path='/services' />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
