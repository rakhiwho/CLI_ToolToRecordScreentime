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
  
Object.entries(data.tabs).forEach(([site, timeMs]) => {
  console.log(`${site} → ${formatTime(timeMs)}`);
});
}

function formatTime(ms) {
  const totalSeconds = Math.floor(ms / 1000);
  if(totalSeconds<60){
    return totalSeconds + "s"
  }
  const minutes = Math.floor(totalSeconds / 60);
  const hours = Math.floor(minutes / 60);

  const remainingMinutes = minutes % 60;
  const remainingSecs = totalSeconds % 60;

  if (hours > 0) {
    return `${hours}h ${remainingMinutes}m ${remainingSecs}s`;
  }
  return `${minutes}m ${remainingSecs}s`;
}