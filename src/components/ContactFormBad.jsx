import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { TriangleAlert } from "lucide-react";

import SuccessToastChineseBad from "./SuccessToastChineseBad";

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

export default function ContactFormBad() {
	const [isShowToast, setIsShowToast] = useState(false);
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: zodResolver(schema),
		shouldFocusError: false,
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
			<form className="space-y-5 " onSubmit={handleSubmit(onSubmit)}>
				<div className="space-y-5 md:grid md:grid-cols-2 md:gap-5 md:space-y-0">
					<div className="flex flex-col gap-2">
						<label>姓氏 *</label>
						<input
							type="text"
							placeholder="王"
							{...register("firstName")}
							className="rounded-lg focus:ring-2 focus:ring-offset-2 focus:ring-theme-green-600 border-theme-gray-900 focus:border-theme-green-600 cursor-pointer"
						/>
						{errors.firstName && (
							<span className="text-theme-red-500 inline-flex items-center gap-1">
								<TriangleAlert />
								{errors.firstName.message}
							</span>
						)}
					</div>
					<div className="flex flex-col gap-2">
						<label>名字 *</label>
						<input
							type="text"
							placeholder="小明"
							{...register("lastName")}
							className="rounded-lg focus:ring-2 focus:ring-offset-2 focus:ring-theme-green-600 border-theme-gray-900 focus:border-theme-green-600 cursor-pointer"
						/>
						{errors.lastName && (
							<span className="text-theme-red-500 inline-flex items-center gap-1">
								<TriangleAlert />
								{errors.lastName.message}
							</span>
						)}
					</div>
				</div>
				<div className="flex flex-col gap-2">
					<label>電子郵件 *</label>
					<input
						type="email"
						placeholder="johnny.wang@gmail.com"
						{...register("emailAddress")}
						className="rounded-lg focus:ring-2 focus:ring-offset-2 focus:ring-theme-green-600 border-theme-gray-900 focus:border-theme-green-600 cursor-pointer"
					/>
					{errors.emailAddress && (
						<span className="text-theme-red-500 inline-flex items-center gap-1">
							<TriangleAlert />
							{errors.emailAddress.message}
						</span>
					)}
				</div>
				<fieldset>
					<legend className="inline-block mb-3">問題類型 *</legend>
					<div className="md:flex md:gap-5 space-y-5 md:space-y-0">
						<label className="w-full inline-block px-5 py-3 border border-theme-gray-900 rounded-lg space-x-3 cursor-pointer focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-theme-green-600 focus-within:border-theme-green-600 has-[:checked]:bg-theme-green-200 has-[:checked]:border-theme-green-600">
							<input
								type="radio"
								{...register("queryType")}
								value="一般問題"
								className="mr-3 checked:ring-theme-green-600 checked:text-theme-green-600 focus:ring-theme-green-600"
							/>
							一般問題
						</label>

						<label className="w-full inline-block px-5 py-3 border border-theme-gray-900 rounded-lg space-x-3 cursor-pointer focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-theme-green-600 focus-within:border-theme-green-600 has-[:checked]:bg-theme-green-200 has-[:checked]:border-theme-green-600">
							<input
								type="radio"
								{...register("queryType")}
								value="支援請求"
								className="mr-3 checked:ring-theme-green-600 checked:text-theme-green-600 focus:ring-theme-green-600"
							/>
							支援請求
						</label>
					</div>
					{errors.queryType && (
						<span className="text-theme-red-500 mt-2 inline-flex gap-1">
							<TriangleAlert />
							{errors.queryType.message}
						</span>
					)}
				</fieldset>
				<div className="flex flex-col gap-2">
					<label>問題內容 *</label>
					<textarea
						{...register("message")}
						rows="4"
						placeholder="哈囉！我想知道如何登入後台？"
						className="rounded-lg focus:ring-2 focus:ring-offset-2 focus:ring-theme-green-600 border-theme-gray-900 focus:border-theme-green-600 cursor-pointer"
					></textarea>
					{errors.message && (
						<span className="text-theme-red-500 inline-flex items-center gap-1">
							<TriangleAlert />
							{errors.message.message}
						</span>
					)}
				</div>
				<div className="py-5">
					<div className="flex items-center gap-5 mb-3">
						<input
							type="checkbox"
							{...register("consent")}
							className="focus:ring-theme-green-600 focus:text-theme-green-600 checked:text-theme-green-600 cursor-pointer"
						/>
						<label className="cursor-pointer">
							我同意收到來自客服團隊的訊息 *
						</label>
					</div>
					{errors.consent && (
						<span className="text-theme-red-500 inline-flex items-center gap-1">
							<TriangleAlert />
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
			<SuccessToastChineseBad isShowToast={isShowToast} />
		</div>
	);
}
