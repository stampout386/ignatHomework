import axios, {AxiosResponse} from 'axios'

const instance = axios.create(
    {
        baseURL: 'https://neko-cafe-back.herokuapp.com/auth/',
    }
)

export const RequestAPI = {
    post(value: boolean) {
        return instance.post('test', {success: value})
    }
}


