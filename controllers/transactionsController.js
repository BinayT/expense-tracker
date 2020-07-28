// @desc -- GETS ALL TRANSACTIONS
// @router -- /api/v1/transactions
// @access -- public
exports.getTransactions = (req, res, next) => {
  res.send("GET Transactions");
};

// @desc -- ADDS TRANSACTION
// @router -- /api/v1/transactions
// @access -- public
exports.addTransaction = (req, res, next) => {
  res.send("POST Transaction");
};

// @desc -- DELETES TRANSACTION
// @router -- /api/v1/transactions:id
// @access -- public
exports.deleteTransaction = (req, res, next) => {
  res.send("DELETE Transaction");
};
