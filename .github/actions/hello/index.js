const core = require("@actions/core");

async function helloAction() {
  const whoToGreet = core.getInput("who-to-greet");
  console.log(`Hello ${whoToGreet}!`);
}

helloAction()
  .catch(error => core.setFailed(error.message));