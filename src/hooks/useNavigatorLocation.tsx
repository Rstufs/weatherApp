import { useEffect, useState } from "react";
import { Location } from "../types";

export default function useNavigatorLocation() {
    const [currentNavLocation, setCurrentNavLocation] = useState<Location | null>(null)

    useEffect( () => {
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(function(position) {
                const location: Location = {
                    latitude:position.coords.latitude,
                    longitude: position.coords.longitude
                }
                setCurrentNavLocation(location)
            }, function error(err) {
                console.warn(`ERROR(${err.code}): ${err.message}`);
            });
          } else {
            console.log("Geolocation is not supported in this browser.");
          }
    }, [])

    return currentNavLocation
}