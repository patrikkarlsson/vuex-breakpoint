import debounce from 'lodash/debounce';

const breakpoint = {
	mounted(){
		const getCurrentMediaQueryName = () => {
			let mediaQueryName = window.getComputedStyle(
				document.querySelector( 'body' ), ':before'
			).getPropertyValue( 'content' ).replace( /\"/g, '' );
			this.$store.dispatch( 'breakpointStore/mediaQuery', mediaQueryName );
		};
		window.addEventListener( 'resize', debounce(getCurrentMediaQueryName, 200) );
		getCurrentMediaQueryName();
	},
};

export default breakpoint;
