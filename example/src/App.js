import React from "react";

import logo from './logo.svg';
import Image from "@learnify/react-image";

function App() {
	return (
		<div className="App">
			<Image srcList={[logo, logo]} />
		</div>
	);
}

export default App;
