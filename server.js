import express from "express";
import cors from "cors";
import fs from "fs";
import os from "os";
import path from "path";

const app = express();

const dir = path.join(os.homedir(), ".todos-cli");
const file = path.join(dir, "data.json");

app.use(cors());
app.use(express.json());

app.post("/update", (req, res) => {
  console.log(res)
  const { tabTimes } = req.body;

  if (!tabTimes || typeof tabTimes !== "object") {
    return res.status(400).send("Invalid data");
  }

  // ✅ ENSURE DIRECTORY EXISTS
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  const newData = {
    updatedAt: Date.now(),
    tabs: tabTimes
  };

  // ✅ OVERWRITE FILE (NO READ)
  fs.writeFileSync(file, JSON.stringify(newData, null, 2));

  res.send("OK");
});

app.listen(4545, () => {
  console.log("📡 Server listening on http://localhost:4545");
});
