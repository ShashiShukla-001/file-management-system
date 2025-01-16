import React from "react";
import "./ShowItems.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile, faFolder } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const ShowItems = ({title, items, type,}) => {

    const navigate = useNavigate();

    const handleDbClick = (itemId) => {
        if(type == "folder")
        {
            navigate(`/dashboard/folder/${itemId}`);
        }
        else{
            alert("file clicked");
        }
    }

    return(
        <div className="w-100">
            <h4 className="text-center border-bottom">{title}</h4>
            <div className="row gap-2 p-4 flex-wrap">
                {items.map((item,index) => {
                    return <p 
                    key={index*55} 
                    className="col-md-2  border py-3 text-center d-flex flex-column"
                    onDoubleClick={() => handleDbClick(item.docId)}
                    >
                        {
                            type=="folder"? (
                                <FontAwesomeIcon icon={faFolder} 
                                className="mb-3" size="3x"/>
                            ):
                            (
                                <FontAwesomeIcon icon={faFile} 
                                className="mb-3" size="3x"/>
                            )
                        }
                        {item.data && <>{item.data.name}</>}</p>
                } )}
            </div>
        </div>
    )
}

export default ShowItems;