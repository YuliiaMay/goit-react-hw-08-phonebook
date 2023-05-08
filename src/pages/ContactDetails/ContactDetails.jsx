import defaultContactAvatar from "../../images/default-avatar.png"

const ContactDetails = () => {

    return(
        <div>
            <a href="/">Go Back</a>
            <img src={defaultContactAvatar} alt="avatar" />
            <p>Name:</p>
            <p>Number:</p>
        </div>
    )
};

export default ContactDetails;