import { createContext, useState } from "react";
import {
  getCSV,
  getUsers,
} from "../services/services";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [dataa, setDataa] = useState([]);
  const [searchUser, setSearchUser] = useState("");


  const getMaleUsers = () => {
    getUsers(setDataa, {
      gender: "male",
    });
  };
  const getFemaleUsers = () => {
    getUsers(setDataa, {
      gender: "female",
    });
  };
  const getAnyUsers = () => {
    getUsers(setDataa);
  };
  const handleDownload = () => {
    getCSV();
  };

  const handlePageLoad = (data) => {
    setDataa(data);
  };


  return (
    <UserContext.Provider
      value={{
        dataa,
        handleDownload,
        getMaleUsers,
        handlePageLoad,
        getFemaleUsers,
        getAnyUsers,
        searchUser,
        setSearchUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
