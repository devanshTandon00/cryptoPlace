import React from 'react';
import './Label.css'

export default function Label(props) {
    return (
        <label className='Label'>
            {props.title}
        </label>
    );
}
