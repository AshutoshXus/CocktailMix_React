import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import {
  About,
  Cocktail,
  HomeLayout,
  Landing,
  NewsLetter,
  Error,
  SinglePageError,
} from './pages'
import { loader as landingloader } from './pages/Landing'
import { loader as singleCocktailLoader } from './pages/Cocktail'
import { action as newsLetterAction } from './pages/NewsLetter'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
    },
  },
})

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        path: '/about',
        element: <About />,
      },
      {
        index: true,
        element: <Landing />,
        errorElement: <SinglePageError />,
        loader: landingloader(queryClient),
      },
      {
        path: '/cocktail/:id',
        errorElement: <SinglePageError />,
        loader: singleCocktailLoader(queryClient),
        element: <Cocktail />,
      },
      {
        path: '/newsletter',
        element: <NewsLetter />,
        action: newsLetterAction,
      },
    ],
  },
])
const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}
export default App
