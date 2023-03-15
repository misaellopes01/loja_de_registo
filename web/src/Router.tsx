import { Route, Routes } from 'react-router-dom'
import { DefaultLayout } from './layouts/DefaultLayout'
import { Consult } from './pages/Consult'
import { Home } from './pages/Home'
import { Schedule } from './pages/Schedule'


export function Router() {
    return (
        <Routes>
            <Route path='/' element={<DefaultLayout />}>
                <Route path='/' element={<Home />} />
                <Route path='/consult' element={<Consult />} />
                <Route path='/schedule' element={<Schedule />} />
                <Route path='/result' element={<Schedule />} />
            </Route>
        </Routes>
    )
}
