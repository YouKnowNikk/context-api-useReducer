
React Todo List with Context API, Reducers, Custom Hooks, and Local Storage
This React Todo List application offers a way to manage daily tasks without relying on Redux, making it suitable for small projects. It leverages advanced React concepts like Context API, Reducers, Custom Hooks, and Local Storage for efficient state management and data persistence.

Features:
Add, delete, edit, and mark tasks as completed
Utilizes React Context API for state management
Implements Reducers for handling complex state logic
Custom Hooks for accessing and managing todo context
Data persistence using Local Storage
Project Structure:
App.js: Main component integrating TodoContextProvider and rendering AddTask and AllTodos components.
TodoContext.js: Creates a TodoContext using createContext() and provides a TodoContextProvider component for managing todos state.
useTodo.js: Custom Hook for accessing todo context, ensuring cleaner component code.
AddTask.js: Component for adding new tasks, with functionality to handle task submission and editing.
AllTodos.js: Component for displaying all todos, with options to delete, edit, and mark tasks as completed.
How to Use:
Installation:

Clone the repository to your local machine.
Navigate to the project directory and run npm install to install dependencies.
Run the Application:

Run npm start to start the development server.
Open your browser and navigate to http://localhost:3000 to view the application.
Usage:

Add new tasks by typing in the input field and clicking the "ADD TODO" button.
Delete tasks by clicking the "X" button next to each task.
Edit tasks by clicking the "EDIT" button, making changes, and then clicking "Save Todo."
Mark tasks as completed by clicking the "COMPLETE" button.
Persistence:

Todos are persisted using Local Storage, ensuring that tasks remain even after page refresh.
Dependencies:
React
Node.js
npm (Node Package Manager)
Contributing:
Contributions are welcome! Feel free to fork the repository, make changes, and submit pull requests.