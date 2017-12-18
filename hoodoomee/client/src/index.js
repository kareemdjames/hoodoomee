import ReactDOM from 'react-dom';
import './index.css';
import {makeMainRoutes} from "./Routes/Routes";
import registerServiceWorker from './registerServiceWorker';

const routes = makeMainRoutes();

registerServiceWorker();

ReactDOM.render(
    routes,
    document.getElementById('root')
);
