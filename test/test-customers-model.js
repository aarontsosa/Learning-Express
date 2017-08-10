const expect = require('chai').expect;
const Customer = require('../customer')

describe('Customers', () =>{
    it('should be able to save the database', (done) => {
        let myCustomer = new Customer('me', 'me@me.com', '123 me st', 'mememe');
        myCustomer
            .save()
            .then((result) => {
                done();
            })
    });
        it('should be able to get a customer from the database', () =>{
            let myCustomer = new Customer();
            myCustomer
                .get(1)
                .then((result) => {
                    console.log(myCustomer.name)
                    console.log(myCustomer.email)
                    console.log(myCustomer.address)
                    done();
                });
        });
});