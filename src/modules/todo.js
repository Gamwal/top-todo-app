import { v4 as uuidv4 } from "uuid";
import { format } from "date-fns";


export default class TodoItem {
  #title;
  #description;
  #dueDate;
  #notes;
  #completed;
  #UUID;
  #project;
  
  static __APPID = "Columbus";
  static todos = {};

  constructor(title, description, dueDate, notes, project) {
    this.#title = title;
    this.#description = description;
    this.#dueDate = dueDate;
    this.#notes = notes;
    this.#completed = false;
    this.#UUID = uuidv4();
    this.#project = project || "Default";
  }

  get title() {
    return this.#title;
  }

  set title(newTitle) {
    this.#title = newTitle;
  }

  get description() {
    return this.#description;
  }

  set description(newDescription) {
    this.#description = newDescription;
  }

  get dueDate() {
    return this.#dueDate;
  }

  set dueDate(newDueDate) {
    this.#dueDate = format(newDueDate, "yyyy-MM-dd");
  }

  get notes() {
    return this.#notes;
  }

  set notes(newNotes) {
    this.#notes = newNotes;
  }

  get project() {
    return this.#project;
  }

  set project(newProject) {
    this.#project = newProject || "Default";
  }

  get status() {
    const currentDate = new Date();
    const dueDateObj = new Date(this.#dueDate);
    return this.#completed ? "Completed" : (currentDate > dueDateObj ? "Overdue" : "Pending");
  }

  get checkUUID() {
    return this.#UUID;
  }

  get completed() {
    return this.#completed;
  }

  toggleComplete() {
    this.#completed = !this.#completed;
  }

  toJSON() {
    return {
      title: this.#title,
      description: this.#description,
      dueDate: this.#dueDate,
      notes: this.#notes,
      completed: this.#completed,
      UUID: this.#UUID,
      project: this.#project,
      appid: TodoItem.__APPID
    };
  }

  static fromJSON(json) {
    const data = typeof json === "string" ? JSON.parse(json) : json;
    const { title, description, dueDate, notes, completed, UUID, project, appid } = data;
  
    if (appid === TodoItem.__APPID) {
      const todoItem = new TodoItem(title, description, dueDate, notes, project);
      
      todoItem.#UUID = UUID;

      if (completed) {
        todoItem.toggleComplete();
      }
      return todoItem;
    }
    return null;
  }

  static updateTodos(todoItem) {
    TodoItem.todos[todoItem.checkUUID] = todoItem;
    localStorage.setItem(todoItem.checkUUID, JSON.stringify(todoItem.toJSON()));
  }

  static initializeTodos() {
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      const value = localStorage.getItem(key);
  
      try {
        const todoItem = TodoItem.fromJSON(JSON.parse(value));
        if (todoItem) {
          TodoItem.todos[todoItem.checkUUID] = todoItem;
        }
      } catch (e) {
        console.error(`Error parsing item with key "${key}":`, e);
      }
    }
  }

  static getTodos() {
    return TodoItem.todos;
  }
}