import { RouterProvider } from 'react-router'
import { Button } from './components/ui/button'
import { appRouter } from './router/app.router'

export const HerosApp = () => {
    return (
        <>
            <RouterProvider router={appRouter} />
            <h1> Hola mundo </h1>
            <Button> Hola de nuevo </Button>
        </>
    )
}
