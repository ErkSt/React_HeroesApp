import { fireEvent, render, screen } from "@testing-library/react";
import { test, describe, expect } from "vitest";
import { SearchControls } from "./SearchControls";
import { MemoryRouter } from "react-router";

if (typeof window.ResizeObserver === 'undefined') {
    class ResizeObserver {
        observe() { }
        unobserve() { }
        disconnect() { }
    }

    window.ResizeObserver = ResizeObserver;
}

const renderWithRouter = (initialEntries: string[] = ['/']) => {
    return render(
        <MemoryRouter initialEntries={initialEntries}>
            <SearchControls />
        </MemoryRouter>
    )
}

describe('SearchControls', () => {
    test('Should render SearchControls with default values', () => {
        const { container } = renderWithRouter();

        // screen.debug();
        expect(container).toMatchSnapshot();
    })

    test('Should set input when search param is set', () => {
        renderWithRouter(['/?name=Batman']);
        const input = screen.getByPlaceholderText("Search heroes, villains, powers, teams...");

        expect(input.getAttribute('value')).toBe('Batman');
    })

    test('Should change params when input is set and press enter', () => {
        renderWithRouter(['/?name=Batman']);
        const input = screen.getByPlaceholderText("Search heroes, villains, powers, teams...");

        expect(input.getAttribute('value')).toBe('Batman');

        fireEvent.change(input, { target: { value: 'Superman' } });
        fireEvent.keyDown(input, { key: 'Enter' });

        expect(input.getAttribute('value')).toBe('Superman');
    });

    test('Should change strength param when slider is set', () => {
        renderWithRouter(['/?name=Batman&active-accordion=advanced-filters']);
        const slider = screen.getByRole('slider');

        expect(slider.getAttribute('aria-valuenow')).toBe('0');

        fireEvent.keyDown(slider, { key: 'ArrowRight' });

        expect(slider.getAttribute('aria-valuenow')).toBe('1');
    });

    test('Should accordion be open when active-accordion param is set', () => {
        renderWithRouter(['/?name=Batman&active-accordion=advanced-filters']);
        const accordion = screen.getByTestId('accordion');
        const accordionItem = accordion.querySelector('div');

        expect(accordionItem?.getAttribute('data-state')).toBe('open');
    });

    test('Should accordion be closed when active-accordion param is not set', () => {
        renderWithRouter(['/?name=Batman']);
        const accordion = screen.getByTestId('accordion');
        const accordionItem = accordion.querySelector('div');

        expect(accordionItem?.getAttribute('data-state')).toBe('closed');
    });
})