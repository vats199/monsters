import React from "react";

import './card.styles.css'

export const Card = props => (
    <div className="card-container">
        <img src={`https://robohash.org/${props.monster.id + 100}?set=set2&size=200x200`} alt="monster" />
        <h2>{props.monster.name}</h2>
        <h4>{props.monster.email}</h4>
    </div>
)