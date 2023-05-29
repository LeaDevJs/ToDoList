const list=document.getElementById("list");
const cantItems=document.getElementById("cantItems");
const all=document.getElementById("all");
const active=document.getElementById("active");
const completed=document.getElementById("completed");
const bgPic=document.getElementById("bgPic");
const sun=document.getElementById("sun");
const moon=document.getElementById("moon");
const options=document.getElementById("options");
const body=document.querySelector("body");
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
        if (bgPic.classList.contains("bgPicLight")){
            cantElements+=1
        let input= document.getElementById("input");
        let li=document.createElement("li");
        li.classList.add("to-do-row");
        li.classList.add("to-do-row-light");
        li.classList.add("task");
        
        let check=document.createElement("div");
        check.classList.add("check");

        let img=document.createElement("img");
        img.setAttribute("src", "images/icon-check.svg");

        let paragraph=document.createElement("p");
        paragraph.classList.add("changeColor");
        paragraph.textContent=input.value;
        input.value="";
        check.appendChild(img);
        li.appendChild(check);
        li.appendChild(paragraph);
        li.onclick=handleCheck;
        list.appendChild(li);
        long();

        }else{

        cantElements+=1
        let input= document.getElementById("input");
        let li=document.createElement("li");
        li.classList.add("to-do-row");
        li.classList.add("task");
        
        let check=document.createElement("div");
        check.classList.add("check");

        let img=document.createElement("img");
        img.setAttribute("src", "images/icon-check.svg");

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
    completed.style.color="hsl(220, 98%, 61%)";
    completed.style.opacity="1";
    active.style.color="hsl(234, 39%, 85%)";
    active.style.opacity="0.4";
    all.style.color="hsl(234, 39%, 85%)";
    all.style.opacity="0.4";
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
    active.style.color="hsl(220, 98%, 61%)";
    active.style.opacity="1";
    all.style.color="hsl(234, 39%, 85%)";
    all.style.opacity="0.4";
    completed.style.color="hsl(234, 39%, 85%)";
    completed.style.opacity="0.4";
}
function handleAll(){
    let liElements = Array.from(list.children);
    liElements.forEach(function(liElement) {
        liElement.style.display="flex";
    });
    all.style.color="hsl(220, 98%, 61%)";
    all.style.opacity="1";
    active.style.color="hsl(234, 39%, 85%)";
    active.style.opacity="0.4";
    completed.style.color="hsl(234, 39%, 85%)";
    completed.style.opacity="0.4";
}
function handleDelete(){
    let liElements = Array.from(list.children);
    liElements.forEach(function(liElement) {
        let textElement = liElement.querySelector("p");
        if (textElement.classList.contains("ready")){
            liElement.remove()
        }
    });
    completed.style.color="hsl(234, 39%, 85%)";
    completed.style.opacity="0.4";
    active.style.color="hsl(234, 39%, 85%)";
    active.style.opacity="0.4";
    all.style.color="hsl(234, 39%, 85%)";
    all.style.opacity="0.4";
}
function handleChangeTheme(){
    let input= document.getElementById("input");
    if (!bgPic.classList.contains("bgPicLight")){
    let toDoRows=document.querySelectorAll(".to-do-row");
    bgPic.classList.add("bgPicLight");
    sun.style.display="none";
    moon.style.display="flex";
    input.style.backgroundColor="hsl(0, 0%, 98%)";
    input.classList.add("changePlaceholder");
    input.style.color="black";
    options.classList.add("optionsLight");
    body.style.backgroundColor="hsl(236, 33%, 92%)";
    for(let i=0;i<toDoRows.length; i++){
        toDoRows[i].classList.add("to-do-row-light");
        
    }
    for(let i=1;i<toDoRows.length-1; i++){
        let paragraph= toDoRows[i].querySelector("p");
        paragraph.classList.add("changeColor");
    }
    }else{
        let toDoRows=document.querySelectorAll(".to-do-row");
        bgPic.classList.remove("bgPicLight");
        sun.style.display="flex";
        moon.style.display="none";
        input.style.backgroundColor="hsl(235, 24%, 19%)";
        input.classList.remove("changePlaceholder");
        input.style.color="white";
        options.classList.remove("optionsLight");
        body.style.backgroundColor="hsl(235, 21%, 11%)";
        for(let i=0;i<toDoRows.length; i++){
            toDoRows[i].classList.remove("to-do-row-light");
        }
        for(let i=1;i<toDoRows.length-1; i++){
            let paragraph= toDoRows[i].querySelector("p");
            paragraph.classList.remove("changeColor");
        }
    }
}