import { FC } from "react";
import Image from "next/image";
import ManImg from "../../assets/man.png";

const Banner: FC = () => {
	return (
		<div className="grid md:grid-cols-2 gap-10">
			<div className="text-right flex flex-col justify-center items-end">
				<h1 className="uppercase text-secondary font-bold text-[64px]">
					UPTO 60% OFF
				</h1>
				<h1 className="uppercase text-black font-bold text-[64px]">
					on every new <br /> arrival <br /> collection
				</h1>

				<button className="mt-10 w-[181px] h-[64px] bg-primary hover:bg-primary-light active:bg-primary transition duration-150 rounded-3xl text-base text-[#fff] py-2 px-10 font-bold">
					Explore Now
				</button>
			</div>
			<div>
				<Image src={ManImg} alt="image of banner" />
			</div>
		</div>
	);
};

export default Banner;
