import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./store/reducers";

// styling
import CssBaseline from "@material-ui/core/CssBaseline";
import "./styles/index.css";

// app components
import App from "./components/App";

const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <CssBaseline>
      <App />
    </CssBaseline>
  </Provider>,
  document.getElementById("root")
);
