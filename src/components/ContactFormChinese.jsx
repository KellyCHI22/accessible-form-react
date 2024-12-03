import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { TriangleAlert } from "lucide-react";

import SuccessToastChinese from "./SuccessToastChinese";

const schema = z.object({
	firstName: z.string().min(1, { message: "此欄位為必填" }),
	lastName: z.string().min(1, { message: "此欄位為必填" }),
	emailAddress: z.string().email({ message: "請輸入正確格式的電子郵件" }),
	queryType: z
		.string({
			invalid_type_error: "請選擇一種問題類型",
		})
		.min(1, { message: "請選擇一種問題類型" }),
	message: z.string().min(1, { message: "此欄位為必填" }),
	consent: z.boolean().refine((data) => (data ? true : false), {
		message: "若要提交此表單，請勾選此項目",
	}),
});

export default function ContactFormChinese() {
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
				聯絡我們
			</h1>
			<p id="form-description" className="text-theme-green-600 mb-5">
				星號標記欄位為必填欄位 (*).
			</p>
			<form
				className="space-y-5 "
				aria-labelledby="form-title"
				aria-describedby="form-description"
				onSubmit={handleSubmit(onSubmit)}
			>
				<div className="space-y-5 md:grid md:grid-cols-2 md:gap-5 md:space-y-0">
					<div className="flex flex-col gap-2">
						<label htmlFor="first-name">姓氏 *</label>
						<input
							type="text"
							id="first-name"
							placeholder="王"
							aria-required
							aria-invalid={errors.firstName ? "true" : "false"}
							aria-describedby="first-name-error"
							{...register("firstName")}
							className="rounded-lg focus:ring-2 focus:ring-offset-2 focus:ring-theme-green-600 border-theme-gray-900 focus:border-theme-green-600 cursor-pointer"
						/>
						{errors.firstName && (
							<span
								id="first-name-error"
								className="text-theme-red-500 inline-flex items-center gap-1"
							>
								<TriangleAlert aria-hidden />
								{errors.firstName.message}
							</span>
						)}
					</div>
					<div className="flex flex-col gap-2">
						<label htmlFor="last-name">名字 *</label>
						<input
							type="text"
							id="last-name"
							placeholder="小明"
							{...register("lastName")}
							aria-required
							aria-invalid={errors.lastName ? "true" : "false"}
							aria-describedby="last-name-error"
							className="rounded-lg focus:ring-2 focus:ring-offset-2 focus:ring-theme-green-600 border-theme-gray-900 focus:border-theme-green-600 cursor-pointer"
						/>
						{errors.lastName && (
							<span
								id="last-name-error"
								className="text-theme-red-500 inline-flex items-center gap-1"
							>
								<TriangleAlert aria-hidden />
								{errors.lastName.message}
							</span>
						)}
					</div>
				</div>
				<div className="flex flex-col gap-2">
					<label htmlFor="email">電子郵件 *</label>
					<input
						type="email"
						id="email"
						placeholder="johnny.wang@gmail.com"
						{...register("emailAddress")}
						aria-required
						aria-invalid={errors.emailAddress ? "true" : "false"}
						aria-describedby="email-error"
						className="rounded-lg focus:ring-2 focus:ring-offset-2 focus:ring-theme-green-600 border-theme-gray-900 focus:border-theme-green-600 cursor-pointer"
					/>
					{errors.emailAddress && (
						<span
							id="email-error"
							className="text-theme-red-500 inline-flex items-center gap-1"
						>
							<TriangleAlert aria-hidden />
							{errors.emailAddress.message}
						</span>
					)}
				</div>
				<fieldset>
					<legend className="inline-block mb-3">問題類型 *</legend>
					<div className="md:flex md:gap-5 space-y-5 md:space-y-0">
						<label
							htmlFor="一般問題"
							className="w-full inline-block px-5 py-3 border border-theme-gray-900 rounded-lg space-x-3 cursor-pointer focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-theme-green-600 focus-within:border-theme-green-600 has-[:checked]:bg-theme-green-200 has-[:checked]:border-theme-green-600"
						>
							<input
								type="radio"
								id="一般問題"
								{...register("queryType")}
								value="一般問題"
								aria-required
								aria-invalid={errors.queryType ? "true" : "false"}
								aria-describedby="query-type-error"
								className="mr-3 checked:ring-theme-green-600 checked:text-theme-green-600 focus:ring-theme-green-600"
							/>
							一般問題
						</label>

						<label
							htmlFor="支援請求"
							className="w-full inline-block px-5 py-3 border border-theme-gray-900 rounded-lg space-x-3 cursor-pointer focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-theme-green-600 focus-within:border-theme-green-600 has-[:checked]:bg-theme-green-200 has-[:checked]:border-theme-green-600"
						>
							<input
								type="radio"
								id="支援請求"
								{...register("queryType")}
								value="支援請求"
								aria-required
								aria-invalid={errors.queryType ? "true" : "false"}
								aria-describedby="query-type-error"
								className="mr-3 checked:ring-theme-green-600 checked:text-theme-green-600 focus:ring-theme-green-600"
							/>
							支援請求
						</label>
					</div>
					{errors.queryType && (
						<span
							id="query-type-error"
							className="text-theme-red-500 mt-2 inline-flex gap-1"
						>
							<TriangleAlert aria-hidden />
							{errors.queryType.message}
						</span>
					)}
				</fieldset>
				<div className="flex flex-col gap-2">
					<label htmlFor="message">問題內容 *</label>
					<textarea
						id="message"
						{...register("message")}
						rows="4"
						placeholder="哈囉！我想知道如何登入後台？"
						aria-required
						aria-invalid={errors.message ? "true" : "false"}
						aria-describedby="message-error"
						className="rounded-lg focus:ring-2 focus:ring-offset-2 focus:ring-theme-green-600 border-theme-gray-900 focus:border-theme-green-600 cursor-pointer"
					></textarea>
					{errors.message && (
						<span
							id="message-error"
							className="text-theme-red-500 inline-flex items-center gap-1"
						>
							<TriangleAlert aria-hidden />
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
							我同意收到來自客服團隊的訊息 *
						</label>
					</div>
					{errors.consent && (
						<span
							id="consent-error"
							className="text-theme-red-500 inline-flex items-center gap-1"
						>
							<TriangleAlert aria-hidden />
							{errors.consent.message}
						</span>
					)}
				</div>
				<button
					type="submit"
					className="bg-theme-green-600 text-white w-full py-3 rounded-lg focus:ring-2 focus:ring-offset-2 focus:ring-theme-green-600 focus:outline-none"
				>
					提交
				</button>
			</form>
			<SuccessToastChinese isShowToast={isShowToast} />
		</div>
	);
}
