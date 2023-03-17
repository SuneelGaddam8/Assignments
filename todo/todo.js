document.querySelector('#add-btn').onclick = function(){
    if(document.querySelector('#input-group input').value.length == 0){
        alert("Please Enter Task Name!!!!")
    }

    else{
        document.querySelector('#task-list').innerHTML += `
            <div class="task">
            <input type="checkbox" class="delete" value="remove">
                <span id="taskname">
                ${document.querySelector('#input-group input').value}
                </span>
            </div>
        `;

        var current_tasks = document.querySelectorAll(".delete");
        for(var i=0; i<current_tasks.length; i++){
            current_tasks[i].onclick =function(){
                setTimeout(()=>{
                this.parentNode.remove();
                },2000);
            
            }
        }


    }document.querySelector('#input-group input').value="";
}