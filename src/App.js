import GlobalStyle from './styles/globalStyles';
import Header from './components/header'
import Home from './pages/home';

import { BrowserRouter as Router,
  Route,
  Routes } from 'react-router-dom';

function App() {
  return (
    <div>
          <Router>
            <GlobalStyle/>
              <Header/>
              <Routes>
                  <Route path="/" exact element={<Home/>}/>
              </Routes>
          </Router>
    </div>
  );
}

export default App;
