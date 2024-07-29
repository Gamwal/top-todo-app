export default class Project {
  #title;
  #description;
  #UUIDs;

  constructor(title, description) {
    this.#title = title;
    this.#description = description;
    this.#UUIDs = [];
  }

  addTodo(todoObject) {
    if (todoObject.checkUUID) {
      this.#UUIDs.push(todoObject.checkUUID);
    } else {
      throw new Error ('Invalid TodoItem Object');
    }
  }

  getUUIDs() {
    return this.#UUIDs;
  }
}
