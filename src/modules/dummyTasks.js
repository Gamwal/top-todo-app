import { format } from "date-fns";
import TodoItem from "./todo";

function createDummyTodos() {
  for (let i = 1; i <= 10; i++) {
    const title = `Task ${i}`;
    const description = `Description for Task ${i}`;
    const dueDate = format(new Date(), "yyyy-MM-dd"); // Current date in 'yyyy-MM-dd' format
    const notes = `Notes for Task ${i}`;

    const todoItem = new TodoItem(title, description, dueDate, notes);
    localStorage.setItem(todoItem.checkUUID, JSON.stringify(todoItem.toJSON()));
  }
}

export { createDummyTodos }
