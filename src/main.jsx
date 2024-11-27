import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/App';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';
import { BrowserRouter } from 'react-router-dom';

let persistor = persistStore(store);

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<BrowserRouter>
			<Provider store={store}>
				<PersistGate persistor={persistor}>
					<App />
				</PersistGate>
			</Provider>
		</BrowserRouter>
	</StrictMode>
);
