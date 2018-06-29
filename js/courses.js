'use strict';

let itemCount = 0;

let totalAmount = [0];
let theList = [];

$("#amountInCart").text(itemCount);

function getSum(total, num){
    return total + num;
}


// let duration = [
//     0, 0, 0, 3, 3, 3, (3*24), (3*24), (3*24), 3, (6*24), (6*24), (6*24), (6*24), (6*24), (5*24), (3*24), (5*24), (5*24),  (1*24), (1*24), (1*24),  (2*24), (1*24), (1*24)
// ];


let course = new Array; 
let remove_btn = new Array;
let courseText = new Array; 
let iCourse = new Array;
let coursePrice = new Array;

for (let n = 0; n <= 24; n++) {
    course[n] = { 
        name : $(".title" + n).html(), 
        price: $(".amt" + n).html(),
     }
    course[n].price = Number(course[n].price);
    remove_btn[n] = "<button id='remove_course" + n + "'>X</button>";
    courseText[n] =  course[n].name + remove_btn[n] + "<br>";

    $("#course_btn" + n).click(function(){
        iCourse[n] = theList.indexOf(courseText[n]);
        coursePrice[n] = totalAmount.indexOf(course[n].price);
        totalAmount.push(course[n-1].price);
        getTotal();
        itemCount++;
        $("#amountInCart").text(itemCount);
        theList.push(courseText[n-1]);
        checkArray();
    });
    
    $("body").on('click', '#remove_course' + (n+1), function(){
        let userRemove = confirm("Do you want to remove this course?");
        if(userRemove == true){
            iCourse[n] = theList.indexOf(courseText[n]);
            coursePrice[n] = totalAmount.indexOf(course[n].price);
            totalAmount.splice(coursePrice[n], 1);
            getTotal();
            itemCount--;
            $("#amountInCart").text(itemCount);
            theList.splice(iCourse[n], 1);
            checkArray();
        }
    })
}

let cartListText = document.getElementById("cartItemList");

// This checks if there's a value in the array
function checkArray() {
    cartListText.innerHTML = "";
    for (let i in theList){
        cartListText.innerHTML += theList[i];
    }
}

function getTotal() {
    $("#cartTotal").html("Total : " + totalAmount.reduce(getSum))
}