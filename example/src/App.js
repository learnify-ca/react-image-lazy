import React from "react";

import logo from './logo192.png';
import Image from "@learnify/react-image";

function App() {
	return (
		<div className="App">
			<Image
				errorFallback={(error, errorInfo) => {
					return (
						<div>
							<p>{error}</p>
							{errorInfo && <p>{errorInfo}</p>}
						</div>)
				}}
				srcList={[logo, logo]}
			/>
		</div>
	);
}

export default App;
