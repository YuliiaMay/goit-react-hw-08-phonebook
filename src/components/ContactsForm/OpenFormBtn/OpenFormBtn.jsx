import { AiOutlinePlusCircle, AiOutlinePlus } from "react-icons/ai";
import { OpenFormButton } from "./OpenFormBtn.styled";

const OpenFormBtn = ({ open, isOpen }) => {

    return (
        <OpenFormButton onClick={open}>
            {
                !isOpen && <AiOutlinePlusCircle size={24} />
            }
            
        </OpenFormButton>
    )
};

export default OpenFormBtn;