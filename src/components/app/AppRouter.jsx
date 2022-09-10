import { Routes, Route, Navigate } from 'react-router-dom';
import { routers } from '../../router';

export const AppRouter = () => {
  return (
    <Routes>
      {routers.map(({ path, element }) => (
        <Route key={path} path={path} element={element} />
      ))}
      <Route path="/*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};
