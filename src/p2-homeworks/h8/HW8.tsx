import React, {useState} from 'react'
import {homeWorkReducer} from './bll/homeWorkReducer'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {ArrType} from "../h7/HW7";


export type OneUserType = {
    _id: number
    name: string
    age: number
}
export type UsersType = Array<OneUserType>

const initialPeople: UsersType = [
    {_id: 0, name: 'Кот', age: 3},
    {_id: 1, name: 'Александр', age: 66},
    {_id: 2, name: 'Коля', age: 16},
    {_id: 3, name: 'Виктор', age: 44},
    {_id: 4, name: 'Дмитрий', age: 40},
    {_id: 5, name: 'Ирина', age: 55},
]

function HW8() {
    const [people, setPeople] = useState<UsersType>(initialPeople) // need to fix any

    // need to fix any
    const finalPeople = people.map((p: OneUserType) => (
        <div key={p._id}>
            {p.name} {p.age}
        </div>
    ))

    const sortUp = () => setPeople(homeWorkReducer(people, {type: 'sortUp', payload: 'up'}))
    const sortDown = () => setPeople(homeWorkReducer(people, {type: 'sortDown', payload: 'down'}))
    const CheckEighteen = () => setPeople(homeWorkReducer(people, {type: 'sortCheck', payload: '18'}))

    console.log(people)

    return (
        <div>
            <hr/>
            homeworks 8

            {/*should work (должно работать)*/}
            {finalPeople}

            <div>
                <SuperButton onClick={sortUp}>sort up</SuperButton>
                <SuperButton onClick={sortDown}>sort down</SuperButton>
                <SuperButton onClick={CheckEighteen}>check 18</SuperButton>
            </div>
            {/*<div><SuperButton onClick={sortUp}>sort down</SuperButton></div>*/}
            {/*<div><SuperButton onClick={sortUp}>check 18</SuperButton></div>*/}

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativePeople/>*/}
            <hr/>
        </div>
    )
}

export default HW8
