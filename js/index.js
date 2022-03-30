"use strict";

import ComicRoute from './ComicRoute.js';

const app = {
    items: [],
    init() {
        document.getElementById("searchForm").addEventListener("submit", function(event){
            event.preventDefault();
            app.render();
        });
        this.getData();
    },
    getData() {
        fetch(`https://opendata.brussels.be/api/records/1.0/search/?dataset=comic-book-route&q=&rows=64`)
        .then(r => r.json())
        .then(r => r.records.forEach(e => {
            let temp = (e.fields.photo != null)?e.fields.photo.id:null;
            console.log(temp);
            
            this.items.push(new ComicRoute(e.fields.annee,temp,e.fields.personnage_s,e.fields.auteur_s));
        }));

    },
    onSearch() {
    },
    render(message) {
        this.items.forEach(e =>{
            document.getElementById("list").innerHTML += e.htmlString;
        });
    }

};
app.init();