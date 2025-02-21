const express = require("express");
const router = express.Router();
const { postData, getOperationCode } = require("../controllers/bfhlController");

router.post("/", postData);
router.get("/", getOperationCode);

module.exports = router;
