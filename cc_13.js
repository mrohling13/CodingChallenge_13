// Task 2: Adding Employee Cards Dynamically

function addEmployeeCard(name, position) {
    const card = document.createElement('div');
    card.setAttribute('class', 'employee-card');
  
    const heading = document.createElement('h3');
    heading.textContent = name;const paragraph = document.createElement('p');
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
    card.appendChild(removeButton);
  
    document.getElementById('employeeList').appendChild(card);
  }

  // Task 3: Converting NodeLists to Arrays for Bulk Updates

  function bulkUpdateEmployeeCards() {
    const cards = document.querySelectorAll('.employee-card');
    const cardArray = Array.from(cards);
  
    cardArray.forEach(card => {
        card.classList.add('highlight');
    });
  }
  
  // Task 4: Implementing Removal of Employee Cards with Event Bubbling

  function addEmployeeCard(name, position) {
    const card = document.createElement('div');
    card.setAttribute('class', 'employee-card');
  
    const heading = document.createElement('h3');
    heading.textContent = name;
  
    const paragraph = document.createElement('p');
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
    card.appendChild(removeButton);
  
    document.getElementById('employeeList').appendChild(card);
  
    // Add removal functionality
    removeButton.addEventListener('click', function(event) {
        event.stopPropagation();
        card.remove();
    });
  }

  //Task 5: Inline Editing of Employee Details

  function addEmployeeCard(name, position) {
    const card = document.createElement('div');
    card.setAttribute('class', 'employee-card');
  
    const heading = document.createElement('h3');
    heading.textContent = name;
  
    const paragraph = document.createElement('p');
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
    card.appendChild(removeButton);
  
    document.getElementById('employeeList').appendChild(card);
  
    // Add removal functionality
    removeButton.addEventListener('click', function(event) {
        event.stopPropagation();
        card.remove();
    });
  
    // Add inline editing functionality
    editButton.addEventListener('click', function() {
        const nameInput = document.createElement('input');
        nameInput.value = heading.textContent;
  
        const positionInput = document.createElement('input');
        positionInput.value = paragraph.textContent;
  
        const saveButton = document.createElement('button');
        saveButton.textContent = 'Save';
        saveButton.classList.add('save-btn');
  
        card.innerHTML = '';
        card.appendChild(nameInput);
        card.appendChild(positionInput);
        card.appendChild(saveButton);
        card.appendChild(removeButton);
  
        saveButton.addEventListener('click', function() {
            heading.textContent = nameInput.value;
            paragraph.textContent = positionInput.value;
  
            card.innerHTML = '';
            card.appendChild(heading);
            card.appendChild(paragraph);
            card.appendChild(editButton);
            card.appendChild(removeButton);
        });
    });
  }

  addEmployeeCard('Dontae', 'Manager');
addEmployeeCard('Josh', 'Developer');
addEmployeeCard('Jalen', 'Designer');

bulkUpdateEmployeeCards();
