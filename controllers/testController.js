import db from "../db.js";

import { ObjectId } from "mongodb";
import bcrypt from 'bcrypt';
import jwt from "jsonwebtoken";

export async function testGet(req, res) {

    res.status(200).send("teste feito com sucesso!");
}
