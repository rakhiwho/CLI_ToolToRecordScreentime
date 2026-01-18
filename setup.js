#!/usr/bin/env node
import fs from "fs";
import path from "path";
import os from "os";

const dir = path.join(os.homedir(), ".todos-cli");
const file = path.join(dir, "data.json");

if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir, { recursive: true });
}

if (!fs.existsSync(file)) {
  fs.writeFileSync(
    file,
    JSON.stringify(
      {
        updatedAt: Date.now(),
        tabs: {}
      },
      null,
      2
    )
  );
}

console.log("✔ CLI storage initialized");
