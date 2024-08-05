import React from "react";
import "./ChecknContactBtn.scss";

function ChecknContactBtn({ buttonName, onClick }) {
	return (
		<button type="button" className="checknContactBtn" onClick={onClick} >
			<span>{buttonName}</span>
			<svg width="15" height="15" viewBox="0 0 21 24" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path
					d="M8.16125 2.39939C8.17942 2.55889 8.22917 2.71513 8.30763 2.8591C8.38609 3.00307 8.49171 3.13192 8.61838 3.23821C8.74506 3.34451 8.89029 3.42614 9.0457 3.47841C9.2011 3.53068 9.36361 3.55254 9.52385 3.54275L15.758 3.18715L0.283214 21.6293C0.0822264 21.8689 -0.00943126 22.1834 0.0284049 22.5038C0.066241 22.8242 0.230472 23.1241 0.484968 23.3377C0.739465 23.5512 1.06338 23.6608 1.38546 23.6425C1.70753 23.6241 2.00139 23.4792 2.20237 23.2397L17.6696 4.80655L18.4 10.9907C18.3934 11.1655 18.4255 11.342 18.4942 11.5078C18.5628 11.6736 18.6663 11.8247 18.7973 11.9507C18.9284 12.0767 19.084 12.1745 19.2533 12.2373C19.4226 12.3002 19.6015 12.3265 19.7776 12.3146C19.9537 12.3027 20.1227 12.2527 20.273 12.1682C20.4233 12.0837 20.5511 11.9666 20.6477 11.8252C20.7443 11.6838 20.8074 11.5213 20.8324 11.3492C20.8574 11.1771 20.8439 10.9994 20.7927 10.8284L20.0018 4.13178C19.8878 3.17147 19.3953 2.27253 18.6324 1.63241C17.8696 0.992284 16.8987 0.663329 15.9332 0.717799L9.20099 1.1018C8.88107 1.12777 8.59213 1.27883 8.3973 1.52197C8.20247 1.76511 8.11761 2.08056 8.16125 2.39939Z"
					fill="#dfa95d"
				/>
			</svg>
		</button>
	);
}

export default ChecknContactBtn;