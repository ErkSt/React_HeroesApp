import { test, describe, expect } from "vitest";
import { heroApi } from "./heroes.api";

const BASE_URL = import.meta.env.VITE_API_URL;

describe('heroApi', () => {
    test('should be configured pointing to the testring server', () => {
        expect(heroApi).toBeDefined();
        expect(heroApi.defaults.baseURL).toBe(`${BASE_URL}/api/heroes`);
        expect(BASE_URL).toContain('3001');
    })
})