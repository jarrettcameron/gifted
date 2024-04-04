export class Gift {
    constructor(data) {
        this.id = data.id
        this.tag = data.tag
        this.url = data.url
        this.opened = data.opened
        this.creatorId = data.creatorId
        this.profileIdsOpened = data.profileIdsOpened
    }

    get template() {
        return /*html*/`
        <div class="col-4 p-4">
            <div class="card shadow" onclick="app.GiftController.openGift('${this.id}')">
                <img src="${this.url}" alt="" class="card-img-top">
                <div class="card-body">
                    <h5 class="card-title">${this.tag}</h5>
                </div>
            </div>
        </div>
            `
    }

    static imageTemplate(url) {
        return /*html*/`
        <div class="col-4 mt-3">
            <img onclick="app.GiphyController.selectGif('${url}')" src="${url}" class="w-100 result-img" alt="">
        </div>
        `
    }
}