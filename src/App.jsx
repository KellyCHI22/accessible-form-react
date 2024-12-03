import {
	Route,
	createBrowserRouter,
	createRoutesFromElements,
	RouterProvider,
	Outlet,
} from "react-router-dom";
import "@fontsource-variable/karla";
import ContactForm from "./components/ContactForm";
import ContactFormChinese from "./components/ContactFormChinese";
import ContactFormBad from "./components/ContactFormBad";

const Layout = () => {
	return (
		<div className="bg-theme-green-200 p-5 min-h-dvh sm:min-h-screen sm:py-24 sm:grid sm:place-items-center">
			<Outlet />
		</div>
	);
};

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<Layout />}>
			<Route index element={<ContactForm />} />
			<Route path="/cn" element={<ContactFormChinese />} />
			<Route path="/bad" element={<ContactFormBad />} />
		</Route>
	)
);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
