import { ReactElement } from "react";
import Buttons from "./Buttons";

type ToggleProps = {
    switchy : boolean,
    setSwitchy : Function
}

const Toggle = ({ switchy, setSwitchy } : ToggleProps) : ReactElement => {
	return (
		<section className="toggle">
			<Buttons
				title="On"
				active={switchy === false}
				click={() => setSwitchy(false)}
				
			/>
			<Buttons
				title="Off"
				active={switchy === true}
				click={() => setSwitchy(true)}
			/>
		</section>
	);
};

export default Toggle;