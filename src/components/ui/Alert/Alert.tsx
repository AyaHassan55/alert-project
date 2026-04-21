import { BellRing,X } from "lucide-react"
import "./index.scss"
interface IProps {


}

const Alert = ({ }: IProps) => {
    return (
        <div className="alert-danger">
            <div className="alert-header">
                <div className="alert-title">
                    <span><BellRing  /></span>
                    
                    <h4>Alert Title</h4>
                </div>
                
                 <X  className="close" size={25}/> 
            </div>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, doloremque.</p>


        </div>
    )
}

export default Alert