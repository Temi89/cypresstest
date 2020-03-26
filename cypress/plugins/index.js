module.exports = (on) => {
  const percyHealthCheck = require('@percy/cypress/task');
  on('task', percyHealthCheck);
};
