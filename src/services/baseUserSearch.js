import axios from "axios";

const API_BASE_URL = "https://randomuser.me";

const baseUserSearch = async ({
  gender,
  country_code,
  page,
  results_returned,
  format,
}) => {
  try {
    const url = "/api/";

    const config = {
      method: "GET",
      url,
      baseURL: API_BASE_URL,
      params: {
        gender,
        nat: country_code,
        results: results_returned || 3,
        page: page || 1,
        format: format || "JSON",
      },
    };

    const { data: response } = await axios(config);

    if (format) return response;

    return response.results;
  } catch (err) {
    console.log("BASE_USER_SEARCH:", err);
    throw err;
  }
};

export default baseUserSearch;
