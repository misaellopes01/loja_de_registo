import { Navigate, Route, Routes } from 'react-router-dom'
import { SearchProvider } from './contexts/SearchContext'
import { AdminLayout } from './layouts/AdminLayout'
import { DefaultLayout } from './layouts/DefaultLayout'
import { Dashboard } from './pages/Admin/Dashboard'
import { Scheduling } from './pages/Admin/Scheduling'
import { Consult } from './pages/Client/Consult'
import { DoneMessage } from './pages/Client/DoneMessage'
import { Home } from './pages/Client/Home'
import { Result } from './pages/Client/Result'
import { Schedule } from './pages/Client/Schedule'
import { Login } from './pages/Admin/Login'
import { Settings } from './pages/Admin/Settings'


export function Router() {

    const token = localStorage.getItem('@lj_register:token')

    return (
            <SearchProvider>     
                <Routes>
                    <Route path='/' element={<DefaultLayout />}>
                        <Route path='/' element={<Home />} />
                        <Route path='/schedule' element={<Schedule />} />
                        <Route path='/consult' element={<Consult />} />   
                        <Route path='/consult/result' element={<Result />} />
                        <Route path='/schedule/done' element={<DoneMessage />} />
                    </Route>
                    
                    <Route path='/admin' element={token ? <AdminLayout /> : <Navigate to="/login" replace />} >
                        <Route path='/admin' element={token ? <Dashboard /> : <Navigate to="/login" replace />} />
                        <Route path='/admin/scheduling' element={token ? <Scheduling /> : <Navigate to="/login" replace />} />
                        <Route path='/admin/settings'  element={token ? <Settings /> : <Navigate to='/login' replace/> }/>
                    </Route>

                    <Route path='/login' element={<Login />} />
                </Routes>
            </SearchProvider>
    )
}
