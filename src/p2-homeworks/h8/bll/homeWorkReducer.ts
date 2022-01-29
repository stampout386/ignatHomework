import {OneUserType, UsersType} from "../HW8";

type ActionType = {
    type: string
    payload: any
}

export const homeWorkReducer = (state: UsersType, action: ActionType): UsersType => {
    switch (action.type) {
        case 'sort': {
            if (action.payload === 'up') {
                const abc = (x: OneUserType, y: OneUserType) => {
                    if (x.name < y.name) {
                        return -1;
                    }
                    if (x.name > y.name) {
                        return 1;
                    }
                    return 0;
                }

                return [...state.sort(abc)]
            }
            if (action.payload === 'down') {
                const abc = (x: OneUserType, y: OneUserType) => {
                    if (x.name > y.name) {
                        return -1;
                    }
                    if (x.name < y.name) {
                        return 1;
                    }
                    return 0;
                }

                return [...state.sort(abc)]
            } else {
                return state
            }

        }

        case 'check':
            return [...state.filter((item) => item.age > action.payload)]
        default:
            return state
    }
}