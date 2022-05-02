const axios = require("axios");
axios
  .get("https://backend-deliveroo-project.herokuapp.com/")
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    console.log(error);
  });
