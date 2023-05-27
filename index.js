const list=document.getElementById("list");
const cantItems=document.getElementById("cantItems");
let cantElements=list.children.length;

function long(){
    cantItems.textContent=cantElements + " items left"
}
long();

function handleCheck(e){
    let element=e.currentTarget;
    let textElement = element.querySelector("p");
    let checkElement = element.querySelector('.check');
    let checkElementImg= checkElement.querySelector("img");
    if(textElement.classList.contains("ready")){
        textElement.classList.remove("ready")
        checkElement.classList.remove("checkBack");
        checkElement.style.opacity="0.2";
        checkElementImg.style.display="none";
        cantElements+=1;
    }else{
        textElement.classList.add("ready");
        checkElement.classList.add("checkBack");
        checkElement.style.opacity="0.8";
        checkElementImg.style.display="flex";
        cantElements-=1;
    }
    long();
}
function handleAdd(){
    if (input.value!==""){
        cantElements+=1
        let input= document.getElementById("input");
        let li=document.createElement("li");
        li.classList.add("to-do-row");
        li.classList.add("task");
        
        let check=document.createElement("div");
        check.classList.add("check");

        let img=document.createElement("img");
        img.setAttribute("src", "/images/icon-check.svg");

        let paragraph=document.createElement("p");
        paragraph.textContent=input.value;
        input.value="";
        check.appendChild(img);
        li.appendChild(check);
        li.appendChild(paragraph);
        li.onclick=handleCheck;
        list.appendChild(li);
        long();
    }
}
function handleKeyDown(e){
    let keyPress = e.keyCode || e.which
    if (keyPress == 13) {
        handleAdd();
    }
}
function handleCompleted(){
    let liElements = Array.from(list.children);
    liElements.forEach(function(liElement) {
        let textElement = liElement.querySelector("p");
        if (!textElement.classList.contains("ready")){
            liElement.style.display="none";
        }else{
            liElement.style.display="flex";
        }
    });
}
function handleActive(){
    let liElements = Array.from(list.children);
    liElements.forEach(function(liElement) {
        let textElement = liElement.querySelector("p");
        if (textElement.classList.contains("ready")){
            liElement.style.display="none";
        }else{
            liElement.style.display="flex";
        }
    });
}
function handleAll(){
    let liElements = Array.from(list.children);
    liElements.forEach(function(liElement) {
        liElement.style.display="flex";
    });
}
function handleDelete(){
    let liElements = Array.from(list.children);
    liElements.forEach(function(liElement) {
        let textElement = liElement.querySelector("p");
        if (textElement.classList.contains("ready")){
            liElement.remove()
        }
    });
}