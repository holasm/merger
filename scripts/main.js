var data = {
	text: {
		head: 'I am the poor guy.'
	}
}

Vue.component('input-box', {
	template: '<input type="text" @keyup="update">',
	methods: {
		update: function (e) {
			data.text.head = e.target.value
		}
	}
})

new Vue({
	el: '#app',
	data: data
})

