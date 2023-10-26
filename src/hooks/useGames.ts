import axios, { CanceledError } from "axios";
import { useState, useEffect } from "react";
import { baseURL, apikey } from "../services/api";
import { Genre } from "./useGenres";
import { PlatformList } from "./usePlatforms";

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

export const useGames = (selectedGenre: Genre | null, selectedPlatform: PlatformList | null) => {
    const [games, setGames] = useState<Game[]>([])
    const [isLoading, setLoading] = useState(false)


    const getGames = async () => {
        try {
            setLoading(true)
            const response = await axios.get<GamesResponseModel>(baseURL + "/games?key=" + apikey,
                {
                    params: { genres: selectedGenre?.id, platforms: selectedPlatform?.id }
                })

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

    }, [selectedGenre?.id, selectedPlatform?.id]);

    return { games, isLoading }


}