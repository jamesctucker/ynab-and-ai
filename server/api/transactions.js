import ynabAPI from "../../lib/ynab/ynab.js";

export default defineEventHandler(async (event) => {
  const budgetId = "last-used";
  const query = getQuery(event);
  const sinceDate = query.since;

  const response = await ynabAPI.transactions.getTransactions(
    budgetId,
    sinceDate
  );
  const transactions = response.data.transactions;

  return {
    transactions: transactions,
  };
});
