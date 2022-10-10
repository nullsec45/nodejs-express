 import request from "supertest";
import express from "express";
import mustacheExpress from "mustache-express";

const app=express();
app.set("views",__dirname+"/views");
app.set("view engine", "html");
app.engine("html", mustacheExpress());

app.get("/",(req,res) =>{
    res.render("index",{
        title:"Hello World",
        say:"This is a test"
    })
});

test("Template Engine", async () => {
  
    const response=await request(app).get("/");
    console.info(response.text);

    expect(response.text).toContain("Hello World");
    expect(response.text).toContain("This is a test");
})