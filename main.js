const inputs = document.querySelectorAll(".input");
function focusfun(){
    let parent = this.parentNode.parentNode;
    parent.classList.add("focus");
}
function blurfun(){
    let parent = this.parentNode.parentNode;
    if(this.value == ""){
    parent.classList.remove("focus");
    }
}
inputs.forEach(input => {
    input.addEventListener("focus" ,focusfun);
    input.addEventListener("blur" ,blurfun);
});
