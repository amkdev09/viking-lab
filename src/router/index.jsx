import React, { memo } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoutes";
import AppLayout from "../layout";
import { publicRouters, protectedRouters } from "./router.config";

const AppRouter = () => {

  return (
    <Routes>
      {publicRouters.map(({ path, component, isHeader, isBottomNav }) => (
        <Route
          key={path}
          path={path}
          element={
            <AppLayout isHeader={isHeader} isBottomNav={isBottomNav}>
              {component ? React.createElement(component) : <Navigate to="/" replace />}
            </AppLayout>
          }
        />
      ))}

      {protectedRouters.map(({ path, component, isHeader, isBottomNav }) => (
        <Route
          key={path}
          path={path}
          element={
            <ProtectedRoute>
              <AppLayout isHeader={isHeader} isBottomNav={isBottomNav}>
                {component ? React.createElement(component) : <Navigate to="/" replace />}
              </AppLayout>
            </ProtectedRoute>
          }
        />
      ))}

      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default memo(AppRouter);
