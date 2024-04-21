import { render, screen } from "@testing-library/react"
import { AuthContext } from "../../src/auth"
import { MemoryRouter } from "react-router-dom"
import { AppRouter } from "../../src/router/AppRouter"

describe('Pruebas en <AppRouter />', () => {

    test('debe mostrar el login si no esta autentificado', () => {

        const contextValue = {
            logged: false,
        }

        render(
            <MemoryRouter initialEntries={['/marvel']}>

                <AuthContext.Provider value={contextValue}>
                    <AppRouter />
                </AuthContext.Provider>

            </MemoryRouter>
        )

        // screen.debug();
        expect(screen.getAllByText('Login').length).toBe(2);
    })

    test('debe de mostrar el componente de Marvel si esta autentificado', () => {


        const contextValue = {
            logged: true,
            user: {
                id: '123',
                name: 'Rosalie'
            }
        }

        render(
            <MemoryRouter initialEntries={['/marvel']}>

                <AuthContext.Provider value={contextValue}>
                    <AppRouter />
                </AuthContext.Provider>

            </MemoryRouter>
        )

        // screen.debug();
        expect(screen.getByText('MarvelPage')).toBeTruthy();
        expect(screen.getAllByText('Marvel').length).toBeGreaterThanOrEqual(1);
        expect(screen.getByText(contextValue.user.name)).toBeTruthy();

    })

})