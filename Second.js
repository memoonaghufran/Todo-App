// Second_Sheet_JS
// Pop Up for skip button .............start.............

var skipButton = document.querySelector(".skip");
var remindLaterButton = document.querySelector(".remind-later");
var container3 = document.querySelector(".container3");

skipButton.addEventListener("click", function () {
    container3.style.display = "none";
});

remindLaterButton.addEventListener("click", function () {
    container3.style.display = "none";
});
// Pop Up for skip button .............start.............

// for login popup show/hide .........start..........

function togglepopup(id,action){
    var element =  document.getElementById(id)
    
    if(action ==='s'){
        
        element.classList.add("showlogin")
        var element =  document.getElementById('popup_id')
        element.classList.add("animate")
    }else if(action ==='h'){
        element.classList.remove    ("showlogin")
        var element =  document.getElementById('popup_id')
        element.classList.remove("animate")
    }
}
// for login popup show/ hide ...........end.............       


//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

    const addTaskButton = document.getElementById('addTask');
    const taskInput = document.getElementById('taskInput');
    const des = document.getElementById('description_input');
    const due_date = document.getElementById('duedate_input');
    const uncompletedTasksList = document.getElementById('uncompletedTasks');
    const completedTasksList = document.getElementById('completedTasks');

    // ............Function to create a task element...............
    function createTaskElement(taskText) {
        const li = document.createElement('li');
        li.className = 'list';
        const checkbox = document.createElement('input');

        checkbox.type = 'checkbox';
        checkbox.className = 'checkbox';
        const label = document.createElement('label');
        const label2 = document.createElement('label');
        label2.className = 'time';
        label.textContent = taskText;
        label2.textContent = ' ⏰ Today';

        const deleteButton = document.createElement('button'); // Create a delete button
        deleteButton.textContent = ' ➖ ';
        deleteButton.className = 'delete'; // Add a class for styling
        deleteButton.addEventListener('click', function () {
            deleteTask(li);
        });

        li.appendChild(checkbox);
        li.appendChild(label);
        li.appendChild(deleteButton); 
        li.appendChild(label2);
        // add del btn

        return li;
    }


    // ..............Function to delete a task
    function deleteTask(taskElement) {
        const parentList = taskElement.parentElement;
        parentList.removeChild(taskElement);
    }

    // .......Function to add task
    addTaskButton.addEventListener('click', function () {
        const taskText = taskInput.value.trim();

        if (taskText !== '') {
            const taskElement = createTaskElement(taskText);
            uncompletedTasksList.appendChild(taskElement);
            taskInput.value = '';
            des.value='';
            due_date.value='';
            togglepopup('login_box', 'h')
        }
    });

    // ...........for changes to the checkbox (task completion)
    uncompletedTasksList.addEventListener('change', function (event) {
        const taskElement = event.target.parentElement;

        if (event.target.checked) {
            completedTasksList.appendChild(taskElement);
        } else {
            uncompletedTasksList.appendChild(taskElement);
        }
    });

   


