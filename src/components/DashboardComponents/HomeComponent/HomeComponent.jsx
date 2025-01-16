import React from 'react'
import ShowItems from '../../ShowItems/ShowItems';
import { shallowEqual, useSelector } from 'react-redux';


const HomeComponent = () => {
    const folders = ["new folder", "New folder 2"];
    const files = [{name:"New file"},{name:"New File 2"}];

    const {isLoading, userFolders} = useSelector(
      (state) => ({
        isLoading: state.fileFolders.isLoading,
        userFolders: state.fileFolders.userFolders.filter((folder) => folder.data.parent == "root"),
      }),
      shallowEqual
    );
  return (
   <div className="col-md-12 w-100">
        {
          isLoading? (
            <h1 className="display-1 my-5 text-center">Loading...</h1>
          ):
          (<>
            <ShowItems title={"Created Folders"} type="folder" items={userFolders}/>
            <ShowItems title={"Created Files"} type="file" items={files}/>
          </>)
        }
        
   </div>
  )
}

export default HomeComponent;
