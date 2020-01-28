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
    
    //Changes the text of the large button from "Large Button" to "Learn More"
    button.textContent = "Learn More";

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

