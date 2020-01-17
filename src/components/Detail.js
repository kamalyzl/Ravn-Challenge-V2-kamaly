import React from "react";

export const Detail = ({ data }) => {
    return (
        <div className='list'>
            <h2>General Information</h2>
            <div>
                <p className='description'>{Object.keys(data)[2].toUpperCase()}</p>
                <b>{data.eyeColor}</b>
            </div>
            <div>
                <p className='description'>{Object.keys(data)[3].toUpperCase()}</p>
                <b>{data.hairColor}</b>
            </div>
            <div>
                <p className='description'>{Object.keys(data)[4].toUpperCase()}</p>
                <b>{data.skinColor}</b>
            </div>
            <div>
                <p className='description'>{Object.keys(data)[5].toUpperCase()}</p>
                <b>{data.birthYear}</b>
            </div>

            <h2>Vehicles</h2>
            {data.vehicles.map((item, index) => (<p key={index} className='description'>{item.name}</p>))}
        </div>
    );
}
