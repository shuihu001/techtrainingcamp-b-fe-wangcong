<template>
  <div class="search-page">
		<SearchResultTooBar :search="keyword"></SearchResultTooBar>
		<ContentList :datas="dataList" :current="current" :count="count" ref="contentList"></ContentList>
  </div>
</template>

<script>
	import SearchResultTooBar from '@/components/SearchResultTooBar.vue'
	import ContentList from '@/components/ContentList.vue'
	import {Request} from "../network/request.js"
	export default {
		data() {
			return {
				keyword: '',
				dataList: [],
				current: 0,
				count: 0
			}
		},
	  components: {
			SearchResultTooBar,
			ContentList
	  },
		computed:{
			search(){
			  return this.$route.params.searchText
			}
		},
		created() {
			this.keyword = this.$route.params.searchText? this.$route.params.searchText: this.$route.query.item
      // console.log(this.$route.params);
      this.showSearchDetail(this.current)
		},
		methods:{
			showSearchDetail(page=0) {
				Request({
					url: `study?keyword=${this.keyword}&offset=`+page,
					method: 'GET'
				}).then(res => {
					this.dataList = res.data
					this.count = res.total
					console.log(this.dataList)
				}).catch(err => {
					console.log(err)
				})
			},
      // 子组件会调用，进行搜索
      showList(val) {
        this.keyword = val
        this.showSearchDetail(0)
				this.$refs.contentList.page = 0
				
      },
			pre(page) {
				this.showSearchDetail(page)
			},
			next(page) {
				this.showSearchDetail(page)
			}
		}
	}
</script>