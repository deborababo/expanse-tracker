let button=document.getElementById("button");
// let tableBody=document.getElementById("tbody");
button.addEventListener("click", createItemList);
// let row=1;


function createItemList(){
    let newItem=document.getElementById("new-item").value;
    let date=document.getElementById("date").value;
    let amount= document.getElementById("amount").value;
    
    if(!newItem || !date || !amount){
        alert("Please fill all the boxes");
        return;
    }
    let tableBody=document.getElementById("customTable");
    
    let newRow= tableBody.insertRow(1)
    let cell1 = newRow.insertCell(0);
    let cell2 = newRow.insertCell(1);
    let cell3 = newRow.insertCell(2);
    let cell4 = newRow.insertCell(3);

    cell1.innerHTML=newItem;
    cell2.innerHTML=date;
    cell3.innerHTML=amount;
}





// create an expense
// function newItemLength (){
//     return newItem.value.length;
// }

// function createItemList(){
//     let row=document.createElement("tr");
//     let column1 = document.createElement("td");
//     let column2 = document.createElement("td");
//     let column3 = document.createElement("td");
//     column1.appendChild(document.createTextNode(newItem.value));
//     column2.appendChild(document.createTextNode(date.value));
//     column2.appendChild(document.createTextNode(amount.value));
//    row.appendChild(column1);
//    row.appendChild(column2);
//    row.appendChild(column3);

//    tableBody.appendChild.row;


// }

// function amountLength (){
//     return amount.value.length;
// }

// function createItemList(){
// let table=tableBody;
// let row=table.insertRow();
// let cell1 = row.insertCell(0);
// let cell2 = row.insertCell(1);
// let cell3 = row.insertCell(2);

// cell1.appendChild(document.createTextNode(newItem.value));;
// cell2.appendChild(document.createTextNode(date.value));
// cell3.appendChild(document.createTextNode(amount.value));
// tableBody.appendChild(row);
//  newItem.value=""; 
// }

// function addExpenseAfterClick (){
// if(newItemLength>0){
//     createItemList()
// }
// }

