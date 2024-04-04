import { AppState } from "../AppState.js";
import { giftService } from "../services/GiftService.js";
import { getFormData } from "../utils/FormHandler.js";
import { Pop } from "../utils/Pop.js";
import { setHTML } from "../utils/Writer.js";

export class GiftController {
    constructor() {
        AppState.on('gifts', this.drawGifts)
        AppState.on('account', this.getGifts)
    }

    drawGifts() {
        let giftContent = ''
        AppState.gifts.forEach(gift => giftContent += gift.template)
        setHTML('gifts', giftContent)
    }

    async getGifts() {
        try {
            await giftService.getGifts()
        } catch (error) {
            Pop.error(error)
        }
    }

    async openGift(id) {
        try {
            await giftService.openGift(id)
        } catch (error) {
            Pop.error(error)
        }
    }

    async createGift() {
        event.preventDefault()
        try {
            const formData = getFormData(event.target)
            await giftService.createGift(formData)
        } catch (error) {
            Pop.error('Could not create gift!')
        }
        // @ts-ignore
        event.target.reset()
    }
}