import request from "supertest";
import express from "express";
const app=express();
app.get("/",(req,res) =>{
    res.set({
        "X-Powered-By":"Linux NF",
        "X-Author":"Fajar"
    });
    res.send(`Hello ini adalah response header.`);
});

test("Response Header", async () => {
    const response=await request(app).get("/").query({name:"Fajar"});
    expect(response.text).toBe(`Hello ini adalah response header.`);
    expect(response.get("X-Powered-By")).toBe("Linux NF");
    expect(response.get("X-Author")).toBe("Fajar");
});

