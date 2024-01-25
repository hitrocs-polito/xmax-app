import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

import { CartContextProvider } from "./components/contexts/CartContext.jsx";
import { LikedContextProvider } from "./components/contexts/LikedContext.jsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<LikedContextProvider>
		<CartContextProvider>
			<App />
		</CartContextProvider>
	</LikedContextProvider>
);
