/*
    Student Name  : Steven Mitchell
    StudentID     : 100506443
    Date Completed: 2020-01-28
*/

"use strict";
//IIFE - Immediately Invoked Function Expression
// mean? -> anonymous self-executing function

let app;
(function(app){
    //A variable called button that holds the contents of the tag with an ID of "largeButton"
    let button = document.getElementById("largeButton");
    //A variable called h3 that holds a newly created h3 tag
    let h3 = document.createElement("h3");
    //A variable called div that holds the div tag with an ID of "contentArea" and all of it's elements
    let div = document.getElementById("contentArea");
    //A variable called firstP that holds the p tag with an ID of "firstParagraph"
    let firstP = document.getElementById("firstParagraph");
    
    //Changes the text of the large button from "Large Button" to "Learn More"
    button.textContent = "Learn More";

    //Gives the newly created h3 tag text content of (my) first name and student number
    h3.textContent = "Name: Steven Mitchell 100506443";
    //Inserts the newly created h3 tag with its text content before the large button
    div.insertBefore(h3, div.lastElementChild);

    //Changes the text content of the p tag with an ID of firstParagraph
    firstP.textContent = "JavaScript is a prototype-based language, and every object in JavaScript has a hidden internal property called Prototype that can be used to extend object properties and methods.";

    //
    firstP.style.display = "none";

    //console.log(button);

    // Declare Function Variables here...
    console.log("%cDeclaring Variables", "color: red;")

    /**
     * Variable initialization in this function
     *
     */
    function Start()
    {


        Main();
    }

    /**
     * Main Program entry point is here
     *
     */
    function Main()
    {

    }



    window.addEventListener("load", Start);
})(app || (app = {}));

