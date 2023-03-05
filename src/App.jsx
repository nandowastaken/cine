import { RouterProvider} from 'react-router-dom';
import router from './router';

import { useSelector } from 'react-redux';

import LoadingScreen from './components/LoadingScreen';

import "./App.css";

function App() {
  const loadingIsVisible = useSelector(state => state.loading.value);

  return (
    <div className="App">
      <RouterProvider router={router} />

      {
        (loadingIsVisible)
          ? (
            <LoadingScreen />
          )
          : null
      }
    </div>
  );
}

export default App;
