import request from "supertest";
import express from "express";

test("Response", async () => {
    const app=express();
    app.get("/",(req,res) =>{
        res.send("Hello Response");
    });

    const response=await request(app).get("/");

    expect(response.text).toBe("Hello Response");
})