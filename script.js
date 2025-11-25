let inputbox=document.getElementById("inp");
let addbtn=document.getElementById("btn");
let list=document.getElementById("list");

function additem(){
    let inputvalue=inputbox.value;

    let li=document.createElement("li");
    li.textContent=inputvalue;
    li.classList.add("list-item");

    let delbtn=document.createElement("button");
    delbtn.textContent="X";
    delbtn.classList.add("del-btn");

    delbtn.addEventListener("click",()=>{
        list.removeChild(li);
    });

    let updatebtn=document.createElement("button");
    updatebtn.textContent="update";
    updatebtn.classList.add("update-btn");
    
    updatebtn.addEventListener("click",()=>{
        addbtn.textContent="save";
        selectedItem=li;
    });
    

    li.appendChild(delbtn);
    list.appendChild(li);
    inputbox.value="";
    }
    btn.addEventListener("click",additem);

    
