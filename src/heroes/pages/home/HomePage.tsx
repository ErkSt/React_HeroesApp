import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { CustomJumbotron } from "@/components/custom/CustomJumbotron"
import { HeroStats } from "@/heroes/components/HeroStats"
import { HeroGrid } from "@/heroes/components/HeroGrid"
import { use, useMemo } from "react"
import { CustomPagination } from "@/components/custom/CustomPagination"

import { useSearchParams } from "react-router"

import { useHeroSummary } from "@/heroes/hooks/useHeroSummary"
import { usePaginatedHero } from "@/heroes/hooks/usePaginatedHero"
import { FavoriteHeroContext } from "@/heroes/context/FavoriteHeroContext"

export const HomePage = () => {
    const { favoriteCounte, favorites } = use(FavoriteHeroContext)
    const [searchParams, setSearchParams] = useSearchParams();

    const activeTab = searchParams.get("tab") ?? 'all';
    const page = searchParams.get("page") ?? '1';
    const limit = searchParams.get("limit") ?? '6';
    const category = searchParams.get("category") ?? 'all';

    const { data: heroesResponse } = usePaginatedHero(+page, +limit, category);

    const { data: summary } = useHeroSummary();

    const selectedTab = useMemo(() => {
        const validTabs = ['all', 'favorites', 'villains', 'heroes'];
        return validTabs.includes(activeTab) ? activeTab : 'all';

    }, [activeTab])



    return (
        <>
            <>
                {/* Custom Jumbotron*/}
                <CustomJumbotron title="Universo de superheroes" description="Descubre explora y administra heroes y villanos" />

                {/* Stats Dashboard */}
                <HeroStats />

                {/* Tabs */}
                <Tabs value={selectedTab} className="mb-8">
                    <TabsList className="grid w-full grid-cols-4">
                        <TabsTrigger onClick={() =>
                            setSearchParams((prev) => {
                                prev.set('tab', 'all');
                                prev.set('category', 'all');
                                prev.set('page', '1');
                                return prev;
                            })
                        }
                            value="all">All Characters ({summary?.totalHeroes})</TabsTrigger>
                        <TabsTrigger onClick={() =>
                            setSearchParams((prev) => {
                                prev.set('tab', 'favorites');
                                return prev;
                            })
                        } value="favorites" className="flex items-center gap-2">
                            Favorites ( {favoriteCounte} )
                        </TabsTrigger>
                        <TabsTrigger onClick={() =>
                            setSearchParams((prev) => {
                                prev.set('tab', 'heroes');
                                prev.set('category', 'hero');
                                prev.set('page', '1');
                                return prev;
                            })
                        } value="heroes">Heroes ({summary?.heroCount})</TabsTrigger>
                        <TabsTrigger onClick={() =>
                            setSearchParams((prev) => {
                                prev.set('tab', 'villains');
                                prev.set('category', 'villain');
                                prev.set('page', '1');
                                return prev;
                            })
                        } value="villains">Villains ({summary?.villainCount})</TabsTrigger>
                    </TabsList>

                    <TabsContent value="all">
                        <h1>Todos los personajes</h1>
                        <HeroGrid heroes={heroesResponse?.heroes ?? []} />
                    </TabsContent>
                    <TabsContent value="favorites">
                        <h1>Todos los favoritos</h1>
                        <HeroGrid heroes={favorites} />
                    </TabsContent>
                    <TabsContent value="heroes">
                        <h1>Todos los heroes</h1>
                        <HeroGrid heroes={heroesResponse?.heroes ?? []} />
                    </TabsContent>
                    <TabsContent value="villains">
                        <h1>Todos los villanos</h1>
                        <HeroGrid heroes={heroesResponse?.heroes ?? []} />
                    </TabsContent>

                </Tabs>

                {/* Pagination */}
                {
                    selectedTab != 'favorites' && (
                        <CustomPagination totalPages={heroesResponse?.pages ?? 1} />
                    )
                }

            </>
        </>
    )
}
