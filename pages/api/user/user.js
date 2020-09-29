import { connectToDatabase } from "../../../util/mongodb";

export default async (req, res) => {
    const { db } = await connectToDatabase();
    //console.log(req.body);
    const { userName, userLastName} = req.body;

    const user = await db
    .collection("user")
    .insertOne({firstName: userName, lastName: userLastName});

    res.json({message: 'User created'}); 
    
};