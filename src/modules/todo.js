import { v4 as uuidv4 } from "uuid";
import { format } from "date-fns";

export default class TodoItem {
  #title;
  #description;
  #dueDate;
  #priority;
  #notes;
  #completed;
  #UUID;
  #status;

  #priorities = [1, 2, 3, 4, 5];

  constructor(title, description, dueDate, notes) {
    this.#title = title;
    this.#description = description;
    this.#dueDate = dueDate;
    this.#priority = this.#priorities[0];
    this.#notes = notes;
    this.#completed = false;
    this.#UUID = uuidv4();
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

  get priority() {
    return this.#priority;
  }

  set priority(newPriority) {
    this.#priority = newPriority;
  }

  get notes() {
    return this.#notes;
  }

  set notes(newNotes) {
    this.#notes = newNotes;
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
    if (this.#completed == false) {
      this.#completed = true;
    } else {
      this.#completed = false;
    }
  }

  toJSON() {
    return {
      title: this.#title,
      description: this.#description,
      dueDate: this.#dueDate,
      priority: this.#priority,
      notes: this.#notes,
      completed: this.#completed,
      UUID: this.#UUID,
    };
  }

  static fromJSON(json) {
    const data = typeof json === "string" ? JSON.parse(json) : json;
    const { title, description, dueDate, priority, notes, completed, UUID } =
      data;
    const todoItem = new TodoItem(
      title,
      description,
      dueDate,
      priority,
      notes,
      UUID
    );
    todoItem.#completed = completed;
    return todoItem;
  }
}
