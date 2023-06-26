import './App.css';
import DiceGame from './BaiTapTongHop/BaiTapSau/DiceGame';
import ContextProvider from './Context/ContextProvider';

function App() {
  return (
    <ContextProvider>
      <DiceGame />
    </ContextProvider>
  );
}

export default App;
