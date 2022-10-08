import request from "supertest";
import express from "express";
import cookieParser from "cookie-parser";

const app=express();
app.use(cookieParser());
app.use(express.json());

app.get("/",(req,res) =>{
    const name=req.cookies["name"];
    res.send(`Hello ${name}`);
});

app.post("/login", (req,res) => {
    const name=req.body.name;
    res.cookie("Login", name, {path:"/"});
    res.send(`Hello ${name}`);
});

test("Cookie Read", async () => {
    const response=await request(app).get("/")
          .set("Cookie","name=Fajar")

    expect(response.text).toBe("Hello Fajar");
});

test("Cookie Write", async() => {
    const response=await request(app).post("/login")
                                     .send({name:"Fajar"});
    expect(response.get("Set-Cookie").toString()).toBe("Login=Fajar; Path=/")    
    expect(response.text).toBe("Hello Fajar");
});

