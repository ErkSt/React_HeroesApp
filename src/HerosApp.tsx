import { RouterProvider } from 'react-router'
import { Button } from './components/ui/button'
import { appRouter } from './router/app.router'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

const queryClient = new QueryClient()

export const HerosApp = () => {
    return (
        <QueryClientProvider client={queryClient}>
            <RouterProvider router={appRouter} />
            {/* <h1> Hola mundo </h1>
            <Button> Hola de nuevo </Button> */}

            <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
    )
}
