const request = require("supertest"); 
const server = require('./server.js'); 
const db = require('../database/dbConfig.js'); 

describe('server', function() {
    
    describe('/', function() {

        it('should return 400', function(){
            // make a GET request to / endpoint on the server
            return request(server)
                .get('/api/jokes')
                .then(res => {
                // assert that the HTTP status code is 200
                    expect(res.status).toBe(400); 
            })
        })

        describe("POST /register", function () {

            // it('"return 201 on success"', function(){
            //     return request(server)
            //         .post("/api/auth/register")
            //         .send({ username: "billy", password: "thekid" })
            //         .then(res => {
            //             expect(res.status).toBe(201); 
            //         })
            // }); 

            it('"should return a message saying "Logged in!""', function(){
                return request(server)
                    .post("/api/auth/login")
                    .send({ username: "billy", password: "thekid" })
                    .then(res => {
                        expect(res.body.message).toBe("Logged in!"); 
                    })
            }); 

        })
    })
})