import React from 'react'
import Affair from './Affair'
import {AffairType, DefaultAffairsType, FilterType} from './HW2'
import s from './Affairs.module.css'

type AffairsPropsType = {
    data: DefaultAffairsType
    setFilter: (value: FilterType) => void
    deleteAffairCallback: (_id: number) => void
}

function Affairs(props: AffairsPropsType) {
    const mappedAffairs = props.data.map((item: AffairType) => (
        <Affair
            key={item._id}
            affair={item}
            deleteAffairCallback={props.deleteAffairCallback}
        />
    ))

    const setAll = () => {
        props.setFilter('all')
    }
    const setHigh = () => {
        props.setFilter('high')
    }
    const setMiddle = () => {
        props.setFilter('middle')
    }
    const setLow = () => {
        props.setFilter('low')
    }

    return (
        <div className={s.container}>

            {mappedAffairs}
            <div className={s.buttons}>
                <button className={s.button} onClick={setAll}>All</button>
                <button className={s.button} onClick={setHigh}>High</button>
                <button className={s.button} onClick={setMiddle}>Middle</button>
                <button className={s.button} onClick={setLow}>Low</button>
            </div>

        </div>
    )
}

export default Affairs
