import ynabAPI from "../../lib/ynab/ynab.js";

export default defineEventHandler(async (event) => {
  const budgetId = "last-used";
  const sinceDate = "2023-03-28";

  const response = await ynabAPI.transactions.getTransactions(
    budgetId,
    sinceDate
  );
  const transactions = response.data.transactions;

  return {
    transactions: transactions,
  };
});
