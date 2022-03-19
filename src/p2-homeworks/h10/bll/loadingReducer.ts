const initState = {
    isLoading: false
}

type StateType = {
    isLoading: boolean
}

export const loadingReducer = (state: StateType = initState, action: ActionType): StateType => {
    switch (action.type) {
        case 'GET_LOADING': {

            return {isLoading: action.loading}
        }
        default:
            return state
    }
}

export const loadingAC = (loading: boolean) => {
    return {
        type: 'GET_LOADING',
        loading

    } as const
}

export type LoadingAcType = ReturnType<typeof loadingAC>

type ActionType = LoadingAcType