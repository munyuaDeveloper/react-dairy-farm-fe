import { useEffect, useState } from "react";
import Breadcrumb from "../../components/Breadcrumb";
import { IoPencil } from "react-icons/io5";
import { fetchMilkRecords } from "../../services/CowRecordService";

import Moment from "react-moment";


const MilkRecordsPage = () => {
  
  const [records, setRecords] = useState([]);
  useEffect(() => {
    fetchData()
  }, []);

  const fetchData = async()=> {
    const data = await fetchMilkRecords();
    setRecords(data.data);
  }

  return (
    <>
      <div className="flex justify-between items-center mb-5">
        <Breadcrumb activePage="Cow Records" />
        <button className="bg-sky-900 text-white rounded-md px-10 py-2">
          Create Record
        </button>
      </div>

      <div className="shadow-md p-5">
        <table className="w-full">
          <thead className="text-left bg-gray-100">
            <tr className="">
              <th className="px-2 py-4">Cow Number</th>
              <th className="px-2 py-4">Name</th>
              <th>Date Recorded</th>
              <th>No. of liters</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {records.length ? (
              records.map((record) => (
                <tr className="border-b" key={record._id}>
                  <td className="p-3">{record.cow.cow_control_number}</td>
                  <td className="p-3">{record.cow.name}</td>
                  <td className="p-3">
                    <Moment format="YYYY-MM-DD">{record.date}</Moment>
                  </td>
                  <td className="p-3">{record.liters_per_day}</td>
                  <td>
                    <span className="text-sky-900 px-10 py-2 cursor-pointer underline flex">
                      <IoPencil className="text-2xl mr-1" />
                      <span>Edit</span>
                    </span>
                  </td>
                </tr>
              ))
            ) : (
              <tr className="text-center text-sky-800">
                <td colSpan={7}>No records yet!</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default MilkRecordsPage;
