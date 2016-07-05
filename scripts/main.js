var data = {
	names: [
		'I am the poor guy.',
		'subhasis',
		'maity',
		'debasis',
		'mnana',
		'amar'
	],
	fil: '',
	radioData: 'aaa'
}

Vue.component('input-box', {
	template: '<input type="text" @keyup="update" v-model="filter">',
	methods: {
		update: function (e) {
			data.fil = this.filter
		}
	}
})
Vue.component('input-radio', {
	template: '<input type="radio" @click="toggle" v-model="radio" :checked="radio">',
	data: {
		radio: true
	},
	 ready: function () {
		data.radioData = this.radio
	},
	methods: {
		toggle: function (e) {
			this.radio = !this.radio
			data.radioData = this.radio
		}
	}
})

new Vue({
	el: '#app',
	data: data
})

