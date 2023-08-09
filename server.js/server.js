const express = require ("express");
const { faker } = require('@faker-js/faker');
const app = express ();


app.get("/api/testing", (req, res) => {
    res.json({ message: "Hello World" });
});


//create a function createUser that returns an object with the properties listed
const createUser = () => {
    const newUser = {
        password: faker.internet.password(),
        email: faker.internet.email(),
        phoneNumber: faker.phone.number(),
        lastName: faker.person.lastName(),
        firstName: faker.person.firstName(),
        _id: faker.string.uuid()
    }
    return newUser
}


//Create an api route "/api/users/new" that returns a new user
app.get("/api/user/new", (req, res) => {
    const newFakerUser = createUser()
    res.json(newFakerUser)
})


//create a function createCompany that returns an object with the properties listed
const createCompany = () => {
    const newCompany = {
        _id: faker.string.uuid(),
        name: faker.company.name(),
        address:{
            street: faker.location.street(),
            city: faker.location.city(),
            state: faker.location.state(),
            zipCode: faker.location.zipCode(),
            country: faker.location.country(),
        }
    }
    return newCompany
}


//create an api route "/api/companies/new" that returns a new company
app.get("/api/company/new", (req, res) => {
    const newFakerCompany = createCompany()
    res.json(newFakerCompany)
})


//create an api route "/api/user/company" that returns both a new user and a new company
app.get("/api/user/company", (req, res) => {
    const newFakerUser = createUser()
    const newFakerCompany = createCompany()
    res.json([newFakerCompany, newFakerUser]) //create your return into an object 
})


app.listen( 8000, () => console.log(`Listening on port: 8000`) );

