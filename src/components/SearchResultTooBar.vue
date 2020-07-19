<template>
  <div class="search-result-toobar">
		<img class="logo" src="../assets/字节跳动.png" @click="goHome"/>

		<RoundSearchBar :search="search"></RoundSearchBar>
  </div>
</template>

<script>
	import RoundSearchBar from '@/components/RoundSearchBar.vue'
	export default {
		name:"search-result-toobar",
		props:['search'], //传入参数
	  components: {
			RoundSearchBar
	  },
		methods:{
			goHome(){
				this.$router.push("/")
			}
		}
	}
</script>

<style lang="less" scoped>
	@import "./../themes/base.less";
	.search-result-toobar{
		text-align: left;
		padding: @space-large;
		border-bottom: solid 1px @color-border-gray;
	}
	.logo{
		height: @round-search-bar-height+10;
		vertical-align: middle;
		margin: @space-normal;
		cursor: pointer;
	}
</style>