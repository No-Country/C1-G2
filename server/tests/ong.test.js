const request = require("supertest");
const app = require('../app');


describe("POST /api/pet_adoption/ongs/", () => {
    // it("Responde 200 si fue creado", (done) => {
    //     const data = {           
    //         nit: "AAl456B7j8895fE",
    //         name: "Petisos",
    //         phone: "542995551111",
    //         email: "mimascota@gmail.com",
    //         is_active: true
            
    //     }
    //     request(app)
    //         .post("/api/pet_adoption/ongs/")
    //         .send(data)
    //         .set("Accept", "application/json")
    //         .expect(200,done);
    // });

    it("Responde 422 si no fue creado", (done) => {
        const data = {           
            name: "Perrit",
            phone: "542995551111",
            email: "mimascota@gmail.com",
            is_active: true
        }
        request(app)
            .post("/api/pet_adoption/ongs/")
            .send(data)
            .set("Accept", "application/json")
            .expect(422,done);
    });
});


describe("PUT /api/pet_adoption/ongs/update/:id", () => {
    // it("Responde 201 si fue modificado", (done) => {

    //     const data = {           
    //         nit: "AC456HJ4398DC",
    //         name: "ONG Pet",
    //         phone: "542995555555",
    //         email: "info@ongpet.com",
    //         is_active: false,
    //         users_publications: [],
            
    //     }
    //     request(app)
    //         .put("/api/pet_adoption/ongs/update/61a503299fa4c497359bba80")
           
    //         .send(data)
    //         .set("Accept", "application/json")
    //         .expect(201,done);
    // });

    it("Responde 404 si no lo encuentra", (done) => {

        const data = {           
            nit: "AC456HJ4398DC",
            name: "ONG Pet",
            phone: "542995555555",
            email: "info@ongpet.com",
            is_active: false,
            users_publications: [],
            
        }
        request(app)
            .post("/api/pet_adoption/pets/update/61a503299fa4c497359bba79")
            
            .send(data)
            .set("Accept", "application/json")
            .expect(404,done);
    });
});

describe("GET /api/pet_adoption/ongs/list", () => {
    it("Responde con un json conteniendo una lista de ongs", (done) => {
        request(app)
            .get("/api/pet_adoption/ongs/list")
            .set("Accept", "application/json")
            .expect(200,done);
    });
});

describe("GET /api/pet_adoption/ongs/byid", () => {
    it("Responde con un json un ong", (done) => {
        request(app)
            .get("/api/pet_adoption/ongs/byid/61a503299fa4c497359bba80")
            .set("Accept", "application/json")
            .expect(200,done);
    });
    // it("Si no encuentra el id buscado", (done) => {
    //     request(app)
    //         .get("/api/pet_adoption/ongs/byid/61a24eeccc864d8f5b2caf4")
    //         .set("Accept", "application/json")
    //         .expect(404,done);
    // });
});

describe("GET /api/pet_adoption/ongs/nit", () => {
    it("Responde con un json un ong", (done) => {
        request(app)
            .get("/api/pet_adoption/ongs/nit")
            .query({ nit: "AC456HJ4398DC"})
            .set("Accept", "application/json")
            .expect(200,done);
    });
    it("Si no encuentra el id buscado", (done) => {
        request(app)
            .get("/api/pet_adoption/ongs/nit")
            .query({ nit: "AC456HJ4398DA"})
            .set("Accept", "application/json")
            .expect(404,done);
    });
});

describe("GET /api/pet_adoption/ongs/name", () => {
    it("Responde con un json un ong", (done) => {
        request(app)
            .get("/api/pet_adoption/ongs/name")
            .query({ name: "Perritos"})
            .set("Accept", "application/json")
            .expect(200,done);
    });
    it("Si no encuentra el id buscado", (done) => {
        request(app)
            .get("/api/pet_adoption/ongs/name")
            .query({ name: "ONG Perritos"})
            .set("Accept", "application/json")
            .expect(404,done);
    });
});

describe("DELETE /api/pet_adoption/ongs/delete", () => {
    it("Responde con 200 si fue eliminado", (done) => {
        const data = {
            _id: "61a503299fa4c497359bba80"
        }
        request(app)
            .delete("/api/pet_adoption/ongs/delete")
            .send(data)
            .set("Accept", "application/json")
            .expect(200,done);
    });
    it("Si no lo encuentra para ser eliminado", (done) => {
         const data = {
            _id: "61a7cd1846c925622f7dd17c"
        }
        
        request(app)
            .delete("/api/pet_adoption/ongs/race")
            .send(data)
            .set("Accept", "application/json")
            .expect(404,done);
    });
});



