import fs from "fs";
import os from "os";
import path from "path";

export default function todayCommand() {
  const file = path.join(os.homedir(), ".todos-cli", "data.json");

  if (!fs.existsSync(file)) {
    console.log("No usage data found yet.");
    return;
  }

  const data = JSON.parse(fs.readFileSync(file, "utf-8"));

  console.log("Today's usage:");
  console.log(data.tabs);
}
  