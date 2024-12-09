// Step 1: Create all the HTML elements dynamically using createElement
const body = document.body;

// Create a heading
const heading = document.createElement('h1');
heading.textContent = 'My TODO List';
body.appendChild(heading);

// Create the form
const form = document.createElement('form');
form.setAttribute('id', 'task-form');
body.appendChild(form);

// Create the input field
const newTask = document.createElement('input');
newTask.setAttribute('type', 'text');
newTask.setAttribute('id', 'new-task');
newTask.setAttribute('placeholder', 'Enter a new task');
newTask.setAttribute('required', true);
form.appendChild(newTask);

// Create the submit button
const submit = document.createElement('button');
submit.setAttribute('type', 'submit');
submit.setAttribute('id', 'submit');
submit.disabled = true; // Disable the button initially
submit.textContent = 'Add Task';
form.appendChild(submit);

// Create an unordered list to hold tasks
const taskList = document.createElement('ul');
taskList.setAttribute('id', 'task-list');
body.appendChild(taskList);

// Step 2: Disable the submit button by default
submit.disabled = true;

// Step 3: Listen for input to be typed into the input field
newTask.addEventListener('input', () => {
    // Enable submit button if the input is not empty, otherwise disable it
    submit.disabled = newTask.value.trim() === '';
});

// Step 4: Listen for submission of the form
form.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent form from reloading the page

    // Step 5: Get the user's input for the new task
    const taskText = newTask.value.trim();

    if (taskText !== '') {
        // Step 6: Create a new list item and add the task to it
        const listItem = document.createElement('li');
        listItem.textContent = taskText;

        // Step 7: Add new list item to the unordered list
        taskList.appendChild(listItem);

        // Clear the input field
        newTask.value = '';
        
        // Disable the submit button again
        submit.disabled = true;
    }

    // Prevent form submission default behavior
    return false;
});
