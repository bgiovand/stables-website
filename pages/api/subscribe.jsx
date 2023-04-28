const { Client } = require("@sendgrid/client")
const client = new Client()
client.setApiKey(process.env.SENDGRID_API_KEY)

export default async function handler(req, res) {
  console.log("hello")
  if (req.method === "POST") {
    try {
      const request = {
        method: "PUT",
        url: "/v3/marketing/contacts",
        body: {
          contacts: [{ email: `${req.body.email}` }],
          list_ids: [process.env.SENDGRID_MAILING_ID],
        },
      }
      const [response] = await client.request(request)
      res.status(200).send({
        message:
          "Your email has been succesfully added to the mailing list. Welcome 👋",
      })
    } catch (error) {
      res.status(500).send({
        message:
          "Oups, there was a problem with your subscription, please try again or contact us",
      })
    }
  }
}