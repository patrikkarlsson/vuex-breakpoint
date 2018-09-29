const state = {
	currentBreakpoint: '',
};

const getters = {
	currentBreakpoint: state => state.currentBreakpoint,
};

const actions = {
	mediaQuery: ( { state, commit }, mediaQueryName ) => {
		if(state.currentBreakpoint != mediaQueryName) {
			commit('mediaQuery', mediaQueryName);			
		}
	},
};

const mutations = {
	mediaQuery: ( state, mediaQueryName ) => {
		state.currentBreakpoint = mediaQueryName;
	},
};

const BreakpointStore = {
	namespaced: true,
	state,
	getters,
	actions,
	mutations,
};

export default BreakpointStore;
