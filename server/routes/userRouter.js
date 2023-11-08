const userRouter = require('express').Router();
const {
    getUser,
    createUser,
    updateOneUser,
    deleteOneUser
} = require("../controllers/users");

userRouter.route("/login").post(getUser);

userRouter.route("/")
.get(getUser)
.post(createUser)
.delete(deleteOneUser)

userRouter
.route("/:userId")
.get(getUser)
.put(updateOneUser)
.delete(deleteOneUser);

module.exports = userRouter;