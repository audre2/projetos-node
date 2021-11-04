const express = require("express");
const { SecretManagerServiceClient } = require("@google-cloud/secret-manager");
const app = express();
const PORT = 3000;
const name = "projects/1099025082466/secrets/poc-teste/versions/1";

app.listen(PORT, async () => {
  // Instantiates a client
  const client = new SecretManagerServiceClient();

  async function getSecretValue() {
    const [response] = await client.accessSecretVersion({
      name: name,
    });

    const responsePayload = response.payload.data.toString("utf8");
    console.info(`Payload: ${responsePayload}`);
  }

  getSecretValue();
});
