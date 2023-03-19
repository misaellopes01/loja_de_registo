import { Route, Routes } from 'react-router-dom'
import { AdminLayout } from './layouts/AdminLayout'
import { DefaultLayout } from './layouts/DefaultLayout'
import { Dashboard } from './pages/Admin/Dashboard'
import { Consult } from './pages/Client/Consult'
import { Home } from './pages/Client/Home'
import { Result } from './pages/Client/Result'
import { Schedule } from './pages/Client/Schedule'


export function Router() {
    return (
        <Routes>
            <Route path='/' element={<DefaultLayout />}>
                <Route path='/' element={<Home />} />
                <Route path='/consult' element={<Consult />} />
                <Route path='/schedule' element={<Schedule />} />
                <Route path='/result' element={<Result />} />
            </Route>
            <Route path='/admin' element={<AdminLayout />}>
                <Route path='/admin' element={<Dashboard />} />
            </Route>
        </Routes>
    )
}
