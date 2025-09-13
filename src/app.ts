import express, { Request, Response } from "express";
import cors from "cors";

const app = express();

app.use(express.json()); // Allows JSON parser
app.use(cors());

app.get("/api/v1/", (req: Request, res: Response) => {
  console.log(req.url);
  res.status(200).json({
    success: true,
    message: "Your server is working just fine!",
  });
});

export default app;
