import { fireEvent, render, screen } from "@testing-library/react";
import { test, describe, expect, vi, beforeEach } from "vitest";
import { HomePage } from "./HomePage";
import { MemoryRouter } from "react-router";
import { usePaginatedHero } from "@/heroes/hooks/usePaginatedHero";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { FavoriteHeroProvider } from "@/heroes/context/FavoriteHeroContext";

vi.mock("@/heroes/hooks/usePaginatedHero");

const mockedUsePaginatedHero = vi.mocked(usePaginatedHero);

mockedUsePaginatedHero.mockReturnValue({
    data: [],
    isLoading: false,
    isError: false,
    isSuccess: true
} as unknown as ReturnType<typeof mockedUsePaginatedHero>);

const queryClient = new QueryClient();

const renderHomePage = (initialEntries: string[] = ['/']) => {

    return render(
        <MemoryRouter initialEntries={initialEntries}>
            <FavoriteHeroProvider>
                <QueryClientProvider client={queryClient}>
                    <HomePage />
                </QueryClientProvider>
            </FavoriteHeroProvider>
        </MemoryRouter >
    )
}

describe('HomePage', () => {

    beforeEach(() => {
        vi.clearAllMocks();
    })

    test('Should render with default values', () => {
        const { container } = renderHomePage();
        expect(container).toMatchSnapshot();

    });

    test('Should call usePaginatedHero with default values', () => {
        renderHomePage();
        expect(mockedUsePaginatedHero).toHaveBeenCalledWith(1, 6, 'all');
    });

    test('Should call usePaginatedHero with custom query params', () => {
        renderHomePage(['/?page=2&limit=10&category=villains']);
        expect(mockedUsePaginatedHero).toHaveBeenCalledWith(2, 10, 'villains');
    });

    test('Should call usePaginatedHero with default page and same limit on tab', () => {
        renderHomePage(['/?tab=favorites&page=2&limit=10']);

        const [, , , villainsTab] = screen.getAllByRole('tab');
        fireEvent.click(villainsTab);

        expect(mockedUsePaginatedHero).toHaveBeenCalledWith(1, 10, 'villain');
    });
})