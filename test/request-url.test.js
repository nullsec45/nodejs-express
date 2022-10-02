import request from "supertest";
import express from "express";

const app=express();

app.get("/rama/fajar", (req,res) =>{
    res.json({
        path:req.path,
        originalUrl:req.originalUrl,
        hostname:req.hostname,
        protocol:req.protocol,
        secure:req.secure
    })
});

test("Test request url", async () =>{
    const response=await request(app).get("/rama/fajar").query({lastName:"Fadhillah"});

    expect(response.body).toEqual({
        path:"/rama/fajar",
        originalUrl:"/rama/fajar?lastName=Fadhillah",
        hostname:"127.0.0.1",
        protocol:"http",
        secure:false
    });    
})

