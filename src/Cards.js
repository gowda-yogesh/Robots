import React from "react";
import "./Cards.css";

const Cards = (prop) => {
    return (

        <div className="info">
            <img className="images" alt="Sorry Not Found" src={`https://robohash.org/${prop.id}?200*200`} />
            <div>
                <h2>{prop.name}</h2>
                <h3>{prop.email}</h3>
            </div>
        </div>

    )
}

export default Cards;