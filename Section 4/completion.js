import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
    apiKey: process.env.REACT_APP_OPENAI_API_KEY
})
const openai = new OpenAIApi(configuration)

export default async function (req, res) {
    if (!configuration.apiKey) {
        res.status(500).json({
            error: {
                message:  "OpenAI API key not configured, please follow instructions here : https://platform.openai.com/docs/libraries/node-js-library",
            }
        })
        return 
    }

    if (!req.body.input) {
        res.status(400).json({
            error: {
                message: "Please enter a valid input",
            }
        })
    }

    try {
        const response = await openai.createCompletion({
            model : "text-davinci-003",
            prompt: `Q: ${req.body.input}`, 
            max_tokens: 60,
            temperature: 1, 
            top_p: 1.0
        }) 

        console.log(response.data.choices[0].text)
        res.status(200).json({ result: response.data.choices[0].text })
    } catch (err) {
        console.error(err)
        res.status(500).json({
            error: {
                message:  err.message,
            }
        })
    }

}