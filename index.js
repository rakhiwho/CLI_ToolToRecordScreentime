#!/usr/bin/env node
import todayCommand from "./commands/today.js";
import { Command } from "commander";
import './server.js'


const program = new Command();

program
  .name("todos")
  .description("Track Chrome usage")
  .version("1.0.0");

program
  .command("today")
  .description("Show today's Chrome usage")
  .action(todayCommand);

program.parse(process.argv);
