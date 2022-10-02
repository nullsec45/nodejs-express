import request from "supertest";
import express from "express";

const app=express();
app.get("/", (req,res) => {
    const type=req.get("Accept");
    res.send(`Hello ${type}`);
});

test("Request Header", async () => {
    const response=await request(app).get("/").set("Accept", "text/plain");
    expect(response.text).toBe("Hello text/plain");
});