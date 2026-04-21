import { X } from "lucide-react"
import "./index.scss"
import type { ReactNode } from "react";
import type { AlertTypes } from "../../../types";
interface IProps {
   type:AlertTypes;  
   icon:ReactNode ;
   title:string;
   description?:string;   
   children?:ReactNode  

}

const Alert = ({ type,icon,title,description,children}: IProps) => {
    return (
        <div className={type} style={{marginBottom:"2rem"}}>
            <div className="alert-header">
                <div className="alert-title">
                    <span>{icon}</span>
                    
                    <h4>{title}</h4>
                </div>
                
                 <X  className="close" size={25}/> 
            </div>

            
            {children? children:<p>{description}</p>}


        </div>
    )
}

export default Alert