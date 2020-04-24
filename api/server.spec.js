const request = require("supertest"); 
const server = require('./server.js'); 
const db = require('../database/dbConfig.js'); 

describe('server', function() {
    
    describe('/', function() {

        it('POST request to /api/auth/register with no creds', function() {
            return request(server)
                .post('/api/auth/register')
                .then(res =>{
                    expect(res.status).toBe(500); 
                })
        })
        
        // it('POST /api/auth/register endpoint with creds', function() {
        //     return request(server)
        //         .post('/api/auth/register')
        //         .send({ username: 'mark', password: 'marky' })
        //         .then(res => {
        //             expect(res.status).toBe(201); 
        //         })
        // })

        it('POST request to /api/auth/login with no creds', function() {
            return request(server)
                .post('/api/auth/login')
                .then(res =>{
                    expect(res.status).toBe(500); 
                })
        })
        
        it('POST /api/auth/login endpoint with creds', function() {
            return request(server)
                .post('/api/auth/login')
                .send({ username: 'mark', password: 'marky' })
                .then(res => {
                    expect(res.status).toBe(200); 
                    expect(res.body.message).toBe("Logged in!"); 
                })
        })

        it('GET request to /api/jokes with no creds', function() {
            return request(server)
                .get('/api/jokes')
                .then(res =>{
                    expect(res.status).toBe(400); 
                })
        })
        
        it('GET request to /api/jokes endpoint with creds', function() {
            const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjUsInVzZXJuYW1lIjoidG9tIiwiaWF0IjoxNTg3NzU2MDI2LCJleHAiOjE1ODc4NDI0MjZ9.a6SZP3FSbn_VAqT6sTQGgkZryCtYSmLvXrAPL9Ns8q8'; 

            return request(server)
                .get('/api/jokes')
                .set({ Authorization: token })
                .then(res => {
                    expect(res.status).toBe(200); 
                })
        })
     })
})