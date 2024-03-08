import "./App.css";
import { Form } from "./components/Form";

function App() {
	return (
		<div className="App w-screen ">
			<div className=" f-full flex bg-contain lg:px-[20%] ">
				<div className="w-1/2">
					<img
						className="w-full"
						src="https://www.artlimited.net/user/0/0/3/8/8/7/9/11927201/digital-art-conceptual-beauty-portrait-computer-graphic-3d-people-portrait-female-large-open.webp"
						alt="form-img"
					/>
				</div>
				<div className="w-1/2 p-4">
					<Form />
				</div>
			</div>
		</div>
	);
}

export default App;
