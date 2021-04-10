let button=document.getElementById("button");
let newItem=document.getElementById("new-item");
let press= document.querySelectorAll(".press");
button.addEventListener("click", addListAfterClick);
// press.addEventListener("keydown", addListAfterKeypress);
// newItem.addEventListener("keydown", addListAfterKeypress);

press.forEach(item => {
  item.addEventListener('keydown', addListAfterKeypress)
})

function newItemLength(){
    return newItem.value.length;
}
function amountLength(){
    return amount.value.length;
}

function createItemList(){
    let newItem=document.getElementById("new-item").value;
    let date=document.getElementById("date").value;
    let amount= document.getElementById("amount").value;

    let tableBody=document.getElementById("customTable");
    
    let newRow= tableBody.insertRow(1)
    let cell1 = newRow.insertCell(0);
    let cell2 = newRow.insertCell(1);
    let cell3 = newRow.insertCell(2);
    let cell4 = newRow.insertCell(3);
    
    cell1.appendChild(document.createTextNode(newItem));
    cell2.appendChild(document.createTextNode(date));
    cell3.appendChild(document.createTextNode(amount));
    newItem=document.getElementById("new-item").value="";
    date=document.getElementById("date").value="";
    amount= document.getElementById("amount").value="";


    let delBtn=document.createElement("button");
    let txt=document.createTextNode("Remove");
    delBtn.className="delBtn";
    delBtn.appendChild(txt);
    cell4.appendChild(delBtn);
    delBtn.onclick=removeParent;
}
function removeParent(event){
    event.target.closest("tr").remove();
}

function addListAfterClick (){
    if(newItemLength()>0 && amountLength()>0){
    createItemList();
 } else {
     alert ("Please fill all form")
 }
}
function addListAfterKeypress(event){
    if(newItemLength()>0 && newItemLength()>0 && event.key==='Enter'){
    createItemList()
    } 
}


