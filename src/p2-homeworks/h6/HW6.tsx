import React, {useState} from 'react'
import SuperEditableSpan from './common/c4-SuperEditableSpan/SuperEditableSpan'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {restoreState, saveState} from './localStorage/localStorage'
import s from './common/c4-SuperEditableSpan/SuperEditableSpan.module.css'

function HW6() {
    const [value, setValue] = useState<string>('')

    const save = () => {
        setValue(value)
        saveState<string>('editable-span-value', value)
    }
    const restore = () => {
        let newValue = restoreState('editable-span-value', value);
        setValue(newValue);
    }

    return (
        <div>
            homeworks 6

            {/*should work (должно работать)*/}
            <div className={s.homeworkSix}>

                <SuperEditableSpan
                    value={value}
                    onChangeText={setValue}
                    spanProps={{children: value ? undefined : 'enter text...'}}
                />
                <SuperButton onClick={save}>save</SuperButton>
                <SuperButton onClick={restore}>restore</SuperButton>
            </div>
            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperEditableSpan/>*/}
            <hr/>
        </div>
    )
}

export default HW6
