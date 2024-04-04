import { AppState } from "../AppState.js"
import { Gift } from "../models/Gift.js"
import { api } from "./AxiosService.js"

class GiftService {
    constructor() {

    }

    async createGift(formData) {
        const response = await api.post('api/gifts', formData)
        AppState.gifts.push(new Gift(response.data))
    }

    async getGifts() {
        const response = await api.get('api/gifts')
        AppState.gifts = response.data.map(gift => new Gift(gift))
    }

    async openGift(id) {
        const gift = AppState.gifts.find(foundGift => foundGift.id == id)
        if (gift.opened) return
        gift.opened = true
        const response = await api.put(`api/gifts/${id}`, gift)
        gift.profileIdsOpened = response.data.profileIdsOpened
        gift.url = response.data.url
        AppState.emit('gifts')
    }
}

export const giftService = new GiftService()