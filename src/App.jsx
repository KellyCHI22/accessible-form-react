import "@fontsource-variable/karla";
import ContactForm from "./components/ContactForm";

function App() {
	return (
		<>
			<div className="bg-theme-green-200 p-5 min-h-dvh sm:min-h-screen sm:py-24 sm:grid sm:place-items-center">
				<ContactForm />
			</div>
		</>
	);
}

export default App;
