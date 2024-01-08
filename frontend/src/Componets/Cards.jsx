import React from 'react'
import CardItem from './CardItem'
import './Cards.css'

function Cards() {
  return (
    <div className='cards'>
        <h1>Check these cards!</h1>
        <div className="cards__container">
            <div className="cards__wrapper">
                <ul className="cards__items">
                    <CardItem 
                    src='../../img-9.jpg'
                    text='Explore the untapped potintal of Kena Tilahun'
                    label='Biography'
                    path='/resume'
                    />
                    <CardItem 
                    src='../../img-2.jpg'
                    text='New undescovered areas within the mountains of Tilahun'
                    label='Life'
                    path='/resume'
                    />
                </ul>
                <ul className="cards__items">
                    <CardItem
                    src='../../img-3.jpg'
                    text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
                    label='Mystery'
                    path='/resume'
                    />
                    <CardItem
                    src='../../img-4.jpg'
                    text='Experience Football on Top of the Himilayan Mountains'
                    label='Adventure'
                    path='/history'
                    />
                    <CardItem
                    src='../../img-8.jpg'
                    text='Ride through the Sahara Desert on a guided camel tour'
                    label='Adrenaline'
                    path='/sign-up'
                    />
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Cards