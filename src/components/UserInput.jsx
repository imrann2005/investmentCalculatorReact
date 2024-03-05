import React, { useState } from 'react'

export default function UserInput({ title, id, onChange, value }) {

    return (
        <div >
            <label htmlFor={id} >{title}</label>
            <input type="number" id={id} onChange={(event) => onChange(event)} name={title} value={value} required />

        </div>
    )
}
