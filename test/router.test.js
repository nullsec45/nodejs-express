import request from "supertest";
import express from "express";

const app=express();

const router=express.Router();
router.use((req,res,next) =>{
    console.info(`Receive request : ${req.originalUrl}`);
    next();
});

router.get("/feature/a",(req,res) =>{
    res.send("Feature A.");
});

test("Route Disabled", async () => {
    const response=await request(app).get("/feature/a");
    expect(response.status).toBe(404);
});


test("Route Enabled", async () => {
    app.use(router);
    const response=await request(app).get("/feature/a");
    expect(response.text).toBe("Feature A.");
});