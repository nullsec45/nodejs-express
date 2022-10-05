import request from "supertest";
import express from "express";

const logger=(req,res,next) =>{
    console.info(`Receive request : ${req.method} ${req.originalUrl}`);
    next();
}

const addPoweredHeader=(req,res,next) => {
    res.set("X-Powered-By","ramarff");
    next();
}

const apiKeyMiddleware=(req,res,next) => {
    if(req.query.apiKey){
        next();
    }else{
        res.status(401).end();
    }
}

const requestTimeMiddleware=(req,res,next) => {
    req.requestTime=Date.now();
    next();
}

const app=express();

app.use(logger);
app.use(apiKeyMiddleware);
app.use(addPoweredHeader);
app.use(requestTimeMiddleware)

app.get("/",(req,res) =>{
    res.send("Hello Response");
});

app.get("/time", (req,res)  => {
    req.requestTime;
    res.send(`Hello, Today is  ${req.requestTime}`);
});

test("Response Middleware", async () => {
    const response=await request(app).get("/").query({apiKey:"kjkszpj645"});

    expect(response.get("X-Powered-By")).toBe("ramarff");
    expect(response.text).toBe("Hello Response");
});


test("Response Middleware Unauthorized", async () => {
    const response=await request(app).get("/");

    expect(response.status).toBe(401);
});


test("Response Middleware Time", async () => {
    const response=await request(app).get("/time").query({apiKey:"1234"});
    expect(response.get("X-Powered-By")).toBe("ramarff");
    expect(response.text).toContain("Hello, Today is");
});