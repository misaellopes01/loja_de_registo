import { Route, Routes } from 'react-router-dom'
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
import { AuthContext, AuthProvider } from './contexts/Auth'
import { useContext } from 'react'
import { Handle } from './pages/Admin/Login/handle'


export function Router() {

    const { userInfo } = useContext(AuthContext)

    return (
            <SearchProvider>
            <AuthProvider>
                <Routes>
                    <Route path='/' element={<DefaultLayout />}>
                        <Route path='/' element={<Home />} />
                        <Route path='/schedule' element={<Schedule />} />
                        <Route path='/consult' element={<Consult />} />   
                        <Route path='/consult/result' element={<Result />} />
                        <Route path='/schedule/done' element={<DoneMessage />} />
                    </Route>
                    <Route path='/handle' element={<Handle />} />
                    <Route path='/admin' element={userInfo ? <AdminLayout /> : <Handle />}>
                        <Route path='/admin' element={userInfo ? <Dashboard /> : <Handle />} />
                        <Route path='/admin/scheduling' element={userInfo ? <Scheduling /> : <Handle />} />
                    </Route>
                    <Route path='/login' element={<Login />} />
                </Routes>
            </AuthProvider>
            </SearchProvider>
    )
}
