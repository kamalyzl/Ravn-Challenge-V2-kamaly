import React from "react";

export const Card = ({ data, onPress }) => (
    <div className='card' onClick={() => onPress(data)}>
        <div>
            <p><b>{data.name}</b> </p>
            <p className='description'>
                {data.species[0].name} - from {data.homeworld.name}
            </p>
        </div>
        <div>
            <img src={require('../assets/arrow-icon-right.png')} alt='icon' className='icon' />
        </div>
    </div>
)

