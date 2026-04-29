import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import PHome from './pages/PHome';
import PName from './pages/PName';
import PConfig from './pages/PConfig';
import PQuestions from './pages/PQuestions';
import PAnswerResult from './pages/PAnswerResult';
import PResult from './pages/PResult';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PHome />} />
        <Route path="/name" element={<PName />} />
        <Route path="/config" element={<PConfig />} />
        <Route path="/questions" element={<PQuestions />} />
        <Route path="/answer-result" element={<PAnswerResult />} />
        <Route path="/result" element={<PResult />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
