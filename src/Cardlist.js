import React from "react";
import Card from "./Cards.js";
import "./CardList.css";

const Cardlist = ({ roboList }) => {

    // To check is error boundry is working or no .
    // if (true) {
    //     throw new Error(" bye ");
    // }
    return (
        <div className="for-flex">

            {roboList.map((r, i) => {
                return (<Card key={r.id} name={r.name} id={r.id} email={r.email} />)
            })
            }

        </div>

    )
}

export default Cardlist;