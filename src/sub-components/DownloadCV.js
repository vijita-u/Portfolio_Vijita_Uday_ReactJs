import React from "react";
import "./DownloadCV.scss";
import CV from "../files/Vijita-Udayabhanu-Frontend-Developer-w:o.pdf";

function DownloadCV() {
	return (
		<a href={CV} download="CV_VijitaUdayabhanu" target="_blank" rel="noopener noreferrer">
			<button type="button" className="downloadCV">
				<span>Download CV</span>
				<svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path
						d="M4.31999 7.83125C4.31999 8.05972 4.04666 8.2493 3.72666 8.2493H3.17333V7.41319H3.73333C4.05333 7.41319 4.32666 7.60278 4.32666 7.83125H4.31999ZM8.99999 3.88889H13.36C13.1267 3.44653 12.7733 3.03819 12.3 2.69306L9.97999 0.996528C9.50666 0.651389 8.94666 0.39375 8.33999 0.223611V3.40278C8.33999 3.67014 8.63999 3.88889 9.00666 3.88889H8.99999ZM7.05999 7.41319H6.49999V9.11458H7.05999C7.37999 9.11458 7.65333 8.925 7.65333 8.69653V7.83125C7.65333 7.60278 7.37999 7.41319 7.05999 7.41319ZM13.6667 5.09931V9.23611C13.6667 10.5778 12.1733 11.6667 10.3333 11.6667H3.66666C1.82666 11.6667 0.333328 10.5778 0.333328 9.23611V2.43056C0.333328 1.08889 1.82666 0 3.66666 0H6.67333C6.77999 0 6.88666 0.00486111 6.99999 0.00972222V3.40278C6.99999 4.20486 7.89999 4.86111 8.99999 4.86111H13.6533C13.66 4.93889 13.6667 5.01667 13.6667 5.09931ZM5.15333 7.83125C5.15333 7.26736 4.51333 6.80555 3.72666 6.80555H2.99999C2.63333 6.80555 2.33333 7.0243 2.33333 7.29167V9.45C2.33333 9.62014 2.51999 9.75139 2.74666 9.75139C2.97333 9.75139 3.15999 9.61528 3.15999 9.45V8.85694H3.71999C4.50666 8.85694 5.14666 8.39514 5.14666 7.83125H5.15333ZM8.48666 7.83125C8.48666 7.26736 7.84666 6.80555 7.05999 6.80555H6.33333C5.96666 6.80555 5.66666 7.0243 5.66666 7.29167V9.45C5.66666 9.62014 5.85333 9.72222 6.07999 9.72222C6.30666 9.72222 7.05333 9.72222 7.05333 9.72222C7.83999 9.72222 8.47999 9.26042 8.47999 8.69653V7.83125H8.48666ZM11.68 7.1118C11.68 6.94167 11.4933 6.81042 11.2667 6.81042H9.72666C9.49333 6.81042 9.31333 6.94653 9.31333 7.1118V9.45C9.31333 9.62014 9.49999 9.75139 9.72666 9.75139C9.95333 9.75139 10.14 9.61528 10.14 9.45V8.575H10.9667C11.2 8.575 11.38 8.43889 11.38 8.27361C11.38 8.10833 11.1933 7.97222 10.9667 7.97222H10.14V7.41806H11.2667C11.5 7.41806 11.68 7.28194 11.68 7.11667V7.1118Z"
						fill="#fff"
					/>
				</svg>
			</button>
		</a>
	);
}

export default DownloadCV;
