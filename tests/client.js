class Client {
    constructor({ id, username, phone, email, registeredAt }) {
        this.id = id;
        this.username = username;
        this.phone = phone;
        this.email = email;
        this.registeredAt = registeredAt;
    }
} 

module.exports =  new Client();