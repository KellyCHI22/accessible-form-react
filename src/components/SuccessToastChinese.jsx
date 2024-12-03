import React from "react";

export default function SuccessToastChinese({ isShowToast }) {
	return (
		<div aria-live="assertive">
			{isShowToast ? (
				<div className="fixed top-0 inset-x-5 my-5 text-theme-green-200 bg-theme-gray-900 p-5 rounded-lg sm:max-w-[500px] sm:mx-auto">
					<p className="font-semibold pt-1 pb-2">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="20"
							height="21"
							fill="none"
							viewBox="0 0 20 21"
							className="inline mr-2"
							aria-hidden
						>
							<path
								fill="#fff"
								d="M14.28 7.72a.748.748 0 0 1 0 1.06l-5.25 5.25a.748.748 0 0 1-1.06 0l-2.25-2.25a.75.75 0 1 1 1.06-1.06l1.72 1.72 4.72-4.72a.75.75 0 0 1 1.06 0Zm5.47 2.78A9.75 9.75 0 1 1 10 .75a9.76 9.76 0 0 1 9.75 9.75Zm-1.5 0A8.25 8.25 0 1 0 10 18.75a8.26 8.26 0 0 0 8.25-8.25Z"
							/>
						</svg>
						訊息已成功送出
					</p>
					<p className="text-theme-green-200 font-light">
						感謝填寫表單，我們會盡快與您聯繫！
					</p>
				</div>
			) : null}
		</div>
	);
}