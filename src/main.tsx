import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { HerosApp } from './HerosApp'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HerosApp />
  </StrictMode>,
)
