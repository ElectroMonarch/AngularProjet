export class Model {
    user;
    items;

    constructor() {
        this.user = "Yağız";

        this.items =
            [
                new TodoItem("Akşam Yemeği", false),
                new TodoItem("Oyun oynamak", true),
                new TodoItem("İşe gitmek", false),
                new TodoItem("Oğluşumu sevmek", true),
                new TodoItem("Uyumak", false),
            ];

    }
}

export class TodoItem {
    description;
    action;

    constructor(description, action) {
        this.description = description;
        this.action = action;
    }
}
