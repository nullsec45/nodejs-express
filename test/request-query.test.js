import express from "express";
import request from "supertest";

const app=express();
app.get("/",(req,res) =>{
    res.send(`Hello ${req.query.firstName} ${req.query.lastName}`);
});

test("Request Query", async() => {
    const response=await request(app).get("/").query({firstName:"Rama",lastName:"Fajar"});
    expect(response.text).toBe("Hello Rama Fajar");
})