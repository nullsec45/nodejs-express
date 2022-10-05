import request from "supertest";
import express from "express";

const app=express();
app.get("/products/:idProduct",(req,res) =>{
    const idProduct=req.params.idProduct;
    res.send(`Product: ${idProduct}`);
});

app.get("/categories/:id(\\d+)", (req,res) => {
    const idCategory=req.params.id;
    res.send(`Category: ${idCategory}`);
});

test("Route Parameter", async () => {
    let response=await request(app).get("/products/sepatu");
    expect(response.text).toBe("Product: sepatu");

    response=await request(app).get("/products/salah");
    expect(response.text).toBe("Product: salah");

    response=await request(app).get("/categories/1234");
    expect(response.text).toBe("Category: 1234");

    response=await request(app).get("/categories/salah.json");
    expect(response.status).toBe(404);
})