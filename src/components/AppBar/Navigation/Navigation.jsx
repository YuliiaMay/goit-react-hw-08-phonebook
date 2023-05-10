import { Link } from "react-router-dom";
import { FcHome } from "react-icons/fc";
import { BiPhoneCall } from "react-icons/bi";

const Navigation = () => {
    return (
        <div>
            <Link to="/"><FcHome size="24"/></Link>
            <Link to="/phonebook"><BiPhoneCall size="24"/></Link>
        </div>

    )
};

export default Navigation;