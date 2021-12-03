const request = require("supertest");
const app = require('../app');


describe("POST /api/pet_adoption/pets/", () => {
    it("Responde 200 si fue creado", (done) => {
        const data = {           
            petname: "Pancho",
            userid: 2,
            race: "Callejero",
            species: "Canino",
            color: "Todos los colores",
            gender: "Macho",
            description: "Peso 10 Kg",
            age: {
                age_range: "Year",
                number: 7
            },
            direction: "Plaza central",
            publicationDate: "2020/07/14",
            category: "Adopción",
            is_castrated: false,
            is_authorized: false,
            
        }
        request(app)
            .post("/api/pet_adoption/pets/")
            .send(data)
            .set("Accept", "application/json")
            .expect(200,done);
    });

    it("Responde 422 si no fue", (done) => {
        const data = {           
           
            userid: 2,
            race: "Callejero",
            species: "Canino",
            color: "Todos los colores",
            gender: "Macho",
            description: "Peso 10 Kg",
            age: {
                age_range: "Year",
                number: 7
            },
            direction: "Plaza central",
            publicationDate: "2020/07/14",
            category: "Adopción",
            is_castrated: false,
            is_authorized: false,
            
        }
        request(app)
            .post("/api/pet_adoption/pets/")
            .send(data)
            .set("Accept", "application/json")
            .expect(422,done);
    });
});

describe("PUT /api/pet_adoption/pets/update/:id", () => {
    it("Responde 201 si fue modificado", (done) => {

        const data = {           
            petname: "Pancho",
            userid: 2,
            race: "Callejero",
            species: "Canino",
            color: "Todos los colores",
            gender: "Macho",
            description: "Peso 10 Kg",
            age: {
                age_range: "Year",
                number: 7
            },
            direction: "Plaza central",
            publicationDate: "2020/07/14",
            category: "Adopción",
            is_castrated: false,
            is_authorized: true,
            
        }
        request(app)
            .put("/api/pet_adoption/pets/update/61a8f56be4eb89b16ded9a21")
           
            .send(data)
            .set("Accept", "application/json")
            .expect(201,done);
    });

    it("Responde 404 si no lo encuentra", (done) => {

        const data = {           
            petname: "Pancho",
            userid: 2,
            race: "Callejero",
            species: "Canino",
            color: "Todos los colores",
            gender: "Macho",
            description: "Peso 10 Kg",
            age: {
                age_range: "Year",
                number: 7
            },
            direction: "Plaza central",
            publicationDate: "2020/07/14",
            category: "Adopción",
            is_castrated: true,
            is_authorized: true,
            
        }
        request(app)
            .post("/api/pet_adoption/pets/update/61a8f81da17cfaed27b600d5")
            
            .send(data)
            .set("Accept", "application/json")
            .expect(404,done);
    });
});


describe("GET /api/pet_adoption/pets/list", () => {
    it("Responde con un json conteniendo una lista de pets", (done) => {
        request(app)
            .get("/api/pet_adoption/pets/list")
            .set("Accept", "application/json")
            .expect(200,done);
    });
});

describe("GET /api/pet_adoption/pets/byid", () => {
    it("Responde con un json un pet", (done) => {
        request(app)
            .get("/api/pet_adoption/pets/byid/61a4f5229b17900cef29dd04")
            .set("Accept", "application/json")
            .expect(200,done);
    });
    it("Si no encuentra el id buscado", (done) => {
        request(app)
            .get("/api/pet_adoption/pets/byid/61a24eeccc864d8f5b2caf4A")
            .set("Accept", "application/json")
            .expect(404,done);
    });
});

describe("GET /api/pet_adoption/pets/name", () => {
    it("Responde con un json conteniendo una lista de pets", (done) => {
        request(app)
            .get("/api/pet_adoption/pets/name")
            .query({ petname: "Mantita"})
            .set("Accept", "application/json")
            .expect(200,done);
    });
    it("Si no encuentra el id buscado", (done) => {
        request(app)
            .get("/api/pet_adoption/pets/name")
            .query({ petname: "Manta"})
            .set("Accept", "application/json")
            .expect(404,done);
    });
});

describe("GET /api/pet_adoption/pets/gender", () => {
    it("Responde con un json conteniendo una lista de pets", (done) => {
        request(app)
            .get("/api/pet_adoption/pets/gender")
            .query({ gender: "Hembra"})
            .set("Accept", "application/json")
            .expect(200,done);
    });
    it("Si no encuentra el género buscado", (done) => {
        request(app)
            .get("/api/pet_adoption/pets/name")
            .query({ gender: "Mach"})
            .set("Accept", "application/json")
            .expect(404,done);
    });
});

describe("GET /api/pet_adoption/pets/race", () => {
    it("Responde con un json conteniendo una lista de pets", (done) => {
        request(app)
            .get("/api/pet_adoption/pets/race")
            .query({ race: "Doberman"})
            .set("Accept", "application/json")
            .expect(200,done);
    });
    it("Si no encuentra la raza buscada", (done) => {
        request(app)
            .get("/api/pet_adoption/pets/race")
            .query({ race: "Mastin"})
            .set("Accept", "application/json")
            .expect(404,done);
    });
});

describe("DELETE /api/pet_adoption/pets/delete", () => {
    it("Responde con 200 si fue eliminado", (done) => {
        const data = {
            _id: "61a7cd1846c925622f7dd17c"
        }
        request(app)
            .delete("/api/pet_adoption/pets/delete")
            .send(data)
            .set("Accept", "application/json")
            .expect(200,done);
    });
    it("Si no lo encuentra para ser eliminado", (done) => {
         const data = {
            _id: "61a7cd1846c925622f7dd17c"
        }
        
        request(app)
            .delete("/api/pet_adoption/pets/race")
            .send(data)
            .set("Accept", "application/json")
            .expect(404,done);
    });
});




