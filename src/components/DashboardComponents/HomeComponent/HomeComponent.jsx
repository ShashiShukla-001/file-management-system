import React from 'react'
import ShowItems from '../../ShowItems/ShowItems';

const HomeComponent = () => {
    const folders = ["new folder", "New folder 2"];
    const files = ["New file", "New File 2"];
  return (
   <div className="col-md-12 w-100">
        <ShowItems title={"Created Folders"} items={folders}/>
        <ShowItems title={"Created Files"} items={files}/>
   </div>
  )
}

export default HomeComponent;