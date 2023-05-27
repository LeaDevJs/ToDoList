function handleCheck(e){
    let element=e.currentTarget;
    let textElement = element.querySelector("p")
    let checkElement = element.querySelector('.check');
    let checkElementImg= checkElement.querySelector("img");
    if(textElement.classList.contains("ready")){
        textElement.classList.remove("ready")
        checkElement.classList.remove("checkBack");
        checkElement.style.opacity="0.2";
        checkElementImg.style.display="none";
    }else{
        textElement.classList.add("ready");
        checkElement.classList.add("checkBack");
        checkElement.style.opacity="0.8";
        checkElementImg.style.display="flex";
    }
}