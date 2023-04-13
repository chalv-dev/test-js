const employees = [
    { name: 'John Doe', category: 'sales' },
    { name: 'Jane Smith', category: 'engineering' },
    { name: 'Mark Johnson', category: 'sales' },
    { name: 'Anna Brown', category: 'marketing' },
    { name: 'James Wilson', category: 'engineering' },
];

function createEmployeeList() {
    let ul = document.getElementById('employeeList');
    employees.forEach(employee => {
        let li = document.createElement('li');
        li.setAttribute('data-category', employee.category);
        li.textContent = employee.name;
        ul.appendChild(li);
    });
}

function filterEmployees() {
    let select = document.getElementById('categoryFilter');
    let filter = select.value;
    let ul = document.getElementById('employeeList');
    let li = ul.getElementsByTagName('li');

    for (let i = 0; i < li.length; i++) {
        let category = li[i].getAttribute('data-category');
        if (filter === 'all' || category === filter) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}

createEmployeeList();
