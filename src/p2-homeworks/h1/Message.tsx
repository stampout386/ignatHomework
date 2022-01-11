import React from 'react'
import s from './Message.module.css'


type MessagePropsType = {
    avatar: string
    name: string
    message: string
    time: string
}

function Message(props: MessagePropsType) {
    return (
        <div className={s.main}>
            <div className={s.avatar}>
                <img src={props.avatar} alt=""/>
                <div className={s.angle}>
                    <div className={s.in}></div>
                </div>
            </div>
            <div className={s.text}>
                <div><h3 className={s.name}>{props.name}</h3></div>
                <div className={s.message}>{props.message}</div>
                <div className={s.time}>{props.time}</div>
            </div>


        </div>
    )
}

export default Message
