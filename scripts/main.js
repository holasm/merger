var data = {
	names: [
		'I am the poor guy.',
		'subhasis',
		'maity',
		'debasis',
		'mnana',
		'amar'
	],
	fil: ''
}

Vue.component('input-box', {
	template: '<input type="text" @keyup="update" v-model="filter">',
	methods: {
		update: function (e) {
			data.fil = this.filter
		}
	}
})

new Vue({
	el: '#app',
	data: data
})

