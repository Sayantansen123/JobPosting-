import express from "express";
import { PrismaClient } from "@prisma/client";

const app = express();

app.use(express.json());

app.listen(4000, () => {
  console.log("Server running on port 4000");
});
