import "./SubBar.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faFileUpload,faFileAlt, faFolderPlus} from "@fortawesome/free-solid-svg-icons"

const SubBar = ({setIsCreateFolderModelOpen}) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white px-5 mt-2 py-2 overflow-hidden">
      <p className="small">Root</p>
      <ul className="navbar-nav ms-auto me-5">
        <li className="nav-item mx-2">
          <button className="btn btn-outline-dark">
          <FontAwesomeIcon icon={faFileUpload} /> &nbsp;
          upload file
          </button>
        </li>
        <li className="nav-item mx-2">
          <button className="btn btn-outline-dark mx-2">
          <FontAwesomeIcon icon={faFileAlt} />  {/* Create file */} 
            Create File
          </button>
        </li>
        <li className="nav-item ms-2">
          <button className="btn btn-outline-dark"
          onClick={() => {setIsCreateFolderModelOpen(true)}}>
          <FontAwesomeIcon icon={faFolderPlus} />  {/* Create folder */}

           Create Folder
          </button>
        </li>
      </ul>
    </nav>
  )
}

export default SubBar