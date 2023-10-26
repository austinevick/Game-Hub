import axios, { CanceledError } from "axios";
import { useState, useEffect } from "react";
import { baseURL, apikey } from "../services/api";
import { Genre } from "./useGenres";

export interface Platform {
    id: number
    name: string
    slug: string
}
export interface Game {
    id: number,
    name: string
    background_image: string
    parent_platforms: { platform: Platform }[]
    metacritic: number
}

interface GamesResponseModel {
    count: number,
    results: Game[]
}

export const useGames = (selectedGenre: Genre | null) => {
    const [games, setGames] = useState<Game[]>([])
    const [isLoading, setLoading] = useState(false)
    const controller = new AbortController()

    const getGames = async () => {
        try {
            setLoading(true)
            const response = await axios.get<GamesResponseModel>(baseURL + "/games?key=" + apikey,
                {
                    params: { genres: selectedGenre?.id }
                    // signal: controller.signal
                })
            console.log(response.data);
            setGames(response.data.results)
            setLoading(false)
        } catch (error) {
            if (error instanceof CanceledError) return
            console.log(error);
            setLoading(false)
        }
    }

    useEffect(() => {
        getGames()
        // return () => controller.abort()
    }, [selectedGenre?.id]);

    return { games, isLoading }


}