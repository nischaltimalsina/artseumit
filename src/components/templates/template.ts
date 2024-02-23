const template = ({title, name, email, phone, category , message}:{title:string, name:string, email:string, phone:string, category:string , message:string} ) => `<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Document</title>
	<style>
		* {
			box-sizing: border-box;
			margin:0;
			font-family: "Nunito", sans-serif;
			font-optical-sizing: auto;
			font-weight: 300;
			font-style: normal;
		}
		.wrapper{
			width:100%;
			display: flex;
			justify-content: center;
			padding:20px;
		}
		.inquiry{
			background-color:rgb(243, 243, 243);
			padding: 24px;
			border-radius: 8px;
			max-width: 545px;
		}
		.inquiry .content-group {
			display: flex;
			gap: 8px;
			flex-wrap: wrap;
		}
		.inquiry .content-box {
			min-width: 160px;
			display: flex;
			flex-direction: column;
			gap: 4px;
			padding: 8px;
		}
		.inquiry .content-box.message-box .detail{
			padding: 12px;
			background-color: white;
			border-radius: 4px;
			font-size: 14px;
		}
		.inquiry .content-box .title {
			font-size: 14px;
			color: slategrey;
		}
		.inquiry .content-box .detail {
			max-width:480px;
			color: #5b5b5b;
		}
		.inquiry .header-box{
			display: flex;
			gap: 8px;
			align-items: center;
			margin-bottom:20px;
		}
		.inquiry .header {
			padding-block: 12px;
			padding-inline:8px;
		}
		.inquiry .header .greet {
			font-size: 18px;
			color:  #5b5b5b;
		}
		.inquiry .header .title{
			font-size: 24px;
			font-weight: 600;
			color: #3555f5;
		}
		.inquiry .footer-box{
			width: 100%;
		}
		.inquiry .footer-box .main{
			padding: 8px;
			margin-top: 20px;
			text-align: center;
			font-size: 14px;
			font-weight: 300;
			width: 100%;
		}
		.inquiry .footer-box .about{
			max-width: 480px;
		}
		.footer-box .web-link {
			padding: 8px;
			display: flex;
			gap: 4px;
			flex-direction: column;
			justify-content: start;
			align-items: start;
		}
		.footer-box .address {
			margin-top: 12px;
			display: flex;
			gap: 12px;
			flex-direction: column;
			justify-content: start;
			align-items: start;
		}
		.footer-box .footer-contact {
			width: 100%;
			margin-top: 12px;
			display: flex;
			gap: 8px;
			flex-wrap: wrap;
			justify-content: start;
			text-align: start;
			background-color: white;
			padding: 16px 10px;
			border-radius: 4px;
		}
		.inquiry .footer-contact .contact-title{
			width: 100%;
			padding-inline: 8px;
			font-size: 16px;
			font-weight: 400;
			padding-bottom: 6px;
			border-bottom: 1px solid #b5b5b5;
		}
		.footer-box a{
			text-decoration: none;
			color: #5b5b5b;
		}
		.footer-box .address .address-item .location {
			font-size: 14px;
			font-weight: 400;
		}
		.footer-box .address .address-item {
			padding-inline: 8px;
			font-size: 12px;
		}
		.footer-box .address .address-item .contact{
			display: flex;
			flex-wrap: wrap;
			justify-content: start;
			gap:4px;
		}
		.footer-box .web-link .social{
			display: flex;
			gap: 8px;
			margin-top: 6px;
		}
	</style>
	<link rel="preconnect" href="https://fonts.googleapis.com">
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
	<link href="https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200..1000;1,200..1000&display=swap" rel="stylesheet">
</head>
<body>
	<div class="wrapper">
		<div class="inquiry">
			<div class="header-box">
				<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 121 125" fill="none">
					<path d="M47.9802 12.3565C33.7965 26.8618 24.8169 39.3524 16.4496 55.8723C5.83735 77.0259 1.75572 91.6319 0.939393 112.483L0.327148 124.873H4.91899H9.61286L10.3271 115.001C11.8578 94.6538 16.6537 77.0259 25.4292 59.7001C30.4292 49.9292 42.0618 32.2005 43.4904 32.2005C44.4088 32.2005 53.6945 44.4897 53.6945 45.6985C53.6945 46.0007 51.4496 50.9365 48.6945 56.6782C39.1027 76.22 34.4088 93.5458 33.5925 112.987L32.9802 124.873H37.572H42.1639L42.8782 115.505C44.3067 97.3736 48.7965 79.9471 56.4496 63.6286L60.1231 55.8723L63.4904 62.9235C70.9394 78.3354 75.8374 97.4743 76.8578 114.599L77.47 124.974L82.1639 124.672L86.8578 124.369L86.5516 113.893C86.1435 95.0567 81.0414 75.7164 71.5516 56.7789L66.1435 46.0007L70.021 40.259C75.5312 32.3013 76.3476 31.6969 78.8986 34.5173C82.8782 38.8488 89.4088 49.3248 94.6129 59.3979C104.001 78.0332 109.817 99.9926 109.817 117.016V124.873H115.123H120.327L119.715 114.296C118.694 98.6831 117.164 90.4231 112.878 77.5295C106.552 58.3906 95.2251 38.1437 82.368 23.1347C74.4088 13.7667 61.6537 0.973876 60.3271 0.973876C59.6129 0.973876 54.0006 6.11116 47.9802 12.3565ZM65.1231 17.796C67.7761 20.415 70.021 22.9333 70.021 23.3362C70.021 23.7391 67.7761 26.9625 65.1231 30.4881L60.1231 36.9349L55.021 30.1859L49.8169 23.4369L54.4088 18.2996C56.9598 15.3784 59.3067 13.0616 59.6129 13.0616C60.021 13.0616 62.47 15.177 65.1231 17.796Z" fill="black"/>
				</svg>
				<div class="header">
					<p class="greet">Hello ${name},</p>
					<p class="title">${title}</p>
				</div>
			</div>
			<div class="content-group">
				<div class="content-box">
					<p class="name title">Full name:</p>
					<p class="name detail">${name}</p>
				</div>
				<div class="content-box">
					<p class="email title">Email Address:</p>
					<p class="email detail">${email}</p>
				</div>
			</div>
			<div class="content-group">
				<div class="content-box">
					<p class="contact title">Contact Number:</p>
					<p class="contact detail">${phone}</p>
				</div>
				<div class="content-box">
					<p class="catrgory title">Category:</p>
					<p class="category detail">${category}</p>
				</div>
			</div>
			<div class="content-box message-box">
				<p class="message title">Message:</p>
				<p class="message detail">
					${message}
				</p>
			</div>
			<div class="footer-box">
				<div class="main">
					<p class='about'>
						Artseum, a dedicated team of developers and designers, specializes
						in crafting dynamic web experiences that drive results. Whether
						you&apos;re looking to increase brand awareness, generate leads,
						or boost sales, our team has the expertise to help you achieve
						your goals.
					</p>
					<div class="footer-contact">
						<p class="contact-title">Contact</p>
						<div class="address">
							<div class="address-item">
								<p class="location">Alseef, Dubai</p>
								<a href='tel:+97156900748' >
									+971 56900748
								</a>
							</div>
							<div class="address-item">
								<p class="location">Kathmandu, Nepal</p>
								<div class="contact">
									<a
									href='tel:+9779855011772'
									>
									+977 9855011772
									</a> |
									<a
									href='tel:+9779840528731'
									class='font-light hover:underline'>
									+977 9840528731
									</a>	
								</div>
							</div>
						</div>
						<div class="web-link">
							<a href="https://www.artseumit.com/" target="_blank">www.artseumit.com</a>
							<a
							href='mailto:artseumitsolution@gmail.com'>
							artseumitsolution@gmail.com
							</a>
							<div class="social">
								<a href="https://www.instagram.com/artseum_it_solution/?igsh=MTByZG5tazJzMzhiMg%3D%3D&utm_source=qr">
									<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="24" height="24" viewBox="0 0 256 256" xml:space="preserve">
									<defs>
									</defs>
									<g style="stroke: none; stroke-width: 0; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: none; fill-rule: nonzero; opacity: 1;" transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)" >
										<linearGradient id="SVGID_3" gradientUnits="userSpaceOnUse" gradientTransform="matrix(1 0 0 -1 0 92)"  x1="7.5528" y1="9.5531" x2="82.4473" y2="84.4475">
									<stop offset="0%" style="stop-color:rgb(255,214,0);stop-opacity: 1"/>
									<stop offset="50%" style="stop-color:rgb(255,1,0);stop-opacity: 1"/>
									<stop offset="100%" style="stop-color:rgb(216,0,185);stop-opacity: 1"/>
									</linearGradient>
									<path d="M 89.729 26.447 c -0.219 -4.79 -0.98 -8.061 -2.092 -10.923 c -1.13 -3.003 -2.901 -5.723 -5.19 -7.971 c -2.247 -2.289 -4.968 -4.062 -7.971 -5.192 C 71.614 1.25 68.343 0.49 63.553 0.272 C 58.754 0.053 57.221 0 45 0 S 31.246 0.053 26.447 0.271 c -4.79 0.219 -8.061 0.98 -10.923 2.092 c -3.003 1.13 -5.723 2.901 -7.971 5.19 c -2.289 2.247 -4.062 4.967 -5.192 7.97 C 1.25 18.386 0.49 21.657 0.272 26.446 C 0.052 31.246 0 32.779 0 45 c 0 12.222 0.052 13.755 0.272 18.554 c 0.218 4.789 0.979 8.061 2.092 10.923 c 1.13 3.002 2.901 5.723 5.19 7.97 c 2.247 2.289 4.968 4.061 7.971 5.19 c 2.862 1.113 6.133 1.873 10.923 2.092 C 31.247 89.948 32.78 90 45.001 90 s 13.754 -0.051 18.553 -0.271 c 4.79 -0.219 8.061 -0.979 10.923 -2.092 c 6.045 -2.337 10.823 -7.116 13.16 -13.16 c 1.113 -2.863 1.873 -6.134 2.092 -10.923 C 89.948 58.754 90 57.221 90 45 C 90 32.779 89.948 31.246 89.729 26.447 z M 81.629 63.185 c -0.2 4.388 -0.933 6.77 -1.549 8.356 c -1.514 3.925 -4.616 7.026 -8.54 8.54 c -1.585 0.616 -3.968 1.349 -8.356 1.549 C 58.44 81.847 57.016 81.892 45 81.892 c -12.017 0 -13.44 -0.045 -18.184 -0.262 c -4.387 -0.2 -6.77 -0.933 -8.356 -1.549 c -1.954 -0.722 -3.722 -1.872 -5.174 -3.367 c -1.495 -1.452 -2.645 -3.219 -3.367 -5.174 c -0.616 -1.585 -1.349 -3.968 -1.549 -8.356 c -0.216 -4.745 -0.262 -6.168 -0.262 -18.184 c 0 -12.016 0.046 -13.439 0.262 -18.184 c 0.201 -4.388 0.933 -6.77 1.549 -8.356 c 0.722 -1.955 1.872 -3.723 3.367 -5.175 c 1.452 -1.495 3.22 -2.645 5.175 -3.366 c 1.585 -0.617 3.968 -1.349 8.356 -1.55 C 31.561 8.154 32.984 8.108 45 8.108 h -0.001 c 12.016 0 13.439 0.046 18.184 0.263 c 4.388 0.2 6.77 0.933 8.356 1.549 c 1.954 0.722 3.722 1.872 5.174 3.366 c 1.495 1.452 2.645 3.22 3.366 5.175 c 0.617 1.585 1.35 3.968 1.55 8.356 c 0.216 4.745 0.262 6.168 0.262 18.184 C 81.891 57.017 81.846 58.439 81.629 63.185 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: url(#SVGID_3); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
										<linearGradient id="SVGID_4" gradientUnits="userSpaceOnUse" gradientTransform="matrix(1 0 0 -1 0 92)"  x1="28.6598" y1="30.66" x2="61.3394" y2="63.3397">
									<stop offset="0%" style="stop-color:rgb(255,100,0);stop-opacity: 1"/>
									<stop offset="50%" style="stop-color:rgb(255,1,0);stop-opacity: 1"/>
									<stop offset="100%" style="stop-color:rgb(253,0,86);stop-opacity: 1"/>
									</linearGradient>
									<path d="M 44.999 21.892 c -12.762 0 -23.108 10.346 -23.108 23.108 s 10.346 23.108 23.108 23.108 c 12.763 0 23.108 -10.346 23.108 -23.108 S 57.762 21.892 44.999 21.892 z M 44.999 60 C 36.716 59.999 30 53.284 30 45 c 0 -8.284 6.715 -15 15 -15 c 8.284 0.001 15 6.716 15 15 C 60 53.284 53.284 60 44.999 60 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: url(#SVGID_4); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
										<linearGradient id="SVGID_5" gradientUnits="userSpaceOnUse" gradientTransform="matrix(1 0 0 -1 0 92)"  x1="65.2021" y1="67.2024" x2="72.8391" y2="74.8394">
									<stop offset="0%" style="stop-color:rgb(243,0,114);stop-opacity: 1"/>
									<stop offset="100%" style="stop-color:rgb(229,0,151);stop-opacity: 1"/>
									</linearGradient>
									<path d="M 74.421 20.979 c 0 2.982 -2.418 5.4 -5.4 5.4 c -2.983 0 -5.4 -2.418 -5.4 -5.4 c 0 -2.983 2.418 -5.4 5.4 -5.4 C 72.003 15.579 74.421 17.997 74.421 20.979 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: url(#SVGID_5); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
									</g>
									</svg>
								</a>
								<a href="https://www.linkedin.com/in/artseum-it-solution-2a15762b4/">
									<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="24" height="24" viewBox="0 0 256 256" xml:space="preserve">
										<defs>
										</defs>
										<g style="stroke: none; stroke-width: 0; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: none; fill-rule: nonzero; opacity: 1;" transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)" >
											<path d="M 0 6.447 C 0 2.887 2.978 0 6.651 0 h 76.698 C 87.022 0 90 2.887 90 6.447 v 77.106 C 90 87.114 87.022 90 83.349 90 H 6.651 C 2.978 90 0 87.114 0 83.553 V 6.447 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,102,153); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
											<path d="M 20.485 29.151 c 4.74 0 7.691 -3.121 7.691 -7.021 c -0.088 -3.988 -2.95 -7.022 -7.601 -7.022 c -4.65 0 -7.69 3.034 -7.69 7.022 c 0 3.9 2.95 7.021 7.512 7.021 H 20.485 L 20.485 29.151 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
											<path d="M 27.282 75.339 v -40.64 H 13.688 v 40.64 H 27.282 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
											<path d="M 34.804 75.339 h 13.594 V 52.644 c 0 -1.215 0.088 -2.428 0.447 -3.296 c 0.983 -2.427 3.219 -4.94 6.975 -4.94 c 4.919 0 6.887 3.727 6.887 9.19 v 21.741 h 13.592 V 52.037 c 0 -12.483 -6.706 -18.291 -15.65 -18.291 c -7.333 0 -10.553 4.073 -12.342 6.847 h 0.091 v -5.894 H 34.804 C 34.982 38.513 34.804 75.339 34.804 75.339 L 34.804 75.339 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
										</g>
									</svg>
								</a>
								<a href="https://www.facebook.com/profile.php?id=61556533765869&sfnsn=scwspwa&mibextid=RUbZ1f">
									<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="24" height="24" viewBox="0 0 256 256" xml:space="preserve">
										<defs>
										</defs>
										<g style="stroke: none; stroke-width: 0; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: none; fill-rule: nonzero; opacity: 1;" transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)" >
											<circle cx="45" cy="45" r="45" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(60,90,153); fill-rule: nonzero; opacity: 1;" transform="  matrix(1 0 0 1 0 0) "/>
											<path d="M 49.645 74.998 V 47.631 h 9.186 l 1.375 -10.665 H 49.645 v -6.809 c 0 -3.088 0.857 -5.192 5.285 -5.192 l 5.648 -0.002 v -9.539 c -0.977 -0.13 -4.329 -0.42 -8.23 -0.42 c -8.143 0 -13.717 4.97 -13.717 14.098 v 7.865 h -9.209 v 10.665 h 9.209 v 27.367 H 49.645 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
										</g>
									</svg>
								</a>
								<a href="https://api.whatsapp.com/send/?phone=971569007480&text&type=phone_number&app_absent=0">
									<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="24" height="24" viewBox="0 0 256 256" xml:space="preserve">

										<defs>
										</defs>
										<g style="stroke: none; stroke-width: 0; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: none; fill-rule: nonzero; opacity: 1;" transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)" >
											<path d="M 3.188 90 c -0.791 0 -1.562 -0.313 -2.133 -0.891 c -0.754 -0.762 -1.044 -1.868 -0.761 -2.902 l 5.583 -20.384 c -3.491 -6.472 -5.333 -13.754 -5.34 -21.146 c 0 -0.019 0 -0.038 0 -0.057 C 0.546 20.017 20.571 0 45.175 0 C 57.109 0.005 68.322 4.653 76.75 13.086 c 8.428 8.436 13.066 19.647 13.063 31.57 c -0.011 24.605 -20.034 44.623 -44.637 44.623 c -7.056 -0.002 -14.036 -1.683 -20.283 -4.869 L 3.948 89.902 C 3.697 89.968 3.441 90 3.188 90 z M 25.26 78.213 c 0.498 0 0.992 0.124 1.436 0.366 c 5.636 3.073 12.02 4.698 18.462 4.7 c 21.313 0 38.646 -17.327 38.654 -38.625 c 0.004 -10.32 -4.012 -20.025 -11.307 -27.327 C 65.211 10.027 55.505 6.004 45.174 6 C 23.896 6 6.573 23.298 6.537 44.571 c 0 0.018 0 0.035 0 0.053 c -0.002 6.784 1.781 13.461 5.156 19.309 c 0.401 0.694 0.507 1.52 0.295 2.293 L 7.454 82.78 l 17.046 -4.47 C 24.75 78.245 25.005 78.213 25.26 78.213 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(42,181,64); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
											<path d="M 34.769 27.22 c -0.779 -1.733 -1.6 -1.767 -2.341 -1.798 c -0.607 -0.026 -1.301 -0.024 -1.994 -0.024 c -0.694 0 -1.821 0.26 -2.774 1.301 c -0.954 1.041 -3.642 3.558 -3.642 8.676 c 0 5.119 3.729 10.065 4.248 10.76 c 0.52 0.694 7.198 11.534 17.771 15.703 c 8.789 3.466 10.577 2.776 12.485 2.603 c 1.907 -0.173 6.155 -2.516 7.022 -4.945 c 0.867 -2.429 0.867 -4.511 0.607 -4.946 c -0.26 -0.434 -0.954 -0.694 -1.994 -1.214 c -1.041 -0.52 -6.155 -3.037 -7.109 -3.385 c -0.954 -0.347 -1.648 -0.52 -2.341 0.522 c -0.694 1.04 -2.686 3.383 -3.293 4.077 c -0.607 0.695 -1.214 0.782 -2.254 0.262 c -1.041 -0.522 -4.392 -1.62 -8.367 -5.163 c -3.093 -2.758 -5.181 -6.163 -5.788 -7.205 c -0.607 -1.04 -0.065 -1.604 0.457 -2.123 c 0.467 -0.466 1.041 -1.215 1.561 -1.822 c 0.519 -0.608 0.692 -1.041 1.039 -1.735 c 0.347 -0.694 0.174 -1.302 -0.086 -1.822 C 37.715 34.422 35.693 29.277 34.769 27.22" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(42,181,64); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
										</g>
									</svg>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</body>
</html>`