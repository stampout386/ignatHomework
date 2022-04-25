type InititalStateType = {
    theme: string
}

let initialState = {
    theme: 'some'
}

const CHANGE_THEME = 'CHANGE_THEME'

export const themeReducer = (state: InititalStateType = initialState, action: ActionType): InititalStateType => {
    switch (action.type) {
        case "CHANGE_THEME": {
            return {...state, theme: action.theme}
        }
        default :
            return state
    }
}


export const changeThemeAC = (theme: string) => {
    return {
        type: CHANGE_THEME,
        theme
    } as const
}

type ActionType = ReturnType<typeof changeThemeAC>