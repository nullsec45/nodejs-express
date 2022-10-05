import request from "supertest";
import express from "express";

const app=express();
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.post("/json",(req,res) =>{
    const name=req.body.name;
    res.json({
        hello:`Hello ${name}`
    });
});

app.post("/form", (req,res) =>{
    const name=req.body.name;
    res.json({
        hello:`Hello ${name}`
    });
});

test("Request JSON", async () => {
    const response=await request(app).post("/json")
                                     .send({name:"Fajar"})
                                     .set("Content-Type","application/json");
    expect(response.body).toEqual({
        hello:`Hello Fajar`
    });
});

test("Request Form", async () => {
    const response=await request(app).post("/json")
                                     .send("name=Fajar")
                                     .set("Content-Type","application/x-www-form-urlencoded");
    expect(response.body).toEqual({
        hello:`Hello Fajar`
    });
});