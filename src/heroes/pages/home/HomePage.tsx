import {
    ChevronLeft,
    ChevronRight,
    MoreHorizontal,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { CustomJumbotron } from "@/components/custom/CustomJumbotron"
import { HeroStats } from "@/heroes/components/HeroStats"
import { HeroGrid } from "@/heroes/components/HeroGrid"
import { useState } from "react"
import { CustomPagination } from "@/components/custom/CustomPagination"

export const HomePage = () => {

    const [activeTab, setActiveTab] = useState<'all' | 'favorites' | 'villains' | 'heroes'>('all');

    return (
        <>
            <>
                {/* Custom Jumbotron*/}
                <CustomJumbotron title="Universo de superheroes" description="Descubre explora y administra heroes y villanos" />

                {/* Stats Dashboard */}
                <HeroStats />




                {/* Tabs */}
                <Tabs value={activeTab} className="mb-8">
                    <TabsList className="grid w-full grid-cols-4">
                        <TabsTrigger onClick={() => setActiveTab('all')} value="all">All Characters (16)</TabsTrigger>
                        <TabsTrigger onClick={() => setActiveTab('favorites')} value="favorites" className="flex items-center gap-2">
                            Favorites (3)
                        </TabsTrigger>
                        <TabsTrigger onClick={() => setActiveTab('heroes')} value="heroes">Heroes (12)</TabsTrigger>
                        <TabsTrigger onClick={() => setActiveTab('villains')} value="villains">Villains (2)</TabsTrigger>
                    </TabsList>

                    <TabsContent value="all">
                        <h1>Todos los personajes</h1>
                        <HeroGrid />
                    </TabsContent>
                    <TabsContent value="favorites">
                        <h1>Todos los favoritos</h1>
                        <HeroGrid />
                    </TabsContent>
                    <TabsContent value="heroes">
                        <h1>Todos los heroes</h1>
                        <HeroGrid />
                    </TabsContent>
                    <TabsContent value="villains">
                        <h1>Todos los villanos</h1>
                        <HeroGrid />
                    </TabsContent>

                </Tabs>

                {/* Pagination */}
                <CustomPagination totalPages={8} />
            </>
        </>
    )
}
