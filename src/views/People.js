import React, { Fragment, useState } from "react";
import { useQuery } from "@apollo/react-hooks";
import { Card } from '../components/card'
import { Detail } from '../components/Detail'
import { STAR_WARS_PEOPLE } from '../querys/star-wars'
import '../css/people.css';

export default function App() {
    const [detail, setDetail] = useState(null);
    const { loading: loadingFilms, error: errorFilm, data } = useQuery(
        STAR_WARS_PEOPLE
    );

    if (loadingFilms) return <p>Loading...</p>;
    if (errorFilm) return <p className='error'>Failed to Load Data: {errorFilm.message}</p>;

    const peoples = data.allPersons.map(people => (
        <Card
            key={people.id}
            data={people}
            onPress={(data) => {
                setDetail(data)
            }}
        />
    ));
    return (
        <div>
            <header>
                <h1>Ravn Star Wars Registry</h1>
            </header>
            <div className='container'>
                <div className='container-section'>
                    <Fragment >
                        {peoples}
                    </Fragment>
                </div>
                <div className='container-detail'>
                    {detail ? <Detail data={detail} /> : null}
                </div>
            </div>
        </div>

    );
}
