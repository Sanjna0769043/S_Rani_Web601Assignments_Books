// import { Component } from '@angular/core';
import {Content} from './content-interface';

export class Contentlist implements Content {
    
    id: number = 1;
    title: string = "";
    description: string = "";
    creator: string = "";
    imgURL?:  string;
    type?:  string;
    tags?: string[];

//   A private array of type Content

    private contentArray:Array<Content>;
// A constructor that initially sets the array to be empty
    constructor(){
        this.contentArray = [];
    }
// A getter function that returns your Content array
public get contentOfArray(){
    return this.contentArray;
}
// An add function that adds 1 Content item to the end of the array
addContent(id: number, title: string, description: string,  creator: string, imgURL?:  string, type?:  string, tags?: string[]){
    this.contentArray.push({id: id, title: title, description: description,  creator: creator, imgURL:  imgURL, type:  type, tags: tags});
}
// A function that returns the number of items in the array
public get contentOfArrayLength(){
    return this.contentArray.length;
}
// A function that takes an input of an index of the array and returns a reader-friendly html
contentOfArrayItem(index:number){
    return this.contentArray[index];
}
// output of a Content item's properties at that index (title, description, creator, imgURL
// and type). Note that the imgURL should be used to generate an image tag. - Bonus
// refers to this function

//If an index outside of the array's range is entered, return an html error
//message from the function instead


}
