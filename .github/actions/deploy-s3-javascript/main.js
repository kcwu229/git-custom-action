const core = require("@actions/core");
const github = require("@actions/github");
const exec = require("child_process").exec;

async function run() {
  core.notice("Hello from deploy-s3-javascript action!");
}

run;
