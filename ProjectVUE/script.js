

const DataFromJSON = {
  data() {
	return {
		dataJSON1: {},
		dataJSON2: {}
	}
  },
  created() {
	fetch('https://raw.githubusercontent.com/sopent/test/main/data.json')
		.then(response => response.json())
		.then(result => this.dataJSON1=result)
	fetch('https://raw.githubusercontent.com/sopent/test/main/data2.json')
		.then(response => response.json())
		.then(result => this.dataJSON2=result)
  },
	methods:{
		onHover: event => event.target.style.backgroundColor = 'gray',
		outHover: event => event.target.style.backgroundColor = 'white'
	}
		
		
  
}

Vue.createApp(DataFromJSON).mount('#data1')
