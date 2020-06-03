import React from 'react'
import Card from './Card'


const CardList = ({ robots }) => {

    const robotsCards = robots.map((robot) => {
        return (
            <Card name={robot.name} email={robot.email} id={robot.id}></Card>
        )
    })

    return (
        <div>
            {robotsCards}
        </div>
    )
}

export default CardList 