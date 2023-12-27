import { ReactElement } from "react";

type GoProps = {
	startOrNot: boolean;
};

const Go = ({ startOrNot }: GoProps): ReactElement => {
	return (
		<>
			{startOrNot ? (
				<div className="classGo">
					<a href="https://www.ariane.group/fr/lancement-spatial/ariane-6/">
						Go!🚀
					</a>
				</div>
			) : (
				<div className="classNo">No way!</div>
			)}
		</>
	);
};

export default Go;
