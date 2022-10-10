import request from "supertest";
import express from "express";
import expressFileUpload from "express-fileupload";

const app=express();
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(expressFileUpload());

app.post("/file",async (req,res) => {
    const textFile=req.files.article;
    await textFile.mv(__dirname+"/upload/"+textFile.name);

    res.send(`Hello ${req.body.name}, you uploaded ${textFile.name}`);
});


test("Request File Upload", async () => {
    const response=await request(app).post("/file")
                                     .set("Content-Type","multipart/form-data")
                                     .field("name","Fajar")
                                     .attach("article",__dirname+"/contoh.txt");

    expect(response.text).toBe("Hello Fajar, you uploaded contoh.txt");
});