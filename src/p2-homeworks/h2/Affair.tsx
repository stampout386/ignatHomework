import React from 'react'
import {AffairType} from "./HW2";
import s from './Affairs.module.css'
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";

type AffairPropsType = {
    affair: AffairType
    deleteAffairCallback: (_id: number) => void// need to fix any
}

function Affair(props: AffairPropsType) {
    let spanStyle = {
        marginLeft: '30px',
        display: 'inline-block'
    }
    let buttonStyle = {
        marginLeft: '15px',
        display: 'inline-block',
        marginTop: '15px',
        paddingBottom: '20px'
    }

    let spanStyle2 = {
        marginLeft: '30px',
        display: 'inline-block',
        paddingTop: '20px'
    }

    return (
        <div className={s.affair}>
            <span style={spanStyle}><h4>{props.affair.name}</h4></span>
            <span style={spanStyle2}>{props.affair.priority}</span>
            <SuperButton style={buttonStyle}
                         onClick={() => props.deleteAffairCallback(props.affair._id)}>X
            </SuperButton>
        </div>
    )
}

export default Affair
