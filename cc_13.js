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