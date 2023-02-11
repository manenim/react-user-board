import baseUserSearch from "./baseUserSearch";

/*
 interface params {
  gender : string;
  country_code : string;
  page : Number;
 }
*/

export const getUsers = async (setData, params) => {
  try {
    const users = await baseUserSearch({
      ...params,
    });

    setData(users);
    return users;
  } catch (err) {
    console.log(err);
  }
};


export const getCSV = async (setData) => {

  try {
    const csv = await baseUserSearch({
      format: "csv",
    });

    const blob = new Blob([csv], { type: "text/csv" });

    // Create an object URL from the Blob
    const objectURL = URL.createObjectURL(blob);

    // create a link element and trigger a download
    const link = document.createElement("a");
    link.download = "users.csv";
    link.href = objectURL;

    
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

  } catch (err) {
    throw err;
  }
};
