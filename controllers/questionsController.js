import db from "../db.js";
import chalk from "chalk";

export async function getQuestions(req, res) {

    try{
        const questions = await db.collection("questions").find().toArray();
        res.status(200).send(questions);
    }catch(e){
        console.log(chalk.red.bold(`\nWARNING: get questions failed! \nError: \n`), e);
        res.status(500).send(e);
    }
}
