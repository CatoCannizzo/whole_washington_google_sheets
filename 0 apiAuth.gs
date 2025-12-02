function getApiOptions() {
  const apiToken = 'copy/paste api token here';
  const options = { // credits to user5868253 on Stackoverflow
    "headers" : {
      "Content-Type": "application/json",
      "OSDI-API-Token": apiToken
    }
  };

  return options;
}
