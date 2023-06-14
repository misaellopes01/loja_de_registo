import { RouteProps, Routes, RoutesProps } from 'react-router-dom';
import { Navigate, Route } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from './contexts/Auth';

interface PrivateRouteProps extends RoutesProps {
  element: React.ReactNode;
}

export function PrivateRoute({ element, ...rest }: PrivateRouteProps) {
  const { refreshSigIn } = useContext(AuthContext)
  const token = localStorage.getItem('@lj_register:token')
  const refreshTokenEncoded = localStorage.getItem('@lj_register:refresh_token')
  const refreshToken = refreshTokenEncoded?.split('eyJhotHserfer')
  const refresh = refreshToken?.[1]
  console.log('Logando: ', refresh)
  if (!token && !refresh) {
    return <Navigate to="/login" replace />;
  }

  refreshSigIn(refresh!)

  return <Routes>{/* wrap the Route component in a Routes component */}
    <Route {...rest} element={element} />
  </Routes>;
}
