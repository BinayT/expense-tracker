const Transaction = require("../models/Transaction");

// @desc -- GETS ALL TRANSACTIONS
// @router -- /api/v1/transactions
// @access -- public
exports.getTransactions = async (req, res, next) => {
  try {
    const transactions = await Transaction.find();
    return res.status(200).json({
      success: true,
      count: transactions.length,
      data: transactions,
    });
  } catch (err) {
    res.send(500).json({
      success: false,
      error: "Server error",
    });
  }
};

// @desc -- ADDS TRANSACTION
// @router -- /api/v1/transactions
// @access -- public
exports.addTransaction = async (req, res, next) => {
  res.send("POST Transaction");
};

// @desc -- DELETES TRANSACTION
// @router -- /api/v1/transactions/:id
// @access -- public
exports.deleteTransaction = async (req, res, next) => {
  res.send("DELETE Transaction");
};
