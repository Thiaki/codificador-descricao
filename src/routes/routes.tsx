import { lazy, Suspense } from 'react'
import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
const Home = lazy(() => import('../pages/Home/Home'))
const NutritionalTable = lazy(() => import('../pages/NutritionalTable/NutritionalTable'))
const HowToTake = lazy(() => import('../pages/HowToTake/HowToTake'))
const Advantage = lazy(() => import('../pages/Advantage/Advantage'))
const Ingredients = lazy(() => import('../pages/Ingredients/Ingredients'))
// const Description = lazy(() => import('../pages/Description/Description'))

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '',
                element: (
                    <Suspense fallback={<div>Carregando...</div>}>
                        <Home />
                    </Suspense>
                )
            },
            {
                path: 'tabela-nutricional',
                element: (
                    <Suspense fallback={<div>Carregando...</div>}>
                        <NutritionalTable />
                    </Suspense>
                )
            },
            {
                path: 'beneficios',
                element: (
                    <Suspense fallback={<div>Carregando...</div>}>
                        <Advantage />
                    </Suspense>
                )
            },
            {
                path: 'como-tomar',
                element: (
                    <Suspense fallback={<div>Carregando...</div>}>
                        <HowToTake />
                    </Suspense>
                )
            },
            {
                path: 'ingredientes',
                element: (
                    <Suspense fallback={<div>Carregando...</div>}>
                        <Ingredients />
                    </Suspense>
                )
            },
            // {
            //     path: 'descricao',
            //     element: (
            //         <Suspense fallback={<div>Carregando...</div>}>
            //             <Description />
            //         </Suspense>
            //     )
            // },
            {
                path: '*',
                element: <h1>Página nao existente</h1>,
            },
        ],
    },
])
