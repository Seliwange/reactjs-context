import './App.css';
import {Routes, Route} from 'react-router-dom';
import {Dashboard} from './components/Dashboard/Dashboard';
import {AddBook} from './components/AddBook/AddBook';
import {EditBook} from './components/EditBook/EditBook';
import { GlobalProvider } from './context/GlobalState';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <div style={{maxWidth: "30rem", margin: "0 auto"}}>
      <GlobalProvider>
        <Routes>
          <Route path="reactjs-context/" element={<Dashboard />} />
          <Route path="reactjs-context/addbook" element={<AddBook/>} />
          <Route path="reactjs-context/edit/:id" element={<EditBook/>} />
        </Routes>
      </GlobalProvider>
    </div>
  );
}

export default App;
