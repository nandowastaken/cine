import "./App.css";

import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import LoadingScreen from './components/LoadingScreen';

import store from './app/store';
import router from './router';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </div>
  );
}

export default App;
