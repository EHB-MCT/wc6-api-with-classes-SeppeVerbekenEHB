"use strict";

export default class ComicRoute{
    constructor(year, photoID, character, author){
        this._year = year;
        this._photoID = (photoID != null)?`https://opendata.brussels.be/explore/dataset/comic-book-route/files/${photoID}/300/`:photoID;
        this._character = character;
        this._author = author;
    }
    get htmlString() {
        return `<div class="item">
        <div>
          <div class="item-field">${this._character}</div>
          <div class="item-field">${this._author}</div>
          <div class="item-field">${this._year}</div>
        </div>
        
        <div>
          <img src="${this._photoID}" />
        </div>
        
      </div> `;
    }
}