const environment = {
  production: process.env.REACT_APP_PRODUCTION === 'true',
  baseUrl: '#{BASE_URL}#' // develop Base URL
  // client_id: process.env.REACT_APP_CLIENT_ID as string,
  // client_secret: process.env.REACT_APP_CLIENT_SECRET as string,
};
export default environment;
