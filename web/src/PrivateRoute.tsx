import { RouteProps, Routes, RoutesProps } from 'react-router-dom';
import { Navigate, Route } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from './contexts/Auth';

interface PrivateRouteProps extends RoutesProps {
  element: React.ReactNode;
}

export function PrivateRoute({ element, ...rest }: PrivateRouteProps) {
  const token = localStorage.getItem('@lj_register:token')

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  return <Routes>{/* wrap the Route component in a Routes component */}
    <Route {...rest} element={element} />
  </Routes>;
}
