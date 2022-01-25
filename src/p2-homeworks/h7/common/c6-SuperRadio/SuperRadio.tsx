import React, {ChangeEvent, InputHTMLAttributes, DetailedHTMLProps} from 'react'
import s from './SuperRadio.module.css'

type DefaultRadioPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type SuperRadioPropsType = DefaultRadioPropsType & {
    options?: string[]
    onChangeOption?: (option: string) => void
}

const SuperRadio: React.FC<SuperRadioPropsType> = (
    {
        type, name,
        options, value,
        onChange, onChangeOption,
        ...restProps
    }
) => {
    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        onChange && onChange(e)
        onChangeOption &&  onChangeOption(e.currentTarget.value)
        // onChangeOption()
    }


    const mappedOptions: any[] = options ? options.map((item, i) => (
        <label key={name + '-' + i}>
            <input
                className={s.radio}
                type={'radio'}
                name={name}
                value={item}
                onChange={onChangeCallback}
                checked={item === value}
                // name, checked, value, onChange
            />
            {item}
        </label>
    )) : []

    return (
        <>
            {mappedOptions}
        </>
    )
}

export default SuperRadio
