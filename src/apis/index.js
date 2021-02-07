import axios from 'axios'

const plans365data = axios.create({
    baseURL: 'https://allplans-get.azurewebsites.net/api/allplan-get'
})

export const fetchPlansData = async () => {
    return await plans365data.get()
}