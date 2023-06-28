const { getAllUsers, createUser, updateUser, deleteUser } = require('../controllers/users.controller');

const router = require('express').Router();

router.get("/", getAllUsers);

router.post("/", createUser);

router.put("/:id", updateUser);

router.delete("/:id", deleteUser);

module.exports = router;