import { v4 as uuidv4 }  from 'uuid';

export default class TodoItem {
  #title;
  #description;
  #dueDate;
  #priority;
  #notes;
  #completed;
  #UUID

  #priorities = [1, 2, 3, 4, 5];

  constructor(title, description, dueDate = new Date(), priority = this.#priorities[0], notes, UUID = uuidv4()) {
    this.#title = title;
    this.#description = description;
    this.#dueDate = dueDate;
    this.#priority = priority;
    this.#notes = notes;
    this.#completed = false;
    this.#UUID = UUID;
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
    this.#dueDate = newDueDate;
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

  get checkUUID() {
    return this.#UUID;
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
      UUID: this.#UUID
    };
  }

  static fromJSON(json) {
    const data = typeof json === 'string' ? JSON.parse(json) : json;
    const { title, description, dueDate, priority, notes, completed, UUID } = data;
    const todoItem = new TodoItem(title, description, dueDate, priority, notes, UUID);
    todoItem.#completed = completed; // Restore the completed status
    return todoItem;
  }
}

