const server = require('../api/server');
const express = require('express')
const supertest = require('supertest');

describe("Get request", () => {
    it('returns 200 OK', async () => {
        const res = await supertest(server).get("/api/users")
        expect(res.statusCode).toBe(200);
    })
})

// describe("post user", () => {
//     it('returns 201 CREATED', async () => {
//         const data = {username: "johnathong", password: "123"}
//         const res = await supertest(server).post("/api/users").send(data)
//         expect(res.statusCode).toBe(201);
//     })
// })

// describe("post user", () => {
//     it('returns 201 CREATED', async () => {
//         const data = {username: "johnathong", password: "123"}
//         const res = await supertest(server).post("/api/users").send(data)
//         expect(res.statusCode).toBe(201);
//     })
// })

describe("post user", () => {
    it('returns 201 CREATED', async () => {
        const data = {username: "Jim", password: "123"}
        const res = await supertest(server).post("/api/users").send(data)
        expect(res.statusCode).toBe(201);
    })

    it("should return JSON", async () => {
        const res = await supertest(server)
          .post("/api/users")
          .send({ username: "Jim", password: "123" });
        expect(res.type).toMatch(/json/i);
      });
})

describe("delete user", () => {
    it('deletes user', async () => {
        const res = await supertest(server).delete("/api/users/2")
        expect(res.statusCode).toBe(200);
    })

    it("should return JSON", async () => {
        await supertest(server)
          .post("/api/users")
          .send({ username: "bob", password: "12345" });
        const res = await supertest(server).delete("/api/users/1");
        expect(res.type).toMatch(/json/i);
      });
})