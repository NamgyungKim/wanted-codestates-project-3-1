import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle`
	//style reset
	${reset}

	@import url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/variable/pretendardvariable.css');
	body {
    letter-spacing: -0.02em;
		color: #333;
		font-family: 'Pretendard Variable';
  }

	a {
		text-decoration: none;
		color: #333;
	}

	:root {
		--main-blue: #3D57C2;
		--sub-blue: #7281D6;
		--light-blue: #E2E5FF;
		--dark-gray: #8B8C93;
		--gray: #D4D5DD;
		--light-gray: #F6F4FC;
	}
`;

export default GlobalStyles;
