import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import About from './About.tsx'
import NotFoundPage from './NotFoundPage.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Wrapper from './Wrapper.tsx'
import Projects from './Projects.tsx'
import SpanningTreeMaze from './SpanningTreeMaze.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Wrapper />,
    children: [
      { index: true, element: <App /> },
      { path: 'about', element: <About /> },
      { path: 'projects', element: <Projects /> },
      { path: 'projects/spanning-tree-maze', element: <SpanningTreeMaze /> },
      { path: '*', element: <NotFoundPage /> }
    ],
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
