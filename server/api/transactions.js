import ynab from "ynab";

const accessToken = useRuntimeConfig().ynabAccessToken;
const ynabAPI = new ynab.API(accessToken);

export default defineEventHandler(async (event) => {
  const budgetsResponse = await ynabAPI.budgets.getBudgets();
  const budgets = budgetsResponse.data.budgets;

  return {
    budget: budgets[0],
  };
});
