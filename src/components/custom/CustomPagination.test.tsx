import { fireEvent, render, screen } from "@testing-library/react";
import { test, describe, expect, vi } from "vitest";
import { CustomPagination } from "./CustomPagination";
import { MemoryRouter } from "react-router";
import type { PropsWithChildren } from "react";

vi.mock("../ui/button", () => ({
    Button: ({ children, ...props }: PropsWithChildren) => (
        <button {...props}> {children}</button>
    ),
}));

const renderWithRouter = (
    component: React.ReactElement,
    initialEntries?: string[]
) => {
    return render(
        <MemoryRouter initialEntries={initialEntries}>
            {component}
        </MemoryRouter>
    )
}


describe('CustomPagination', () => {
    test('Should render component with default values', () => {
        renderWithRouter(<CustomPagination totalPages={5} />)

        screen.debug()

        expect(screen.findByText('Anterior')).toBeDefined()
        expect(screen.findByText('1')).toBeDefined()
        expect(screen.findByText('2')).toBeDefined()
        expect(screen.findByText('3')).toBeDefined()
        expect(screen.findByText('4')).toBeDefined()
        expect(screen.findByText('5')).toBeDefined()
    });

    test('Should disable previous button when page is 1', () => {
        renderWithRouter(<CustomPagination totalPages={5} />)

        const previousButton = screen.getByText('Anterior');
        // screen.debug(previousButton);

        console.log(previousButton.getAttributeNames)
        expect(previousButton.getAttributeNames()).toContain('disabled');
    })

    test('Should disable next button when on last page', () => {
        renderWithRouter(<CustomPagination totalPages={5} />, ['/?page=5'])

        const nextButton = screen.getByText('Siguiente');
        // screen.debug(nextButton);
        expect(nextButton.getAttributeNames()).toContain('disabled');
    });

    test('Should disable button 3 when positioned on page 3', () => {
        renderWithRouter(<CustomPagination totalPages={10} />, ['/?page=3'])

        const button2 = screen.getByText('2');
        const button3 = screen.getByText('3');

        // screen.debug(nextButton);
        expect(button2.getAttribute('variant')).toBe('outline');
        expect(button3.getAttribute('variant')).toBe('default');
    });

    test('Should change page when click on number', () => {
        renderWithRouter(<CustomPagination totalPages={10} />, ['/?page=3'])

        const button2 = screen.getByText('2');
        const button3 = screen.getByText('3');
        expect(button2.getAttribute('variant')).toBe('outline');
        expect(button3.getAttribute('variant')).toBe('default');

        fireEvent.click(button2);

        expect(button2.getAttribute('variant')).toBe('default');
        expect(button3.getAttribute('variant')).toBe('outline');
    });
})