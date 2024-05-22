
import { BsGraphUpArrow, BsGraphDownArrow } from "react-icons/bs";
import Breadcrumb from '../../components/Breadcrumb';
import BarChart from '../../components/BarChart';

const HomePage = () => {
  
  return (
    <div >
      <Breadcrumb activePage="Home"/>
      <div className="cards flex justify-between gap-5">
        <div className="min-h-28 p-5 shadow flex-1 flex rounded-md bg-red-300 hover:bg-red-400 cursor-pointer text-white justify-between">
          <div className="flex gap-2">
            <h3 className="text-3xl bold">15</h3>
            <p className="text-xs">Cows</p>
          </div>
          <BsGraphDownArrow className="text-3xl"/>
        </div>

        <div className="min-h-28 p-5 shadow flex-1 flex rounded-md bg-sky-300 hover:bg-sky-400 cursor-pointer text-white justify-between">
          <div className="flex gap-2">
            <h3 className="text-3xl bold">150L</h3>
            <p className="text-xs">Milk Production</p>
          </div>
          <BsGraphUpArrow className="text-3xl" />
        </div>

        <div className="min-h-28 p-5 shadow flex-1 flex rounded-md bg-sky-400 hover:bg-sky-500 cursor-pointer text-white justify-between">
          <div className="flex gap-2">
            <h3 className="text-3xl bold">150L</h3>
            <p className="text-xs">Cost of Production</p>
          </div>
          <BsGraphDownArrow className="text-3xl" />
        </div>
        <div className="min-h-28 p-5 shadow flex-1 flex rounded-md bg-green-300 hover:bg-green-400 cursor-pointer text-white justify-between">
          <div className="flex gap-2">
            <h3 className="text-3xl bold">15,000</h3>
            <p className="text-xs">Profits</p>
          </div>
          <BsGraphUpArrow className="text-3xl" />
        </div>
      </div>

      <BarChart />
    </div>
  )
}

export default HomePage