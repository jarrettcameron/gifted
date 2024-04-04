import { baseURL } from "../env.js"

// @ts-ignore
const giphyApi = axios.create({
    baseURL: 'http://api.giphy.com/v1/gifs',
    timeout: 8000,
    params: {
        api_key: 'clC6dLvRvDX78H6jEztBsv8tGsdwodyy',
        rating: 'pg',
        limit: 9
    }
})

class GiphyService {
    constructor() {

    }

    async getGifs(query) {
        const response = await giphyApi.get(`search`, {
            params: {
                q: query
            }
        })
        return response.data.data
    }
}

export const giphyService = new GiphyService()