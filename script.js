const inputbox = document.getElementById("inputbox");
const listbox = document.getElementById("listbox");

function addtask(){
    if (inputbox.value === '') {
        alert("You didn't write anything");
    } else {
        let li = document.createElement("li");
        li.textContent = inputbox.value; 
        listbox.appendChild(li);
        inputbox.value = ''; 
        var deletebtn  = document.createElement("span");
        deletebtn.textContent = "\u00d7"
        deletebtn.className = "deletebtn"
        li.appendChild(deletebtn)
        
    }
    savedata()
}

    listbox.addEventListener("click", function(u){
        if(u.target.tagName === "LI"){
            u.target.classList.toggle("checked")
            savedata();

        }else if (u.target.className === "deletebtn"){
            u.target.parentElement.remove();
            savedata();
        }
    }, false)

    function savedata(){
        localStorage.setItem("data",listbox.innerHTML)
    }
    function showdata(){
        listbox.innerHTML = localStorage.getItem("data");
    }
    showdata();
    

