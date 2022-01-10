import React from 'react'
import {AffairType} from "./HW2";
import s from './Affairs.module.css'

type AffairPropsType = {
    affair: AffairType
    deleteAffairCallback: (_id: number) => void// need to fix any
}

function Affair(props: AffairPropsType) {
    let spanStyle = {
        marginLeft: '10px',
        display: 'inline-block'
    }
    let buttonStyle = {
        marginLeft: '10px',
        display: 'inline-block',

    }

    return (
        <div className={s.affair}>
            <span style={spanStyle}><h4>{props.affair.name}</h4></span>
            <span style={spanStyle}>{props.affair.priority}</span>
            <button style={buttonStyle} onClick={() => props.deleteAffairCallback(props.affair._id)}>X</button>
        </div>
    )
}

export default Affair
