// Task 2: Adding Employee Cards Dynamically

function addEmployeeCard(name, position) {
    const card = document.createElement('div');
    card.setAttribute('class', 'employee-card'); // creates div element for employee
  
    const heading = document.createElement('h3'); // heading for employee's name
    heading.textContent = name;const paragraph = document.createElement('p'); // shows employee's position
    paragraph.textContent = position;
  
    const removeButton = document.createElement('button'); // creates a remove button
    removeButton.textContent = 'Remove';
    removeButton.classList.add('remove-btn');
  
    const editButton = document.createElement('button'); // creates an edit button
    editButton.textContent = 'Edit';
    editButton.classList.add('edit-btn');
  
    card.appendChild(heading);
    card.appendChild(paragraph);
    card.appendChild(editButton);
    card.appendChild(removeButton); // puts all elements on employee card 
  
    document.getElementById('employeeList').appendChild(card);
  }

  // Task 3: Converting NodeLists to Arrays for Bulk Updates

  function bulkUpdateEmployeeCards() {
    const cards = document.querySelectorAll('.employee-card'); // selects all employee cards
    const cardArray = Array.from(cards);
  
    cardArray.forEach(card => {
        card.classList.add('highlight');
    });
  }
  
  // Task 4: Implementing Removal of Employee Cards with Event Bubbling

  function addEmployeeCard(name, position) {
    const card = document.createElement('div'); // creates div element for employee card
    card.setAttribute('class', 'employee-card');
  
    const heading = document.createElement('h3'); // creates a employee heading
    heading.textContent = name;
  
    const paragraph = document.createElement('p'); // shows employees position
    paragraph.textContent = position; 
  
    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.classList.add('remove-btn');
  
    const editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.classList.add('edit-btn');
  
    card.appendChild(heading);
    card.appendChild(paragraph); 
    card.appendChild(editButton);
    card.appendChild(removeButton); // replaces with input and save button
  
    document.getElementById('employeeList').appendChild(card);
  
    // Remove function
    removeButton.addEventListener('click', function(event) {
        event.stopPropagation();
        card.remove();
    });
  }

  //Task 5: Inline Editing of Employee Details

  function addEmployeeCard(name, position) {
    const card = document.createElement('div');
    card.setAttribute('class', 'employee-card');
  
    const heading = document.createElement('h3'); // employee name
    heading.textContent = name;
  
    const paragraph = document.createElement('p'); // employee position
    paragraph.textContent = position;
  
    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.classList.add('remove-btn'); // remove button
  
    const editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.classList.add('edit-btn'); // edit button
  
    card.appendChild(heading);
    card.appendChild(paragraph);
    card.appendChild(editButton);
    card.appendChild(removeButton); 
  
    document.getElementById('employeeList').appendChild(card);
  
   // Remove function
    removeButton.addEventListener('click', function(event) {
        event.stopPropagation();
        card.remove();
    });
  
    // inline editing function
    editButton.addEventListener('click', function() {
        const nameInput = document.createElement('input');
        nameInput.value = heading.textContent;
  
        const positionInput = document.createElement('input');
        positionInput.value = paragraph.textContent;
  
        const saveButton = document.createElement('button');
        saveButton.textContent = 'Save';
        saveButton.classList.add('save-btn'); // creates the save button
  
        card.innerHTML = '';
        card.appendChild(nameInput);
        card.appendChild(positionInput);
        card.appendChild(saveButton);
        card.appendChild(removeButton);
  
        saveButton.addEventListener('click', function() {
            heading.textContent = nameInput.value;
            paragraph.textContent = positionInput.value; // updates with input values
  
            card.innerHTML = '';
            card.appendChild(heading);
            card.appendChild(paragraph);
            card.appendChild(editButton);
            card.appendChild(removeButton); // restores with updated details
        });
    });
  }

  addEmployeeCard('Dontae', 'Manager');
addEmployeeCard('Josh', 'Developer'); // intial employee cards
addEmployeeCard('Jalen', 'Designer');

bulkUpdateEmployeeCards();
