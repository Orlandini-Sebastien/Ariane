import { MouseEventHandler, ReactElement } from "react";

	
    type ButtonsProps = {
        title : string,
        click : MouseEventHandler,
        active : boolean
    }

	const Buttons = ({ title, click, active } : ButtonsProps) : ReactElement => {
	let color = "";
	{
		active ? (color += "blue") : (color += "white");
	}

	return (
		<div className="button" style={{ backgroundColor: color }} onClick={click} >
			{title}
		</div>
	);
};

export default Buttons;
