import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { MalaMalottaPage } from '../pages/MalaMalottaPage'

export const MalaMalottaRoutes = () => {
  return (
    <>
        <Routes>
            <Route path='/' element={<MalaMalottaPage />}/>
            <Route path='/*' element={<Navigate to='/' />} />
        </Routes>
    </>
  )
}
