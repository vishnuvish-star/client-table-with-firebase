"use client";

import { useState } from "react";
import { useContext } from "react";
import { TableContext } from "./shared/tableContext";

const ClientTable = ({ textColor, tableData_text_center }) => {
  const [search, setSearch] = useState("");
  const [sorted, setSorted] = useState("");
  const [active, setActive] = useState("");

  // console.log(search);
  const { data, randomKey } = useContext(TableContext);
  // console.log(sorting(""));
  return (
    <>
      <div className="m-6 ">
        <h2 className={`my-6 text-2xl text-black`}>Client Table</h2>
        {/* input fields */}
        <div className="flex justify-between  w-[100%] ">
          <div>
            {/* search input */}
            <div className="join ">
              <input
                className="input  join-item  "
                placeholder="Search.."
                onChange={(e) => setSearch(e.target.value)}
              />
              <button className="btn join-item rounded-r-full">Search</button>
            </div>

            <div className="dropdown dropdown-right dropdown-end ml-10">
              <label tabIndex={0} className="btn m-1">
                Sort by
              </label>
              <ul
                tabIndex={0}
                className="dropdown-content menu p-1 shadow bg-base-100 rounded-box w-32"
              >
                <li>
                  <a onClick={() => setSorted()}>Active</a>
                </li>
                <li>
                  <a onClick={() => setActive()}>Inactive</a>
                </li>
              </ul>
            </div>

            {/* exit button */}
          </div>
          <button className="btn m-2 bg-green-400 hover:text-gray-500 ">
            Done
          </button>
        </div>
        {/* table */}

        <div>
          <table className="table table-md border-2 border-gray-200 drop-shadow-md  ">
            {/* head */}
            <thead>
              <tr className={`bg-neutral-content text-base text-black`}>
                <th></th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Contact Number</th>
                <th>Employer</th>
                <th>Role</th>
                <th>Joining Date</th>
                <th>DOB</th>
                <th>
                  clientStatus
                  <span
                    className="pl-1 cursor-pointer text-base"
                    onClick={() => setSorted()}
                  >
                    ⇧
                  </span>
                  <span
                    className="p-1 cursor-pointer text-base"
                    onClick={() => setActive()}
                  >
                    ⇩
                  </span>
                </th>
                <th>clientCategory</th>
                <th>Additional Info</th>
                <th>Active Placements</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody className="drop-shadow-md ">
              {/* data showing */}
              {data &&
                data
                  .sort((a, b) => {
                    return sorted === ""
                      ? a
                      : a.clientStatus > b.clientStatus
                      ? 1
                      : -1;
                  })
                  .sort((a, b) => {
                    return active === ""
                      ? a
                      : a.clientStatus < b.clientStatus
                      ? 1
                      : -1;
                  })

                  .filter((item) => {
                    return search.toLowerCase() === ""
                      ? item
                      : item.clientDisplayName.toLowerCase().includes(search);
                  })
                  .map((item, index) => {
                    return (
                      <>
                        <tr className="hover " key={Date.now()}>
                          <th className=" px-2">{index + 1}</th>
                          <td className="py-4 px-6 text-sm font-medium  ">
                            {item.companyName}
                          </td>
                          <td>{item.clientId}</td>
                          <td>{item.email}</td>
                          <td>{item.contactNumber}</td>
                          <td className={tableData_text_center}>
                            {item.netTerms}
                          </td>
                          <td className={tableData_text_center}>
                            {item.jobTerminationNotice.value}
                          </td>
                          <td className={tableData_text_center}>
                            {item.clientStatus.value}
                          </td>
                          <td className={tableData_text_center}>
                            {item.clientCategory.value}
                          </td>
                          <td className={tableData_text_center}>
                            {item.additionalInfo}
                          </td>
                          <td className={tableData_text_center}>
                            {item.activePlacements}
                          </td>
                          <td className={tableData_text_center}>
                            <span className="p-2 bg-gray-300 rounded">
                              {item.action}
                            </span>
                          </td>
                        </tr>
                      </>
                    );
                  })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default ClientTable;
