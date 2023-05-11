import defaultContactAvatar from "../../images/default-avatar.png"
import { ContactAvatar, ContactBox, ContactInfo } from "./ContactDetails.styled";

const ContactDetails = () => {
    return(
        <div>
            <a href="/">Go Back</a>
            <ContactBox>
                <ContactAvatar src={defaultContactAvatar} alt="avatar" />
                <ContactInfo>
                    <p>Name: <span></span></p>
                    <p>Number: <span></span></p>
                </ContactInfo>

            </ContactBox>
        </div>
    )
};

export default ContactDetails;