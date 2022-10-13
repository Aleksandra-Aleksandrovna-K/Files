

const DataFromJSON = {
  data() {
	return {
		dataJSON: [],
		showInfo: false,
		info: []
	}
  },
  created() {
	fetch("https://raw.githubusercontent.com/Aleksandra-Aleksandrovna-K/Files/main/ProjectVUE/data.json")
		.then(response => response.json())
		.then(result => this.dataJSON=result)

  },
   methods: {
		getInfo(n) {
			this.showInfo = true;
			this.info = n.info
		},
		closeInfo() {
			this.showInfo = false
		}	
   }



// выделение строк через VUE  
//	methods:{
//		onHover: event => event.target.style.backgroundColor = 'gray',
//		outHover: event => event.target.style.backgroundColor = 'white'
//	}
		
		
  
}

Vue.createApp(DataFromJSON).mount('#container')
