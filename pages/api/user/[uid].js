import { connectToDatabase } from "../../../util/mongodb";
import { ObjectID } from "mongodb";

export default async (req, res) => {
  const { db } = await connectToDatabase();
  const { uid } = req.query;

  if (req.method == "PUT") {
    const { firstName, lastName } = req.body;
    await db
      .collection("user")
      .findOneAndUpdate(
        { _id: new ObjectID(uid) },
        { $set: { firstName, lastName } }
      );
    res.json({ message: "User Updated" });
  } else if (req.method == "DELETE") {
    await db
      .collection("user")
      .deleteOne( {_id: new ObjectID(uid)} );
    res.json({ message: "User Deleted" });
  } else {
    const user = await db
      .collection("user")
      .findOne({ _id: new ObjectID(uid) });
    res.json(user);
  }
};
