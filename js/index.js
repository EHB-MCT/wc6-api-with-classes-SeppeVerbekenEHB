"use strict";

import ComicRoute from './ComicRoute.js';

const app = {
    items: [],
    init() {
        this.getData();
    },
    getData() {
        fetch(`https://opendata.brussels.be/api/records/1.0/search/?dataset=comic-book-route&q=&rows=64`)
        .then(r => r.json())
        .then(r => r.records.forEach(e => 
            this.items.push(new ComicRoute(e.fields.annee,e.fields.photo.id,e.fields.personnage_s,e.fields.auteur_s))));
    },
    onSearch() {
    },
    render(message) {
    }

};
app.init();