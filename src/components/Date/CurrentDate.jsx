const CurrentDate = () => {
    // const time = new Date();
    const date = new Date();

    const getTime = () => {
        const hours = date.getUTCHours();
        const minutes = date.getUTCMinutes();
        const seconds = date.getUTCSeconds();
    };

    const getDate = () => {
        const day = date.getUTCDate();
        const month = date.getUTCMonth();
    };



    return (
        <>
            {/* <p>{hours} : {minutes} : {seconds}</p>
            <p>{day} {month}</p>         */}
        </>
    )
};

export default CurrentDate;