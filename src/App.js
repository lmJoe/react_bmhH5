import logo from './logo.svg';
import { Provider } from 'react-redux';
import { BrowserRouter,Route,Redirect,Switch } from 'react-router-dom'
import Header from './common/header/index.js'
import Swiper from './common/swiper/index.js'
// import Detail from './pages/loadable.js'//隐藏是由于打包后跳转页面出错
import Detail from './pages/index.js'
import Author from './common/author/index.js'
import store from './store';
function App() {
  return (
    <Provider store={store}>
      <BrowserRouter basename="liming2">
        <Header />
        <Route path='/welcome' component={Swiper} exact></Route>
        <Route path='/detail/:id' exact component={Detail}></Route>
        <Route path='/author/:id' exact component={Author}></Route>
      </BrowserRouter>
    </Provider>
  );
}

export default App;