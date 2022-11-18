import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Init from '../src/components/Init';
import Note from '../src/components/Note';

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Init></Init>}></Route>
          <Route path='/note/:id' element={<Note></Note>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
