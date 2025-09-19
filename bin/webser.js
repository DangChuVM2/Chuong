#!/usr/bin/env node

const express = require("express");
const path = require("path");
const serveIndex = require("serve-index");
const { Command } = require("commander");

const program = new Command();

program
  .name("webser")
  .description("Simple CLI static web server")
  .option("-p, --port <number>", "Port to run server", "8080")
  .option("-d, --dir <path>", "Directory to serve", process.cwd());

program.parse(process.argv);

const options = program.opts();
const port = parseInt(options.port, 10);
const rootDir = path.resolve(options.dir);

const app = express();
app.use(express.static(rootDir));
app.use(serveIndex(rootDir, { icons: true }));

app.listen(port, () => {
  console.log(`🚀 Server running at: http://localhost:${port}`);
  console.log(`📂 Serving directory: ${rootDir}`);
});
