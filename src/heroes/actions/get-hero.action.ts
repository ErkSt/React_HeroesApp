import { heroApi } from "../api/heroes.api"
import type { HeroResponse } from "../types/get-hero.response";
import type { Hero } from "../types/hero.interface"

const BASE_URL = import.meta.env.VITE_API_URL;

export const getHeroAction = async (idSlug: string): Promise<HeroResponse> => {

    const { data } = await heroApi.get<Hero>(`/${idSlug}`);

    return {
        ...data,
        image: `${BASE_URL}/images/${data.image}`
    }
}
