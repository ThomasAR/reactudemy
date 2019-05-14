import React from 'react';

const person = (props) => {
    return (
        <div>
            <p>Name: {props.name}</p>
            <p>Children: {props.children}</p>
        </div>
        )
}

export default person;