import { FC } from "react";
import Banner from "../Banner";
import Navbar from "../Navbar";

const Hero: FC = () => {
	return (
		<div className="h-auto  app-bg">
			<Navbar />
			<Banner />
		</div>
	);
};

export default Hero;
