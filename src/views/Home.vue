<template>
  <div class="home">
		<div class="home-search-panel">
			<MySearchLogo class='my-search-logo'/>
			<HomeSearchBar class='home-search-bar'></HomeSearchBar>
		</div>


  </div>
</template>

<script>
// @ is an alias to /src

import HomeSearchBar from '@/components/HomeSearchBar.vue'
import MySearchLogo from '@/components/MySearchLogo.vue'


export default {
  name: 'Home',
  components: {
		MySearchLogo,
		HomeSearchBar
  }
}
</script>

<style lang="less" scoped>
	.my-search-logo{
		margin-top: 90px;
		margin-bottom: 30px;
	}
	.home-search-panel{

	}
	.home-search-bar{
		margin: auto;
	}
	</style>
