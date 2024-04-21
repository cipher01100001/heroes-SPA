import { fireEvent, render, screen } from '@testing-library/react'

import { MemoryRouter, Route, Routes } from 'react-router-dom'

import { HeroPage } from '../../../src/heroes/pages/HeroPage'



const mockUseNavigate = jest.fn()



jest.mock('react-router-dom', () => ({

    ...jest.requireActual('react-router-dom'),

    useNavigate: () => mockUseNavigate

}))



describe('tests HeroPage', () => {

    beforeEach(() => jest.clearAllMocks())



    test('should display the marvel page if hero is not found', () => {

        const heroIdNotFound = 'dr fate'

        render(
            <MemoryRouter initialEntries={[`/hero/${heroIdNotFound}`]}>

                <Routes>

                    <Route path='/hero/:id' element={<HeroPage />} />

                    {/* Definir la ruta de /marvel porque se navega a ella desde el componente, si no se hace renderiza la pagina de /hero en un bucle */}

                    <Route path='/marvel' element={<h1>This is a Marvel page !</h1>} />

                </Routes>

            </MemoryRouter>
        )



        expect(screen.getByText('This is a Marvel page !')).toBeTruthy()

        // screen.debug()

    })



    test('should display the hero page if the hero exist', () => {

        const heroId = 'dc-arrow'

        render(
            <MemoryRouter initialEntries={[`/hero/${heroId}`]}>

                <Routes>

                    <Route path='/hero/:id' element={<HeroPage />} />

                </Routes>

            </MemoryRouter>
        )



        expect(screen.getByText('Green Arrow')).toBeTruthy()

        // screen.debug()

    })



    test('should navigate at last page when backBtn is clicked', () => {

        const heroId = 'dc-black'

        render(
            <MemoryRouter initialEntries={[`/hero/${heroId}`]}>

                <Routes>

                    <Route path='/hero/:id' element={<HeroPage />} />

                </Routes>

            </MemoryRouter>
        )

        const backBtn = screen.getByRole('button')

        fireEvent.click(backBtn)

        expect(mockUseNavigate).toHaveBeenCalled()
        expect(mockUseNavigate).toHaveBeenCalledWith(-1)

        // screen.debug()

    })



    test('should match with the snapshot', () => {

        const { container } = render(
            <MemoryRouter initialEntries={['/hero/dc-arrow']}>

                <Routes>

                    <Route path='/hero/:id' element={<HeroPage />} />

                </Routes>

            </MemoryRouter>
        )

        expect(container).toMatchSnapshot()

        // screen.debug()

    })

})