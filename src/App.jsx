// App.jsx

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import List from './components/List';
import New from './components/New';
import Edit from './components/Edit';
import Report from './components/Report';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<List />} />
        <Route path="/report" element={<Report />} />
        <Route path="/new" element={<New />} />
        <Route path="/edit/:id" element={<Edit />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
