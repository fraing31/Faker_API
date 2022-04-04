
const express = require('express');
const app = express();
const { faker } = require('@faker-js/faker');
const { response } = require('express');

class Usuario {
    constructor() {
    this.id = faker.datatype.number({ max: 100 });
    this.nombre = faker.name.firstName();
    this.apellido = faker.name.lastName();
    this.telefono = faker.phone.phoneNumber();
    this.email = faker.internet.email();
    this.password = faker.internet.password();

    }
}
        

class Empresa {
    constructor(){
        this.id = faker.datatype.number({ max: 100 });
        this.nombre = faker.name.firstName();
        this.direccion = {
            calle: faker.company.companyName(),
            ciudad: faker.address.city(), 
            estado: faker.address.state(),
            codigoPostal: faker.address.zipCode(),
            pais: faker.address.country()
        }
    }
}

app.get('/api/users/new', (request, response) => {
    return response.status(200).json(new Usuario());
})

app.get( '/api/companies/new', (request, response) => {
    return response.status(200).json(new Empresa());
})

app.get( "/api/user/company", (request, response) => {
    return response.status(200).json({usuario: new Usuario(),
                                      empresa: new Empresa()})
})





//console.log(app);
app.listen( 8080, () => {
    console.log("El servidor se encuentra corriendo en el puerto 8080")
});
