import React, { useState } from "react";
import Purpose from "./Purpose";

const inputStyle = {
	borderBottom: "1px solid black",
	width: "100%",
	color: "black",
	padding: "0.5rem",
	outline: "none",
};
const listOfPurpose = ["app dev", "web dev", "ai dev"];

export const Form = () => {
	const initialData = {
		name: "",
		phone: "",
		email: "",
		purpose: "",
		message: "",
	};
	const [data, setData] = useState(initialData);
	const handleSubmit = (e) => {
		e.preventDefault();
		const { name, email, phone, purpose, message } = data;
		if (name.length < 3 || !isNaN(name)) {
			alert("Invalid name");
		} else if (!email.includes("@")) {
			alert("Invalid email");
		} else if (phone.length < 10 || isNaN(phone)) {
			alert("Invalid phone no");
		} else if (purpose === "") {
			alert("Please select purpose");
		} else if (message === "") {
			alert("please enter messge");
		} else {
			alert("Thank you for response");
			setData(initialData);
		}
	};
	const handleChange = (e) => {
		setData({ ...data, [e.target.name]: e.target.value });
	};
	const handlePurposeClick = (text) => {
		setData({ ...data, purpose: text });
	};
	return (
		<form className="">
			<h1 className="text-2xl text-center">Form heading</h1>
			<input
				style={inputStyle}
				onChange={handleChange}
				name="name"
				value={data.name}
				placeholder="Name"
			/>
			<input
				style={inputStyle}
				onChange={handleChange}
				name="email"
				value={data.email}
				placeholder="Email address"
			/>
			<input
				style={inputStyle}
				onChange={handleChange}
				name="phone"
				value={data.phone}
				placeholder="Contact no"
			/>
			<p className="my-4">Purpose of Contact</p>
			<div className="flex flex-wrap gap-2">
				{listOfPurpose.map((item) => {
					return (
						<Purpose
							text={item}
							data={data}
							handlePurposeClick={() => {
								handlePurposeClick(item);
							}}
						/>
					);
				})}
			</div>

			<textarea
				name="message"
				value={data.message}
				onChange={handleChange}
				placeholder="message"
				className=" p-2 block outline-none  my-4 w-full border border-black"
			></textarea>
			<button
				onClick={handleSubmit}
				className=" bg-black  text-white rounded-sm py-[2px] px-4"
			>
				Submit
			</button>
		</form>
	);
};
