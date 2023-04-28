const client = require("@sendgrid/client")
client.setApiKey(process.env.SENDGRID_API_KEY)

export default async function subscribe(req, res) {
  try {
    const data = {
      contacts: [{ email: req.body.email }],
      list_ids: [process.env.SENDGRID_MAILING_ID],
    }

    const request = {
      method: "PUT",
      url: "/v3/marketing/contacts",
      body: data,
    }

    const [response, body] = await client.request(request)

    console.log(response.statusCode)
    console.log(response.body)

    res.status(200).json({ message: "Success" })
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: error.message })
  }
}
