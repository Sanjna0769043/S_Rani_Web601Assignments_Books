// import { Component } from '@angular/core';
import { Content } from './content-interface';

export class Contentlist implements Content {

    id: number = 1;
    title: string = "";
    description: string = "";
    prize: string = "";
    imgURL?: string;
    type?: string;
    tags?: string[];


    private contentArray: Array<Content>;

    constructor() {
        this.contentArray = [];
    }

    public get contentOfArray() {
        return this.contentArray;
    }

    addContent(id: number, title: string, description: string, prize: string, imgURL?: string, type?: string, tags?: string[]) {
        this.contentArray.push({ id: id, title: title, description: description, prize: prize, imgURL: imgURL, type: type, tags: tags });
    }

    public get contentOfArrayLength() {
        return this.contentArray.length;
    }
    
    contentOfArrayItem(index: number) {
        
            if (index >= this.contentOfArrayLength || index < 0)
            {
              return "<div>Something went terribly wrong</div>"
            }
            let itemAtIndex = this.contentArray[index]
            return `<div class="title">${itemAtIndex.title}</div>
                    <div class="description">${itemAtIndex.description}</div>
                    <div class="creator">${itemAtIndex.prize}</div>
                    <div class="image"><img src="${itemAtIndex.imgURL}" width="200"></div>
                    <div class="type">${itemAtIndex.type}</div>`;
          
        

        // return this.contentArray[index];
    }



}
