import { useState } from "react";
import "./App.css";
import Go from "./assets/components/Go";
import Toggle from "./assets/components/Toggle";
import Header from "./assets/components/Header";
import Footer from "./assets/components/Footer";

function App() {
	const [switch1, setSwitch1] = useState(false);
	const [switch2, setSwitch2] = useState(false);
	const [switch3, setSwitch3] = useState(false);

	return (
		<>
			<Header />
			<section className="layout">
				<div className="toggles">
					<Toggle switchy={switch1} setSwitchy={setSwitch1} />
					<Toggle switchy={switch2} setSwitchy={setSwitch2} />
					<Toggle switchy={switch3} setSwitchy={setSwitch3} />
				</div>
				<div className="text">
					<Go
						startOrNot={
							switch1 === false && switch2 === false && switch3 === false
						}
					/>
				</div>
			</section>
      <Footer/>

		</>
	);
}

export default App;
