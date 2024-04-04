import { Gift } from "../models/Gift.js";
import { giphyService } from "../services/GiphyService.js";
import { getFormData } from "../utils/FormHandler.js";
import { Pop } from "../utils/Pop.js";
import { setHTML } from "../utils/Writer.js";

export class GiphyController {
    constructor() {

    }

    selectGif(url) {
        // @ts-ignore
        document.querySelector('#url').value = url
    }

    async getGifs() {
        try {
            event.preventDefault()
            const formData = getFormData(event.target)
            const gifs = await giphyService.getGifs(formData.search)
            setHTML('giphy-results', gifs.map(gif => Gift.imageTemplate(gif.images.downsized.url)).join(''))
        } catch (error) {
            Pop.error(error)
        }
    }
}