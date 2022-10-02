import request from "supertest";
import express from "express";
const app=express();
app.get("/",(req,res) =>{
    res.set("Content-Type","text/html");
    res.send(`<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        <h1>Hello</h1>
    </body>
    </html>`)
});

test("Response Body", async () => {
    const response=await request(app).get("/").query({name:"Fajar"});
    expect(response.get("Content-Type")).toContain("text/html");
    expect(response.text).toBe(`<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        <h1>Hello</h1>
    </body>
    </html>`);
});

