class User {
    constructor(id, first_name, last_name) {
        this.id = id;
        this.first_name = first_name;
        this.last_name = last_name;
    }

    fullName = () => {
        return this.first_name + this.last_name
    }
}