import axios, { CanceledError } from "axios"
import { useEffect, useState } from "react"
import { apikey, baseURL } from "../services/api"

export interface Genre {
    id: number
    name: string
    image_background: string
}
interface GenresResponseModel {
    count: number
    results: Genre[]
}

export const useGenres = () => {
    const [genres, setGenres] = useState<Genre[]>([])
    const [isLoading, setLoading] = useState(false)
    //const controller = new AbortController()

    const getGenres = async () => {
        try {
            setLoading(true)
            const response = await axios.get<GenresResponseModel>(baseURL + "/genres?key=" + apikey, {
                // signal: controller.signal
            })

            setGenres(response.data.results)
            setLoading(false)
        } catch (error) {
            if (error instanceof CanceledError) return
            console.log(error);
            setLoading(false)
        }
    }

    useEffect(() => {
        getGenres()
        // return () => controller.abort()
    }, []);

    return { genres, isLoading }
}