import CurrentDate from "components/Date/CurrentDate";
import screensaver from "../../images/screen.png"

const HomePage = () => {
    return (
        <>
            <CurrentDate />
            <img src={screensaver} alt="screensaver" />
        </>
    )
};

export default HomePage;