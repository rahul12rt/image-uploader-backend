import profileModel from "../models/profileModel.js";

//add user items
const addUserItem = async (req, res) => {
  const userItem = new profileModel({
    name: req.body.name,
    preview: req.body.preview,
    size: req.body.size,
    type: req.body.type,
  });
  try {
    await userItem.save();
    res.json({ sucess: true, message: "item added succesfully" });
  } catch (error) {
    console.log(error);
    res.json({ sucess: false, message: error });
  }
};

//get all user list items
const getUser = async (req, res) => {
  try {
    const user = await profileModel.find({});
    res.json({ sucess: true, data: user });
  } catch (error) {
    console.log(error);
    res.json({ sucess: false, message: error });
  }
};
export { addUserItem, getUser };
