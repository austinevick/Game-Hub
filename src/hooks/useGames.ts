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
    rating_top: number
}

interface GamesResponseModel {
    count: number,
    results: Game[]
}
export type useGamesProps = {
    selectedGenre: Genre | null
    selectedPlatform: PlatformList | null
    sortOrder: string
    searchValue: string
}

export const useGames = ({ selectedGenre, selectedPlatform, sortOrder, searchValue }: useGamesProps) => {
    const [games, setGames] = useState<Game[]>([])
    const [isLoading, setLoading] = useState(false)

    const getGames = async () => {
        try {
            setLoading(true)
            const response = await axios.get<GamesResponseModel>(baseURL + "/games?key=" + apikey,
                {
                    params: {
                        genres: selectedGenre?.id,
                        platforms: selectedPlatform?.id,
                        ordering: sortOrder,
                        search: searchValue
                    }
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

    }, [selectedGenre?.id, selectedPlatform?.id, sortOrder, searchValue]);

    return { games, isLoading }


}