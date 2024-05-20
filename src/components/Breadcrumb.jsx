import {Link} from 'react-router-dom';
import { FaHome, FaChevronRight } from 'react-icons/fa'

const Breadcrumb = ({activePage}) => {
  return (
      <nav className="flex mb-5" aria-label="Breadcrumb">
          <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse text-sky-700">
              <li className="inline-flex items-center">
                  <Link to="/dashboard" className="inline-flex items-center text-sm font-medium hover:text-sky-900">
                      <FaHome className="mr-1"/>
                      Dashboard
                  </Link>
              </li>
              <li aria-current="page">
                  <div className="flex items-center">
                      <FaChevronRight className="mr-1"/>
                      <span className="text-sm font-medium">{activePage}</span>
                  </div>
              </li>
          </ol>
      </nav>

  )
}

export default Breadcrumb