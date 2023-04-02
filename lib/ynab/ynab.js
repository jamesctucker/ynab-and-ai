import ynab from "ynab";

const accessToken = useRuntimeConfig().ynabAccessToken;
const ynabAPI = new ynab.API(accessToken);

export default ynabAPI;
