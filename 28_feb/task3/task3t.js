"use strict";
// --------------------------------------------------enum--------------------------------------------- 
//enum is used to store data inside it and is used when we want to restrict users choice
//it is a data structure of constant length that holds a set of constant values
//Enums are useful when setting properties or values that can only be a certain number of possible values.
exports.__esModule = true;
//const enum seatchoice{      //if we put const before enum the value of aisle will be given to s only in js
var seatchoice;
(function (seatchoice) {
    seatchoice[seatchoice["AISLE"] = 9] = "AISLE";
    seatchoice[seatchoice["WINDOW"] = 67] = "WINDOW";
    seatchoice[seatchoice["FORTH"] = 68] = "FORTH";
    seatchoice["MIDDLE"] = "middle";
})(seatchoice || (seatchoice = {}));
var s = seatchoice.MIDDLE; //gets the value of middle
console.log(s);
var market;
(function (market) {
    market["shampoo"] = "s";
    market[market["conditioner"] = 90] = "conditioner";
    market[market["bodysoap"] = 91] = "bodysoap";
    market[market["facewash"] = 92] = "facewash";
})(market || (market = {}));
// --------------------------creating object to get properties of interface--------------------- 
var u1 = {
    dbid: 634875, name: "nancy", id: 63875,
    strtTrail: function () {
        return "strted";
    },
    getcoupon: function (name) {
        return name;
    },
    gittoken: "mytoken"
};
console.log(u1.strtTrail());
console.log(u1.getcoupon("coupons")); //the value we are passing here is going to getcoupon function
var u2 = {
    dbid: 634875, name: "yash", id: 63875,
    strtTrail: function () {
        return "strted with second interface";
    },
    getcoupon: function (name) {
        return name;
    },
    gittoken: "mytoken2"
};
console.log(u2.strtTrail());
console.log(u2.getcoupon("coupons"));
