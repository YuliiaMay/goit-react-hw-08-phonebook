
import { FcHome } from "react-icons/fc";
import { BiPhoneCall } from "react-icons/bi";
import { HomeLink, PhonebookLink } from "./Navigation.styled";

const Navigation = () => {
    return (
        <div>
            <HomeLink to="/"><FcHome size="24"/></HomeLink>
            <PhonebookLink to="/phonebook"><BiPhoneCall size="24" /></PhonebookLink>
        </div>

    )
};

export default Navigation;