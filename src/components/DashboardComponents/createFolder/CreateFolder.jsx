import {faTimes} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import { createFolder } from '../../../redux/actionCreators/fileFoldersActionCreators';

const CreateFolder = ({setIsCreateFolderModelOpen}) => {  

    const [folderName, setFolderName] = useState("");

    const {userFolders,user,currentFolder, currentFolderData} = useSelector(
        (state) => ({
        userFolders : state.fileFolders.userFolders,
        user: state.auth.user,
        currentFolder: state.fileFolders.currentFolder,
        currentFolderData: state.fileFolders.userFolders.find(
            (folder) => folder.docId == state.fileFolders.currentFolder),
    }), shallowEqual);

    const dispatch = useDispatch();

    const checkFolderAlreadyPresent = (name) => {
            const folderPresent = userFolders
            .filter((folder) => folder.data.parent == currentFolder)
            .find((folder) => folder.data.name == name );
            if(folderPresent) {
                return true;
            }
            else {
                return false;
            }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(folderName){
            if(folderName.length > 3)
            {
                if(!checkFolderAlreadyPresent(folderName)){
                  
                    const data = {
                        createdAt: new Date(),
                        name: folderName,
                        userId: user.uid,
                        createdBy: user.displayName,
                        path: currentFolder == 'root' 
                            ? [] 
                            : [...currentFolderData?.data.path, currentFolder],
                        parent: currentFolder,
                        lastAccessed: null,
                        updatedAt: new Date(),
                    }
                    dispatch(createFolder(data));
                }
                else{
                    alert("folder already present");
                }
                
            }
            else{
                alert("Folder name must contain at least 3 characters");
            }
        }
        else{
            alert("Folder name cannot be empty");
        }
    }



    return (  
        <div className="col-md-12  position-fixed top-0 left-0 w-100 h-100" 
        style={{ background: "rgba(0, 0, 0, 0.4)", zIndex:9999 }}>  
            <div className="row align-items-center justify-content-center">  
                <div className="col-md-4 mt-5 bg-white rounded p-4">  
                    <div className="d-flex justify-content-between">  
                        <h4>Create Folder</h4>  
                        <button className="btn" onClick={()=> {setIsCreateFolderModelOpen(false)}}>  
                            <FontAwesomeIcon icon={faTimes} className="text-black" size="sm" />  
                        </button>  
                    </div>  
                <hr />  
                <div className="d-flex flex-column align-items-center">  
                    <form className="mt-3 w-100 " onSubmit={handleSubmit}>  
                        <div className="form-group">
                            <input type="text" 
                            className='form-control'
                            id='folderName'
                            placeholder='Folder Name'
                            value={folderName}
                            onChange={(e) => {setFolderName(e.target.value)}}
                            />
                        </div>

                        <button className='btn btn-primary mt-5 form-control'>
                            Create Folder
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </div>
    )};

    export default CreateFolder;