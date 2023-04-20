import React from 'react';
import { Route, Navigate } from 'react-router-dom';

export const RequireAuth = ({ isAuthenticated, children }) => {
  return isAuthenticated ? (
    children
  ) : (
    <Navigate to="/" replace />
  );
};
export const RequireLogin = ({ isAuthenticated, children }) => {
  return !isAuthenticated ? (
    children
  ) : (
    <Navigate to="/home" replace />
  );
};
