const mysql = require('mysql');

class DatabaseModel {
    constructor() {
        this.host = 'localhost';
        this.user = 'root';
        this.password = '123456';
        this.database = 'QuanLyHomestay';
    }

    connect() {
        return mysql.createConnection({
            host: this.host,
            user: this.user,
            password: this.password,
            database: this.database
        })
    }
}

module.exports = new DatabaseModel;