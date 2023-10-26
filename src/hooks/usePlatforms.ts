import axios, { CanceledError } from "axios"
import { useState, useEffect } from "react"
import { baseURL, apikey } from "../services/api"


export interface PlatformResponse {
    count: number;
    next: null;
    previous: null;
    results: PlatformList[];
}

export interface PlatformList {
    id: number;
    name: string;
    slug: string;
    platforms: Platform[];
}

export interface Platform {
    id: number;
    name: string;
    slug: string;
    games_count: number;
    image_background: string;
    image: null;
    year_start: number | null;
    year_end: null;
}


export const usePlatform = () => {
    const [platforms, setPlatforms] = useState<PlatformResponse>()
    const [isLoading, setLoading] = useState(false)


    const getPlatforms = async () => {
        try {
            setLoading(true)
            const response = await axios.get<PlatformResponse>(baseURL + "/platforms/lists/parents?key=" + apikey, {

            })
            console.log(response.data);
            setPlatforms(response.data)
            setLoading(false)
        } catch (error) {
            if (error instanceof CanceledError) return
            console.log(error);
            setLoading(false)
        }
    }

    useEffect(() => {
        getPlatforms()

    }, []);

    return { platforms, isLoading }


}