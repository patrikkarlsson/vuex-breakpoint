
# vuex-breakpoint

> vuex-breakpoint is a Vue.js plugin to get the media query changes in a vue application.

### Installation

```js
yarn add vuex-breakpoint --dev
```

### Usage
Import and add breakpointStore to vuex store.
```js
import Vue from 'vue';
import Vuex from 'vuex';
import { breakpointStore } from 'vuex-breakpoint';

Vue.use(Vuex);

export default new Vuex.Store({
 modules: {
	 breakpointStore,
 },
});
```
Import and add breakpoint as a mixin in App component.
```js
import { breakpoint } from 'vuex-breakpoint';
export default {
	name: 'App',
	mixins: [
		breakpoint,
	],
}
```
Import breakpoint.scss and add different media queries and then pass them to breakpoints mixin.
```scss
@import "~vuex-breakpoint/src/scss/breakpoints";

$breakpoints: (
  ("thumb", 0px, 576px),
  ("handheld", 577px, 768px),
  ("lap", 769px, 992px),
  ("desktop", 993px, null)
);

@include breakpoints($breakpoints);
```
To get updates when media queries changes use the computed property.
```html
<template>
  <h1>{{ currentBreakpoint }}</h1>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'YourComponent',
  computed: {
	  ...mapGetters( {
	    currentBreakpoint: 'breakpointStore/currentBreakpoint',
	} ),
  },
}
</script>
```

### API
#### Computed properties
`breakpointStore/currentBreakpoint` a string which tells you which media query being used.
