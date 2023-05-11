import CurrentDate from "components/Date/CurrentDate";
import screensaver from "../../images/—Pngtree—astronauts surf on a surfboard_5995307.png"
import { Wrapper } from "./HomePage.styled";

const HomePage = () => {
    return (
        <Wrapper>
            <CurrentDate />
            <img src={screensaver} alt="screensaver" />
        </Wrapper>
    )
};

export default HomePage;