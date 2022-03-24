"use strict";

export default class ComicRoute{
    constructor(year, photoID, character, author){
        this._year = year;
        this._photoID = `https://opendata.brussels.be/explore/dataset/comic-book-route/files/${photoID}/300/`;
        this._character = character;
        this._author = author;
    }
    get htmlString() {
        return;
    }
}