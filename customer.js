require('dotenv').config();
const pg = require('pg-promise')();
const dbConfig = {
    host: process.env.DB_HOST,
    username: process.env.DB_USER,
    database: process.env.DB_NAME
}



class Customer{
    constructor(name, email, addr, password){
        this.name = name;
        this.email = email;
        this.address = addr;
        this.password = password;
        this.db = pg(dbConfig);
    }
    save(){
        return this.db.query(`
            insert into customers
            (name, email, address, password)
            values
            ('${this.name}','${this.email}','${this.address}','${this.password}');
        `)
    }
}

module.exports = Customer;

