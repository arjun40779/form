import React from "react";

export default function Purpose({ data, handlePurposeClick, text }) {
	return (
		<span
			className={`${
				data.purpose === text ? "bg-red-600 border-white  text-white" : ""
			} cursor-pointer border border-black rounded-sm py-[2px] px-4  `}
			onClick={handlePurposeClick}
		>
			{text}
		</span>
	);
}
