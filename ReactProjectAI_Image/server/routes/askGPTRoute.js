import express  from "express";
import * as dotenv from 'dotenv'
import { Configuration, OpenAIApi } from "openai";

dotenv.config()

const configuration = new Configuration({
    apiKey: process.env.OPEN_API_KEY,
  });

const openai = new OpenAIApi(configuration);

const router = express.Router()

router.route("/").get((req, res) => {
    res.send("Hello There,  GPT Route created by Gagan Baghel with ❤️");
});


router.route("/").post(async (req, res) => {
    try {
        const {prompt, wordLimit } = req.body;
        const max_tokens = Number(wordLimit) || 100 ;

        const aiTextResponse = await openai.createCompletion({
            model: "text-davinci-003",
            prompt,
            max_tokens,
            temperature:0.2,
        })

        const TextResponse = await aiTextResponse.data.choices[0].text;

        res.status(200).json({ text: TextResponse });

    } catch (error) {
        res.status(500).send('Something went wrong');
    }
    
});
  

export default router;