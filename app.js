const students = [
  { ID: 1, name: 'Alice', age: 21, grade: 'A', degree: 'Btech', email: 'alice@example.com' },
  { ID: 2, name: 'Bob', age: 22, grade: 'B', degree: 'MBA', email: 'bob@example.com' },
  { ID: 3, name: 'Charlie', age: 20, grade: 'C', degree:'Arts', email: 'charlie@example.com' }
];


const form = document.createElement('form');
const nameLabel = document.createElement('label');
nameLabel.textContent = 'Name:';
const nameInput = document.createElement('input');
nameInput.setAttribute('type', 'text');
const ageLabel = document.createElement('label');
ageLabel.textContent = 'Age:';
const ageInput = document.createElement('input');
ageInput.setAttribute('type', 'number');
const gradeLabel = document.createElement('label');
gradeLabel.textContent = 'Grade:';
const gradeInput = document.createElement('input');
gradeInput.setAttribute('type', 'text');
const degreeLabel = document.createElement('label');
degreeLabel.textContent = 'Degree:';
const degreeInput = document.createElement('input');
degreeInput.setAttribute('type', 'text');
const emailLabel = document.createElement('label');
emailLabel.textContent


function displayStudents() {
  const table = document.createElement('table');
  const headers = ['ID', 'Name', 'Age', 'Grade', 'Degree', 'Email'];
  const headerRow = document.createElement('tr');
  for (let header of headers) {
    const th = document.createElement('th');
    th.textContent = header;
    headerRow.appendChild(th);
  }
  table.appendChild(headerRow);
  for (let student of students) {
    const row = document.createElement('tr');
    for (let prop in student) {
      const cell = document.createElement('td');
      cell.textContent = student[prop];
      row.appendChild(cell);
    }
    const editCell = document.createElement('td');
    const editBtn = document.createElement('button');
    editBtn.textContent = 'Edit';
    editBtn.addEventListener('click', () => {
      // call editStudent function here
    });
    editCell.appendChild(editBtn);
    row.appendChild(editCell);
    const deleteCell = document.createElement('td');
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.addEventListener('click', () => {
      // call deleteStudent function here
    });
    deleteCell.appendChild(deleteBtn);
    row.appendChild(deleteCell);
    table.appendChild(row);
  }
  document.body.appendChild(table);
}

