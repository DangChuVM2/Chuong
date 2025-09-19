#!/usr/bin/env node

const express = require("express");
const path = require("path");
const { Command } = require("commander");

const program = new Command();

program
  .option("-p, --port <number>", "Port để chạy server", "8080")
  .option("-d, --dir <path>", "Thư mục web root", process.cwd());

program.parse(process.argv);

const options = program.opts();
const port = parseInt(options.port, 10);
const rootDir = path.resolve(options.dir);

const app = express();
app.use(express.static(rootDir));

app.listen(port, () => {
  console.log(`📂 Web server chạy tại http://localhost:${port}`);
  console.log(`📁 Serving files từ: ${rootDir}`);
});
