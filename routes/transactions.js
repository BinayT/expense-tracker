const router = require("express").Router();
const { getTransactions } = require("../controllers/transactionsController");

router.route("/").get(getTransactions);

module.exports = router;
