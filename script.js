const inputBox= document.getElementById("input-box");
const addButton= document.getElementById("button");
const ul= document.querySelector("ul");
var id=0;

addButton.addEventListener("click",()=>{
    if(inputBox.value ===''){
        alert("You must enter something to Add");
    }
    else{ 
        let li = document.createElement("li"); //creating a Li elem
        li.innerHTML = '<input id="cb-'+id+ '" type="checkbox"></input><label for="cb-'+id+'">'+inputBox.value;
        ul.appendChild(li); //giving Li to the parent.

        let span= document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
        id++;
 }
    updateTaskList();
});

  /*During the process of saving/Loading( 'THEREBY SAVING THE LISTENERS DATA o the li's TOO' !!!  ) the Li items, whilst loading them back to the DOM --->i.e;
       when we refresh the page, 
         we may witness unexpected behaviour as the listeners on to the Li items would be duplicated by then.
     So insead of attaching them individually, we just have to add a listener to the parent(i.e = ul) without disturbing our Li's . And get our target by using "event delegation". */

     /*The Delegate here is parent element :ul. we retrieve the info of the child element that tiggered the event through
       target Property of the event object that was created during when that particular event is triggered.*/


     //Adding checkbox functionality with "event delegation".
 ul.addEventListener("click",(e)=>{
            // console.log(e);
            const target = e.target;
            const Li = target.parentElement;
        if(target.tagName === "INPUT"){
            if(target.checked){
                Li.classList.add("checked");
                updateTaskList();
            }
            else{
                Li.classList.remove("checked");
                updateTaskList();
            }    
        }
        
         //Adding Cross-Mark functionality
        else if(e.target.tagName=== "SPAN"){
            target.parentElement.remove();
            updateTaskList();
        }
      });

    function updateTaskList(){
        localStorage.setItem("tasks", ul.innerHTML);
    }
    function loadTaskList(){
        ul.innerHTML = localStorage.getItem("tasks");
    }
inputBox.value= '';
loadTaskList();


