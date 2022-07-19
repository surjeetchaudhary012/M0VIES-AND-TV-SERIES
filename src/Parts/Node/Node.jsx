import React from "react";
import { img_300, unavailable } from "../Relator/Relative";
import './Node.css';
import Badge from '@material-ui/core/Badge';
import NodeModal from "../NodeModal/NodeModal";

const Node = (
    {
        id,
        poster,
        title,
        date,
        media_type,
        vote_average,
      }
) => {
    return (
        <>
        <NodeModal media_type = {media_type} id = {id}>
        <Badge overlap="rectangular" badgeContent = {vote_average} 
        color = {vote_average > 6 ? "primary" : "secondary" } />
         <img 
         className="poster"
         src = {poster ? `${img_300}${poster}`: unavailable }
           alt = {title} />
           <b className="title" > {title} </b>
           <span className="details" > { media_type === "tv" ?
            "TV Series " : " Movie " } <span className="details" >{date} </span> 
           </span> 
        </NodeModal>
        </>
    )
}

export default Node;