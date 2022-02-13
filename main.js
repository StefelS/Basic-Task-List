let addButton = document.getElementById('addButton'); //store this variable as the button we created 
let list = document.getElementById('list');
let input = document.getElementById('inputTask');
let keyboard = document.querySelector(".keyboard")

addButton.addEventListener("click", function(){ // listen for when the button is clicked
    let listItem = document.createElement('p');// create a new <p> tag in document if clicked
    listItem.classList.add("items-style"); //make look like list item 
    listItem.innerText = input.value;//add text to <p> </p> tag
    list.appendChild(listItem);// add everything to html
    input.value =  "";// clear input after added new item
    listItem.addEventListener("click", function(){
        list.removeChild(listItem) //delete from list
    })
});



