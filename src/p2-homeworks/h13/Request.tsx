import {RequestAPI} from "./RequestAPI";
import {useState} from "react";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";

export const Request = () => {
    const [value, setValue] = useState(false)
    const [response, setResponse] = useState('Нажми на кнопку, оптравь запрос на сервер')

    const changeCheckbox = () => {
        setValue(!value)
    }

    const sendRequest = () => {
        RequestAPI.post(value)
            .then(response => {

                setResponse(response.data.info)
            }).catch(error => {
            setResponse(error.response ? error.response.data.errorText : error.message);
        })

    }

    return (
        <div>
            <div>
                <div>
                    <SuperButton onClick={sendRequest}>Send</SuperButton>
                </div>
                <div>
                    <input type="checkbox" checked={value} onChange={changeCheckbox}/>
                </div>
                <div>
                    {response}
                </div>
            </div>
        </div>
    )
}