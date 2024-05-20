import Breadcrumb from '../../components/Breadcrumb';
import { IoPencil } from "react-icons/io5";
const MilkRecordsPage = () => {
  return (
    <>
      <div className="flex justify-between items-center mb-5">
        <Breadcrumb activePage="Milk Records" />
        <button className="bg-sky-900 text-white rounded-md px-10 py-2">Create Record</button>
      </div>

      <div className="shadow-md p-5">
        <table className="w-full">
          <thead className="text-left uppercase bg-gray-100">
            <tr className="">
              <th className="px-2 py-4">Name</th>
              <th>Date of Birth</th>
              <th>Type</th>
              <th>Date Created</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b">
              <td className="p-3">
                Jane Doe
              </td>
              <td className="p-3">
                02/03/2023
              </td>
              <td className="p-3">Milker</td>
              <td className="p-3">02/03/2023</td>
              <td >
                <span className="text-sky-900 px-10 py-2 cursor-pointer underline flex">
                  <IoPencil className="text-2xl mr-1" />
                  <span>Edit</span>
                </span>
              </td>
            </tr>
            <tr className="border-b">
              <td className="p-3">
                Jane Doe
              </td>
              <td className="p-3">
                02/03/2023
              </td>
              <td className="p-3">Milker</td>
              <td className="p-3">02/03/2023</td>
              <td>
                <span className="text-sky-900 px-10 py-2 cursor-pointer underline flex">
                  <IoPencil className="text-2xl mr-1" />
                  <span>Edit</span>
                </span>
              </td>
            </tr>

          </tbody>
        </table>
      </div>
    </>
  )
}

export default MilkRecordsPage