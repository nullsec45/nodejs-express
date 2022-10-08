import request from "supertest";
import express from "express";
import cookieParser from "cookie-parser";

const app=express();
app.use(cookieParser("kepolo123"));
app.use(express.json());

app.get("/",(req,res) =>{
    const name=req.signedCookies["Login"];
    res.send(`Hello ${name}`);
});

app.post("/login", (req,res) => {
    const name=req.body.name;
    res.cookie("Login", name, {path:"/",signed:true});
    res.send(`Hello ${name}`);
});

test("Cookie Read", async () => {
    const response=await request(app).get("/")
          .set("Cookie", "Login=s%3AFajar.SErDB6P9%2F8vCSWIEjmIo%2BANdqZpCYv1s9yAkO4mCYMo; Path=/");

    expect(response.text).toBe("Hello Fajar");
});

test("Cookie Write", async() => {
    const response=await request(app).post("/login")
                                     .send({name:"Fajar"});
    expect(response.get("Set-Cookie").toString()).toContain("Fajar");    
    expect(response.text).toBe("Hello Fajar");
});

