const inputBox = document.querySelector('.input-box');
const listContainer = document.querySelector('.list-cont');

function addTask(){
    if(inputBox.value ===''){
        alert("Don't be lazy add some Task to do 😴");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);

    }
    inputBox.value='';
    saveData();
}

listContainer.addEventListener("click",function(e){
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

function showList(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showList();