let btns = document.querySelectorAll(".delete");

for(btn of btns){
    btn.addEventListener("click",(event)=>{
        let result = confirm("YOU SURE YOU WANT TO DELETE CHAT?");

        if(!result){
            event.preventDefault();
        }
    })
}