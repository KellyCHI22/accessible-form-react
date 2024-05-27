import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import SuccessToast from "./SuccessToast";

const schema = z.object({
	firstName: z.string().min(1, { message: "This field is required" }),
	lastName: z.string().min(1, { message: "This field is required" }),
	emailAddress: z
		.string()
		.email({ message: "Please enter a valid email address" }),
	queryType: z
		.string({
			invalid_type_error: "Please select a query type",
		})
		.min(1, { message: "Please select a query type" }),
	message: z.string().min(1, { message: "This field is required" }),
	consent: z.boolean().refine((data) => (data ? true : false), {
		message: "To submit this form, please consent to being contacted",
	}),
});

export default function ContactForm() {
	const [isShowToast, setIsShowToast] = useState(false);
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: zodResolver(schema),
	});

	const onSubmit = (d) => {
		console.log(d);
		setIsShowToast(true);
		setTimeout(() => {
			setIsShowToast(false);
		}, 5000);
	};

	return (
		<div className="bg-white rounded-xl p-5 md:w-[750px] md:p-8 text-theme-gray-900 ">
			<h1 id="form-title" className="text-2xl font-bold mb-2 md:text-3xl">
				Contact Us
			</h1>
			<p id="form-description" className="text-theme-green-600 mb-5">
				Required fields are marked with an asterisk (*).
			</p>
			<form
				className="space-y-5 "
				aria-labelledby="form-title"
				aria-describedby="form-description"
				onSubmit={handleSubmit(onSubmit)}
			>
				<div className="space-y-5 md:grid md:grid-cols-2 md:gap-5 md:space-y-0">
					<div className="flex flex-col gap-2">
						<label htmlFor="first-name">First Name *</label>
						<input
							type="text"
							id="first-name"
							placeholder="John"
							aria-required
							aria-invalid={errors.firstName ? "true" : "false"}
							aria-describedby="first-name-error"
							{...register("firstName")}
							className="rounded-lg focus:ring-2 focus:ring-offset-2 focus:ring-theme-green-600 border-theme-gray-900 focus:border-theme-green-600 cursor-pointer"
						/>
						{errors.firstName && (
							<span id="first-name-error" className="text-theme-red-500">
								{errors.firstName.message}
							</span>
						)}
					</div>
					<div className="flex flex-col gap-2">
						<label htmlFor="last-name">Last Name *</label>
						<input
							type="text"
							id="last-name"
							placeholder="Doe"
							{...register("lastName")}
							aria-required
							aria-invalid={errors.lastName ? "true" : "false"}
							aria-describedby="last-name-error"
							className="rounded-lg focus:ring-2 focus:ring-offset-2 focus:ring-theme-green-600 border-theme-gray-900 focus:border-theme-green-600 cursor-pointer"
						/>
						{errors.lastName && (
							<span id="last-name-error" className="text-theme-red-500">
								{errors.lastName.message}
							</span>
						)}
					</div>
				</div>
				<div className="flex flex-col gap-2">
					<label htmlFor="email">Email Address *</label>
					<input
						type="email"
						id="email"
						placeholder="john.doe@gmail.com"
						{...register("emailAddress")}
						aria-required
						aria-invalid={errors.emailAddress ? "true" : "false"}
						aria-describedby="email-error"
						className="rounded-lg focus:ring-2 focus:ring-offset-2 focus:ring-theme-green-600 border-theme-gray-900 focus:border-theme-green-600 cursor-pointer"
					/>
					{errors.emailAddress && (
						<span id="email-error" className="text-theme-red-500">
							{errors.emailAddress.message}
						</span>
					)}
				</div>
				<fieldset>
					<legend className="inline-block mb-3">Query Type *</legend>
					<div className="md:flex md:gap-5 space-y-5 md:space-y-0">
						<label
							htmlFor="general-enquiry"
							className="w-full inline-block px-5 py-3 border border-theme-gray-900 rounded-lg space-x-3 cursor-pointer focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-theme-green-600 focus-within:border-theme-green-600 has-[:checked]:bg-theme-green-200 has-[:checked]:border-theme-green-600"
						>
							<input
								type="radio"
								id="general-enquiry"
								{...register("queryType")}
								value="general enquiry"
								aria-required
								aria-invalid={errors.queryType ? "true" : "false"}
								aria-describedby="query-type-error"
								className="mr-3 checked:ring-theme-green-600 checked:text-theme-green-600 focus:ring-theme-green-600"
							/>
							General Enquiry
						</label>

						<label
							htmlFor="support-request"
							className="w-full inline-block px-5 py-3 border border-theme-gray-900 rounded-lg space-x-3 cursor-pointer focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-theme-green-600 focus-within:border-theme-green-600 has-[:checked]:bg-theme-green-200 has-[:checked]:border-theme-green-600"
						>
							<input
								type="radio"
								id="support-request"
								{...register("queryType")}
								value="support request"
								aria-required
								aria-invalid={errors.queryType ? "true" : "false"}
								aria-describedby="query-type-error"
								className="mr-3 checked:ring-theme-green-600 checked:text-theme-green-600 focus:ring-theme-green-600"
							/>
							Support Request
						</label>
					</div>
					{errors.queryType && (
						<span
							id="query-type-error"
							className="text-theme-red-500 mt-2 inline-block"
						>
							{errors.queryType.message}
						</span>
					)}
				</fieldset>
				<div className="flex flex-col gap-2">
					<label htmlFor="message">Message *</label>
					<textarea
						id="message"
						{...register("message")}
						rows="4"
						placeholder="Hello! I would like to connect with you!"
						aria-required
						aria-invalid={errors.message ? "true" : "false"}
						aria-describedby="message-error"
						className="rounded-lg focus:ring-2 focus:ring-offset-2 focus:ring-theme-green-600 border-theme-gray-900 focus:border-theme-green-600 cursor-pointer"
					></textarea>
					{errors.message && (
						<span id="message-error" className="text-theme-red-500">
							{errors.message.message}
						</span>
					)}
				</div>
				<div className="py-5">
					<div className="flex items-center gap-5 mb-3">
						<input
							type="checkbox"
							id="consent"
							{...register("consent")}
							aria-required
							aria-invalid={errors.consent ? "true" : "false"}
							aria-describedby="consent-error"
							className="focus:ring-theme-green-600 focus:text-theme-green-600 checked:text-theme-green-600 cursor-pointer"
						/>
						<label htmlFor="consent" className="cursor-pointer">
							I consent to being contacted by the team *
						</label>
					</div>
					{errors.consent && (
						<span id="consent-error" className="text-theme-red-500">
							{errors.consent.message}
						</span>
					)}
				</div>
				<button
					type="submit"
					className="bg-theme-green-600 text-white w-full py-3 rounded-lg focus:ring-2 focus:ring-offset-2 focus:ring-theme-green-600 focus:outline-none"
				>
					Submit
				</button>
			</form>
			<SuccessToast isShowToast={isShowToast} />
		</div>
	);
}
