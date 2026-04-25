import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import PAnswer_Result from './pages/PAnswerResult';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/answer-result" element={<PAnswer_Result />} />
      </Routes>
    </BrowserRouter>
  );
}
