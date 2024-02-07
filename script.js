const inputBox= document.getElementById("input-box");
const addButton= document.getElementById("button");
const ul= document.querySelector("ul");
var id=0;

addButton.addEventListener("click",()=>{
    if(inputBox.value ===''){
        alert("You must enter something to Add");
    }
    else{
        
        let li = document.createElement("li");
        li.innerHTML = '<input id="cb-'+id+ '" type="checkbox"></input><label for="cb-'+id+'">'+inputBox.value;
        ul.appendChild(li);

        let span= document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);

     //Adding checkbox functionality
        li.addEventListener("click",()=>{
        if(li.querySelector("input").checked){
            li.classList.add("checked");
        }
        else{
            li.classList.remove("checked")
        }

    //Adding Cross-Mark functionality
        span.addEventListener("click",()=>{
            span.parentElement.remove();
        })
    })
    id++;
    inputBox.value= '';
}
})

