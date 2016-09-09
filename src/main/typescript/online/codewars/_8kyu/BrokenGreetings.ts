/**
 * Created by Hey on 9 Sep 2016
 */

/*
 https://www.codewars.com/kata/broken-greetings/train/typescript

 Correct this code so that the greet function returns the expected value.

 export class Person {

 constructor(private name: string) { }

 public greet(otherName: string): string {
 return `Hi ${otherName}, my name is ${name}`;
 }

 }

 */

export class Person {

    private personName:string;

    constructor(private name:string) {
        this.personName = name;
    }

    public greet(otherName:string):string {
        var name:string = this.personName;
        return `Hi ${otherName}, my name is ${name}`;
    }
}

//noinspection JSUnusedLocalSymbols
class OnlineCleverApproach{

    //noinspection JSUnusedGlobalSymbols
    constructor(private name:string) {
    }

    //noinspection JSUnusedGlobalSymbols
    public greet(otherName:string):string {
        return `Hi ${otherName}, my name is ${this.name}`;
    }
}