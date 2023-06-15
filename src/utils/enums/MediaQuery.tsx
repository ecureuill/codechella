enum MediaQuery {
	smallMobileMediaQuery = '(max-device-height: 794px)',
	mobileMediaQuery = '(max-device-width: 480px)',
	tabletMediaQuery = '(min-device-width: 481px) and (max-device-width: 768px)',
	laptopMediaQuery = '(min-device-width: 769px) and (max-device-width: 1024px)',
	desktoMediaQuery = '(min-device-width: 1025px) and (max-device-width: 1224px)',
	bigScreenMediaQuery = '(min-device-width: 1225px)',
	

	aboveTabletMediaQuery = '(min-device-width: 769px)',
	mobileOrTabletMediaQuery = '(max-device-width: 768px)',
	
	orientationPortrait = 'orientation: portrait',
	orientationLandscape = 'orientation: lanscape'
}

export default MediaQuery;