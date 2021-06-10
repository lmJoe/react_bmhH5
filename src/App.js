import logo from './logo.svg';
import { Provider } from 'react-redux';
import { BrowserRouter,Route } from 'react-router-dom'
import Header from './common/header/index.js'
import Swiper from './common/swiper/index.js'
import Detail from './pages/loadable.js'
import store from './store';
function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Route path='/' exact component={Swiper}></Route>
        <Route path='/detail/:id' exact component={Detail}></Route>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
