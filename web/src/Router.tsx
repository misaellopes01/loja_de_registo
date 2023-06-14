import { Navigate, Route, Routes } from 'react-router-dom'
import jwt_decode, { JwtPayload } from 'jwt-decode';
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
import { useContext } from 'react'
import { AuthContext } from './contexts/Auth'

export const isTokenExpired = (refresh: string) => {
    try {
      const decodedToken: JwtPayload = jwt_decode(refresh);
      const currentTime = Date.now() / 1000; // Divide by 1000 to convert to seconds
      return decodedToken.exp! < currentTime;
    } catch (error) {
      return true
    }
};


export function Router() {

    const tokens = localStorage.getItem('@lj_register:token')
    const token = isTokenExpired(tokens!)
      
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
                    
                    <Route path='/admin' element={!token ? <AdminLayout /> : <Navigate to="/login" replace />} >
                        <Route path='/admin' element={!token ? <Dashboard /> : <Navigate to="/login" replace />} />
                        <Route path='/admin/scheduling' element={!token ? <Scheduling /> : <Navigate to="/login" replace />} />
                        <Route path='/admin/settings'  element={!token  ? <Settings /> : <Navigate to='/login' replace/> }/>
                    </Route>

                    <Route path='/login' element={<Login />} />
                </Routes>
            </SearchProvider>
    )
}
