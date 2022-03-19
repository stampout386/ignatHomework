const initState = {
    loading: false
}

type StateType = {
    loading: boolean
}

export const loadingReducer = (state: StateType = initState, action: ActionType): StateType => {
    switch (action.type) {
        case 'GET_LOADING': {

            return {loading: action.loading}
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