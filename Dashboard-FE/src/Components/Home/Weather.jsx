import { useEffect, useState } from "react";

const Weather = () => {
    const [crd, setCrd] = useState({});
    const [icon, setIcon] = useState();

    return (
        <div className="p-1  absolute h-fit top-0 left-0 w-14 bg-blue-100 m-5 rounded-2xl object-contain   ">
            <img src="src/assets/sun.png" alt="weather" />
        </div>
    );
};

export default Weather;
