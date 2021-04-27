import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom';
import {data} from '../data'

const Person = () => {

    const [name, setName] = useState('default name')

    // console.log(useParams());

    const {id} = useParams();

    useEffect(() => {
        const newPerson = data.find((person)=>person.id === parseInt(id));
        setName(newPerson.name)
    }, [])

    // parseInt() str to int in js

    return (
        <div>
            <h1>{name}</h1>
            <Link to="/people" className="btn">
            Back To People
            </Link>
        </div>
    )
}

export default Person
