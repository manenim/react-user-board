import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { FiDownloadCloud } from "react-icons/fi";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import UserContext from "../../context/UserContext";
import supportedCountries from "../../data/supportedCountries";
import Switch from "../switch/Switch";

import User from "../user/User";
import UsercardDetails from "../usercardDetails/UsercardDetails";

const UserCard = () => {
  const { dataa, handlePageLoad, handleDownload, getAnyUsers } =
    useContext(UserContext);
  const [showCountry, setShowCountry] = useState(false);

  // eslint-disable-next-line no-unused-vars
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(3);

  console.log("neeew", dataa);

  const [showDetails, setShowDetails] = useState(false);
  const [user, setUser] = useState({});

  const [selectedCountry, setSelectedCountry] = useState("");

  const handleCountryChange = (event) => {
    setSelectedCountry(event.target.value);
  };

  const handleDetails = () => {
    setShowDetails((show) => !show);
    console.log(showDetails);
  };

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BASE_URL}/?results=50`)
      .then((res) => {
        // get current post
        const indexOfLastPost = currentPage * postsPerPage; // 1 * 10 = 10
        const indexOfFirstPost = indexOfLastPost - postsPerPage; // 10 - 10 = 0
        const dataaa = res.data.results?.slice(
          indexOfFirstPost,
          indexOfLastPost
        ); // 0 to 10
        handlePageLoad(dataaa);
        // handlePageLoad(res.data.results)
      })
      .catch((err) => console.log(err));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="md:w-full lg:w-[50%]  relative bg-light mt-[10%] lg:mr-12 rounded-3xl overflow-hidden flex">
      <div
        className={`wrapper w-[100%] ${
          showDetails ? "-translate-x-[108%] opacity-0" : "translate-x-0"
        } ease-out duration-200 -z-1 mt-20`}
      >
        <h2 className="font-[600] w-[90%] px-[5%] text-[1.4rem]">All Users</h2>

        {/* FILTER  */}
        <h3 className="text-[.9rem] w-[90%] pl-[5%]">Filter by</h3>
        <div className="filter-options w-[90%] md:px-[5%] mt-4 flex flex-col md:flex-row items-center justify-between">
          <div className="rounded-[50px] flex items-center pl-4 bg-lightInput">
            <AiOutlineSearch className="text-2xl mr-2 text-[rgba(0,0,0,.5)]" />
            <input
              type="text"
              className="w-[80%] outline-none border-none text-[rgba(0,0,0,1)] bg-transparent py-2 md:py-4"
              placeholder="Find a user"
            />
          </div>
          
          <div className="flex items-center">
          <select
            id="countries"
            className="bg-lightInput rounded-[50px] border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block mt-4 md:mt-0 py-2 md:py-2.5 px-2 md:px-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            value={selectedCountry}
            onChange={handleCountryChange}
          >
            <option value="DEFAULT">
              Choose a country
            </option>
            {supportedCountries.map((country, index) => (
              <option key={index} value={country.code}>
                {country.name}
              </option>
            ))}
          </select>
          <div className="ml-4 md:ml-8 mt-3 md:mt-0">
            <Switch setShowCountry={setShowCountry} showCountry={showCountry} />
          </div>
          </div>
          </div>

        {/* USERS  */}

        <div className="users mt-10 bg-white ">
          {dataa ? (
            dataa.map((user, index) => {
              return (
                <User
                  key={index}
                  setUser={setUser}
                  showCountry={showCountry}
                  handleDetails={handleDetails}
                  user={user}
                />
              );
            })
          ) : (
            <h1>loading...</h1>
          )}
        </div>

        <div className="cta w-[90%] pl-[5%] flex flex-col md:flex-row items-center justify-between mt-8 mb-4">
          <button
            onClick={handleDownload}
            className="download mb-4 md:mb-0 text-white flex items-center py-3 px-4 rounded-full bg-purplish"
          >
            <FiDownloadCloud className="mr-2 text-[1.5rem]" />
            <p>Download Results</p>
          </button>
          <div>
            <button
              onClick={getAnyUsers}
              className="prev bg-greyish py-2 px-4 rounded-lg mr-4"
            >
              <HiChevronLeft className="text-[1.5rem]" />
            </button>
            <button
              onClick={getAnyUsers}
              className="next bg-dark py-2 px-4 rounded-lg"
            >
              <HiChevronRight className="text-[1.5rem] text-white" />
            </button>
          </div>
        </div>
      </div>
      <UsercardDetails
        user={user}
        showDetails={showDetails}
        setShowDetails={setShowDetails}
      />
    </div>
  );
};

export default UserCard;
