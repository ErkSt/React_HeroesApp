import { test, describe, expect, vi } from "vitest";
import { appRouter } from "./app.router";
import { createMemoryRouter, Outlet, RouterProvider, useParams } from "react-router";
import { render, screen } from "@testing-library/react";


vi.mock("@/heroes/layouts/HeroesLayout", () => ({
    HeroesLayout: () => <div data-testid="home-layout">
        <Outlet />
    </div>
}));
vi.mock("@/heroes/pages/home/HomePage", () => ({
    HomePage: () => <div data-testid="home-page"></div>
}));
vi.mock("@/heroes/pages/search/SearchPage", () => ({
    default: () => <div data-testid="search-page"></div>
}));

vi.mock("@/heroes/pages/hero/HeroPage", () => ({
    HeroPage: () => {
        const { idSlug = '' } = useParams();
        return (
            <div data-testid="hero-page">
                HeroPage {idSlug}
            </div>
        )
    }
}))


describe('appRouter', () => {

    test('should be configured as expected', () => {
        expect(appRouter.routes).toMatchSnapshot()
    })

    test('should render homepage at root path', () => {
        const router = createMemoryRouter(appRouter.routes, {
            initialEntries: ['/']
        })

        render(<RouterProvider router={router} />);
        // screen.debug();
        expect(screen.getByTestId('home-page')).toBeDefined();
    });

    test('should render hero page at /heroes/:idSlug path', () => {
        const router = createMemoryRouter(appRouter.routes, {
            initialEntries: ['/heroes/superman']
        })

        render(<RouterProvider router={router} />);
        // screen.debug();
        expect(screen.getByTestId('hero-page').innerHTML).toContain('superman');
    });

    test('should render search page at /search path', async () => {
        const router = createMemoryRouter(appRouter.routes, {
            initialEntries: ['/search']
        })

        render(<RouterProvider router={router} />);

        expect(await screen.findByTestId('search-page')).toBeDefined()
        screen.debug()
    });

    test('should render search page at /search path', () => {
        const router = createMemoryRouter(appRouter.routes, {
            initialEntries: ['/otra-pagina']
        })

        render(<RouterProvider router={router} />);
        expect(screen.getByTestId('home-page')).toBeDefined();
    });
})