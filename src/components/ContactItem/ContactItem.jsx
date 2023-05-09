import { useDispatch } from "react-redux";
import { Contact, ContactInfo, DeleteContactBtn, Name, Number } from "./ContactItem.styled";
import { AiTwotoneDelete } from "react-icons/ai";
import { Link } from "react-router-dom";


const ContactItem = ({ id, name, number, onClick }) => {
    const dispatch = useDispatch();


    return (
        <Contact>
            <Link to="/phonebook/:contact">
                <ContactInfo>
                    
                        <Name>{name}</Name>
                        <Number>{number}</Number>
                    

                </ContactInfo>


                <DeleteContactBtn
                    type="button"
                    onClick={() => onClick(id)}
                >
                    <AiTwotoneDelete size={22} />
                </DeleteContactBtn>
            </Link>
        </Contact>
    )
};

export default ContactItem;