import React from "react";
import { Provider } from "react-redux";
import Calculator from "./components/Calculator";
import store from "./store/configureStore";

import "./App.css";

interface Props {}

const App: React.FC<Props> = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <Calculator />
      </div>
    </Provider>
  );
};

export default App;
