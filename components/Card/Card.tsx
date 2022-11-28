import { FC } from "react";
import TShirtImg from "../../assets/t-shirt.png";
import Link from "next/link";
import Image from "next/image";
import { DeliveryCarIcon, StarIcon } from "../icons";

const Card: FC = () => {
	return (
		<div className="max-w-sm bg-[#d9d9d9] rounded-lg shadow-lg py-5 px-4">
			{/* card Image */}
			<Image
				className="block h-full w-full object-cover"
				src={TShirtImg}
				alt="t-shirt"
			/>

			{/* card content */}
			<div className="pt-4">
				<p className="text-sm font-bold text-black">{`Carhartt Men's Loose Fit Midweight Logo Sleeve Graphic Sweatshirt`}</p>

				{/* Ratings */}
				<div className="my-2 flex items-center gap-1">
					<StarIcon />
					<StarIcon />
					<StarIcon />
					<StarIcon />
				</div>

				{/* price */}
				<div className="flex items-center justify-between">
					<div className="flex items-end">
						<p className="font-bold text-[#494747] text-xl">$</p>
						<p className="font-bold text-[#494747] text-5xl">66</p>
						<sup className="font-bold text-[#494747] text-4xl">24</sup>
					</div>

					<div className="flex flex-col items-end">
						<DeliveryCarIcon />

						<p className="my-1 font-bold text-xl text-secondary">
							express Delivery
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Card;
