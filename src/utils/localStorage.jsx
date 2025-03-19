const employees = [
    {
        "id": 1, "email": "employee1@example.com", "password": "123",
        "tasks": [
            { "taskTitle": "Prepare Monthly Report", "taskDescription": "Compile financial and sales data for the monthly report.", "taskDate": "2025-03-16", "category": "Finance", "active": true, "newTask": true, "completed": false, "failed": false },
            { "taskTitle": "Client Meeting", "taskDescription": "Discuss project updates and deliverables with the client.", "taskDate": "2025-03-17", "category": "Business", "active": false, "newTask": false, "completed": true, "failed": false }
        ]
    },
    {
        "id": 2, "email": "employee2@example.com", "password": "123",
        "tasks": [
            { "taskTitle": "Inventory Check", "taskDescription": "Verify stock levels and reorder low inventory items.", "taskDate": "2025-03-18", "category": "Operations", "active": true, "newTask": false, "completed": false, "failed": false },
            { "taskTitle": "Employee Training", "taskDescription": "Conduct a training session for new hires on company policies.", "taskDate": "2025-03-19", "category": "HR", "active": false, "newTask": true, "completed": false, "failed": true }
        ]
    },
    {
        "id": 3, "email": "employee3@example.com", "password": "123",
        "tasks": [
            { "taskTitle": "Software Update", "taskDescription": "Install and configure the latest software updates on all systems.", "taskDate": "2025-03-20", "category": "IT", "active": true, "newTask": true, "completed": false, "failed": false }
        ]
    },
    {
        "id": 4, "email": "employee4@example.com", "password": "123",
        "tasks": [
            { "taskTitle": "Marketing Strategy", "taskDescription": "Develop a social media marketing plan for the next quarter.", "taskDate": "2025-03-21", "category": "Marketing", "active": false, "newTask": false, "completed": true, "failed": false },
            { "taskTitle": "Vendor Negotiation", "taskDescription": "Negotiate contract terms with a new supplier.", "taskDate": "2025-03-22", "category": "Procurement", "active": true, "newTask": false, "completed": false, "failed": true }
        ]
    },
    {
        "id": 5, "email": "employee5@example.com", "password": "123",
        "tasks": [
            { "taskTitle": "Customer Feedback Review", "taskDescription": "Analyze customer reviews and suggest improvements.", "taskDate": "2025-03-23", "category": "Customer Service", "active": false, "newTask": true, "completed": false, "failed": false },
            { "taskTitle": "Budget Planning", "taskDescription": "Draft the annual budget proposal for department spending.", "taskDate": "2025-03-24", "category": "Finance", "active": true, "newTask": false, "completed": false, "failed": true }
        ]
    }

]

const admin = [{
    "id": 1, "email": "admin@example.com", "password": "123"
}
]

export const setLocalStorage = () =>{

    localStorage.setItem('employees', JSON.stringify(employees))

    localStorage.setItem('admin', JSON.stringify(admin))
}

export const getLocalStorage = () =>{

    const employees = JSON.parse(localStorage.getItem('employees'))
    const admin = JSON.parse(localStorage.getItem('admin'))

    return{employees,admin}

}


