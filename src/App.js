import './App.css';
import {Routes, Route} from 'react-router-dom';
import {Dashboard} from './components/Dashboard/Dashboard';
import {AddBook} from './components/AddBook/AddBook';
import {EditBook} from './components/EditBook/EditBook';
import { GlobalProvider } from './context/GlobalState';
import {useFetch} from './utils/useFetch';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [books, loading] = useFetch(
    " http://localhost:3000/books/1"
  );

  return (
    <div style={{maxWidth: "30rem", margin: "0 auto"}}>
      <div>{loading ? "loading..." : books}</div>
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
