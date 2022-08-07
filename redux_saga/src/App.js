import './App.css';
import Header from './components/Header';
import {useSelector} from "react-redux";

function App() {
  const data = useSelector((state) => state)
  console.log("allReducer-from STORE-", data)
  return (
    <div className="App">
      <Header />
    </div>
  );
}

export default App;
