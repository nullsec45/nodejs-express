import request from "supertest";
import express from "express";

const app=express();
// app.use(express.static(__dirname+"/static"));


app.get("/",(req,res) =>{
    res.send("Hello Response");
});

app.get("/contoh.txt",(req,res)=>{
    res.send("Hello Response")
})

test("Static File", async () => {
    const response=await request(app).get("/");

    expect(response.text).toBe("Hello Response");
})

test("Static File contoh.txt", async () => {
    const response=await request(app).get("/contoh.txt");

    expect(response.text).toContain("Hello Respomse");
})

test("Static File /static/contoh.txt", async () => {
    const response=await request(app).get("/static/contoh.txt");

    expect(response.text).toContain("This is sample text");
})