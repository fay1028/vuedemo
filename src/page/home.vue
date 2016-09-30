<style scoped>
</style>
<template>
<div class='home-container'>
	<div>我是home页面</div>
</div>
</template>

<script>
export default {
	props: {
    	projectid:{
    		required:true,
    		twoWay:true
    	},	    	
    	projectdata:{
    		required:true,
    		twoWay:true
    	}	
	},
	components: {
	},
	ready: function() {
	},
	methods: {
	},
	data() {
		return {
		}
	}
}
</script>

