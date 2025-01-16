import "./SubBar.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faFileUpload,faFileAlt, faFolderPlus} from "@fortawesome/free-solid-svg-icons"
import { Link, useNavigate } from "react-router-dom"
import { shallowEqual, useDispatch, useSelector } from "react-redux"
import { changeFolder } from "../../../redux/actionCreators/fileFoldersActionCreators"

const SubBar = ({setIsCreateFolderModelOpen}) => {
  
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {currentFolder, currentFolderData, userFolders} = useSelector((state) => ({
    currentFolder: state.fileFolders.currentFolder,
    currentFolderData: state.fileFolders.userFolders.find(
      (folder) => folder.docId == state.fileFolders.currentFolder
    ),
    userFolders: state.fileFolders.userFolders,
  }),shallowEqual);



  const handleNavigate = (link, id) => {
    navigate(link);

    dispatch(changeFolder(id));
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white  py-2 overflow-hidden">
      <nav className="ms-5" aria-label="breadcrumb">
        <ol class="breadcrumb d-flex align-items-center">
          {currentFolder != "root" ? (
            <>
              <button
                onClick={() => handleNavigate("/dashboard", "root")}
                className="breadcrumb-item btn btn-link text-decoration-none"
                >
                  Root
              </button>
              {currentFolderData?.data.path.map((folder,index) => (
                <button
                  key={index}
                  className="breadcrumb-item btn btn-link text-decoration-none"
                  onClick={() => 
                    handleNavigate(
                      `/dashboard/folder/${
                        userFolders.find((fldr) => folder == fldr.docId).docId
                      }`,
                      userFolders.find((fldr) => folder == fldr.docId).docId
                    )
                  }
                >
                  {userFolders.find((fldr) => folder == fldr.docId).data.name}
                </button>
              ))}
              <li className="breadcrumb-item active">
                {currentFolderData?.data.name}
              </li>
            </>
          ):
          (
            <>
              <li className="breadcrumb-item active">Root</li>
            </>
          )}
        </ol>
      </nav>
     
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