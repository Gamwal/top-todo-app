# **PlannIT**

### A Modern Task Management App with Project Filtering and Date-Based Sorting

This ToDo List Application allows users to efficiently manage tasks across different projects, while also offering filtering capabilities to view tasks based on deadlines and completion status. With an intuitive UI and simple task creation, it helps users organize and prioritize tasks with ease.

## **Features**

- **Task Creation**: Add tasks with titles, descriptions, due dates, notes, and assign them to specific projects.
- **Project Management**: Organize tasks under different projects and dynamically filter tasks by project.
- **Filters**: View tasks based on status:
  - **All Tasks**: See all tasks regardless of their completion or project.
  - **Upcoming**: Tasks due within the next two days.
  - **Overdue**: Tasks that are past their due date.
  - **This Week**: Tasks due within the current week.
  - **This Month**: Tasks due within the current month.
- **Task Completion**: Mark tasks as completed or ongoing, and view them accordingly in separate sections.
- **Persistent Storage**: Tasks and projects are stored locally, ensuring they persist across page reloads.

## **Getting Started**

### **Prerequisites**

Ensure you have the following installed:
- **Node.js** (for running and building the project)
- Any modern browser for the frontend.

### **Installation**

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Gamwal/top-todo-app.git 
2. **Navigate into the project directory**:
   ```bash
   cd todo-list-app
   ```
3. **Install dependencies** (if applicable):
   ```bash
   npm install
   ```

### **Running the Application**

To start the app in development mode, you can open the `index.html` in your preferred browser.

For projects using build tools (e.g., Webpack):
```bash
npm start
```

### **Usage**

Once the application is running, you can:
1. **Create a new task**: Use the "New Task" button to add a new task.
2. **Manage tasks**: View and edit tasks within different projects.
3. **Filter tasks**: Use the sidebar to filter tasks by due date or project.
4. **Mark tasks as complete**: Toggle between completed and ongoing sections to track progress.

## **Project Structure**

The project is organized as follows:

```bash
.
├── src
│   ├── icons
│   │   ├── abacus.svg
│   │   ├── calendar-month.svg
│   │   ├── calendar-week.svg
│   │   ├── circle-double.svg
│   │   ├── clock-alert-outline.svg
│   │   ├── clock-outline.svg
│   │   ├── delete.svg
│   │   ├── pencil.svg
│   │   ├── plus.svg
│   │   └── view-parallel.svg
│   ├── index.html                     # Main HTML file for the application
│   ├── index.js
│   ├── modules
│   │   ├── dialog.js
│   │   ├── dummyTasks.js
│   │   ├── mainDisplay.js
│   │   ├── project.js                 # Core logic for project management
│   │   ├── todo.js                    # Core logic for task management
│   │   └── ui.js                      # Handles UI updates for displaying tasks and projects
│   └── style.css                      # Application styling
├── index.html           
├── README.md  
└── webpack.config.js


│       ├── mainDisplay.js  
│   ├── mainDisplay.js   
│   ├── todo.js          
│   └── styles.css       
├── package.json
├── package-lock.json
├── README.md                         # This file                 
```

### **Core Modules**

- **`mainDisplay.js`**: Responsible for the user interface. It dynamically updates task and project displays, and handles event listeners for filtering.
- **`todo.js`**: Contains the core logic for managing tasks (TodoItems), projects, and filtering based on deadlines.

## **Key Concepts**

- **Filtering by Project and Deadline**: 
   - Users can click on project names in the sidebar to filter tasks associated with that project.
   - Filter tasks based on "Upcoming," "Overdue," "This Week," and "This Month" to keep track of important deadlines.
   
- **Task Persistence**: 
   - Tasks and projects are saved in the browser's `localStorage`, ensuring data persists across browser sessions.

## **Contributing**

1. **Fork the repository**
2. **Create a new branch**:
   ```bash
   git checkout -b feature/new-feature
   ```
3. **Make your changes and commit**:
   ```bash
   git commit -m "Add some new feature"
   ```
4. **Push to the branch**:
   ```bash
   git push origin feature/new-feature
   ```
5. **Submit a pull request**

## **License**
This is free to use