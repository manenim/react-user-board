import { createContext, useState } from "react";
import { getAllUsers, getCSV, getFemaleUsers, getMaleUsers } from "../services";


const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [dataa, setDataa] = useState([]);
  
  const handleData = () => { 
      getMaleUsers(setDataa)
  }
  const handleData1 = () => { 
      getFemaleUsers(setDataa)
  }
  const handleData2 = () => { 
      getAllUsers(setDataa)
  }
  const handleDownload = () => { 
      getCSV()
  }

  const handlePageLoad = (data) => { 
      setDataa(data)
  }



  

  // const paginate = pageNumber => setCurrentPage(pageNumber);
   

  
    
    return (
        <UserContext.Provider value={{ dataa, handleDownload, handleData, handlePageLoad, handleData1, handleData2 }}>
            {children}
        </UserContext.Provider>
    )

}


export default UserContext;