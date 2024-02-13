import { Route, Routes } from "react-router-dom"

import { HeroesRoute } from "../heroes"
import { LoginPage } from "../auth"
import { PrivateRoute } from "./PrivateRoute"
import { PublicRoute } from "./PublicRoute"

export const AppRouter = () => {
    return (
        <>
            <Routes>

                <Route path="/login" element={
                    <PublicRoute>
                        <LoginPage />
                    </PublicRoute>
                } />

                {/* <Route path="login" element={<LoginPage />} /> */}

                <Route path="/*" element={
                    <PrivateRoute>
                        <HeroesRoute />
                    </PrivateRoute>
                } />
                {/* <Route path="/*" element={<HeroesRoute />} /> */}
            </Routes>
        </>
    )
}