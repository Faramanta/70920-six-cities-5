import ReactDOM from "react-dom";
import {createStore, applyMiddleware} from "redux";
import {Provider} from "react-redux";
import thunk from "redux-thunk";
import {createAPI} from "./services/api";
import App from '@components/app/app.connect';
import rootReducer from "@store/redusers/root-reducer";
import {requireAuthorization} from "@store/action";
import {AuthorizationStatus} from "@const";
import {composeWithDevTools} from "redux-devtools-extension";
import "leaflet/dist/leaflet.css";

const api = createAPI(
    () => store.dispatch(requireAuthorization(AuthorizationStatus.NO_AUTH))
);

const store = createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(thunk.withExtraArgument(api))
    )
);

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.querySelector(`#root`)
);

