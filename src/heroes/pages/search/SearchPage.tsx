import { CustomJumbotron } from "@/components/custom/CustomJumbotron";
import { HeroStats } from "@/heroes/components/HeroStats";
import { SearchControls } from "./ui/SearchControls";
import { CumstomBreadcrumbs } from "@/components/custom/CustomBreadcrumbs";

export const SearchPage = () => {
    return (
        <>
            <CustomJumbotron title="Universo de superheroes" description="Busqueda explora y administra heroes y villanos" />
            <CumstomBreadcrumbs currentPage="Search"
                breadcrumbs={
                    [
                        { to: '/', label: 'Home ' },
                        { to: '/', label: 'Home 2' },
                        { to: '/', label: 'Home 3' },
                    ]
                } />
            <HeroStats />
            {/* Controls */}
            <SearchControls />
        </>
    )
}

export default SearchPage;