const core = require("@actions/core");

function helloAction() {
  const whoToGreet = core.getInput("who-to-greet");
  console.log(`Hello ${whoToGreet}!`);
}

helloAction()
  .catch(error => core.setFailed(error.message));