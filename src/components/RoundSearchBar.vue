<template>
	<div class="round-search-bar">

		<input @focus="isshow = true" class="input-search" v-model="searchText" @keyup.enter="handleClick(doSearch)" @keyup="searchData(searchText)" />

		<button class="btn-search" @click="handleClick(doSearch)">
			<img src="../assets/搜索.svg" class="icon-search" />
		</button>
		<ul class="resultList" v-show='isshow'>
			<li v-for="(item) in options" @click="handleLiClick(item)">{{item.keyword}}</li>

		</ul>


	</div>
</template>

<script>
	import {
		Request
	} from "../network/request.js"
	export default {
		name: "round-search-bar",
		props: ['search'],
		data() {
			return {
				searchText: '',
				options: [],
				isshow: true,
				timer2: null,
				switchFlag: true
			}
		},
		created() {
			this.searchText = this.search ? this.search : this.searchText
			console.log(this.searchText)
		},
		methods: {
			doSearch() {
				//调用父组件的父组件对象
				this.$parent.$parent.showList(this.searchText)
				this.$router.push("/search/" + this.searchText)
				this.isshow = false
			},
			handleClick(doSearch) {
				if (!this.switchFlag) {
					return
				}
				this.switchFlag = false
				this.timer2 = setTimeout(() => {
					doSearch()
					this.switchFlag = true
				}, 1000)
			},
			searchData(searchText) {
				Request({
					url: `sug?keyword=${searchText}&offset=0`,
					methods: 'get',
				}).then(res => {
					console.log(res) // 解析成功处理
					this.searchList = res.data
					this.options = this.searchList
				}).catch(err => {
					// console.log(err) // 错误处理
					this.$message.error('数据获取失败')
				})
			},
			handleLiClick(item) {
				//调用父组件的父组件对象
				this.$parent.$parent.showList(item.keyword)
				this.$router.push("/search/" + item.keyword)
				this.searchText = item.keyword
				this.isshow = false
				// console.log(item)
			}
		}
	}
</script>

<style lang="less" scoped>
	@import "./../themes/base.less";

	.round-search-bar {
		width: 500px;

		position: relative;
		display: inline-block;

	}

	.input-search {

		font-size: 0.8em;
		outline: none;
		width: 100%;
		height: @round-search-bar-height;
		border-radius: @round-search-bar-border-radius;
		border: solid 1px @color-border-gray;
		padding: 20px;
		padding-right: 50px;
		box-sizing: border-box;
		white-space: nowrap;
		text-overflow: ellipsis;
		overflow: hidden;
	}

	.btn-search {
		outline: none;
		height: @round-search-bar-height;
		position: absolute;
		right: 0;
		top: 50%;
		transform: translateY(-50%);
		background: none;
		border: none;
	}

	.icon-search {
		outline: none;
		width: 30px;
		height: 30px;
		margin-right: 15px;
		cursor: pointer;
	}

	.resultList {
		background-color: burlywood;
		position: absolute;
		z-index: 10px;
		list-style: none;
		text-align: left;
		margin-left: 10px;
		margin-top: 2px;
		padding: 0 10px;
		transition: all .3s ease;
		margin-top: -5px;
		width: 90%;
		box-sizing: border-box;
		border-radius: 0 0 @home-search-bar-border-radius @home-search-bar-border-radius;

		li {
			line-height: 50px;
			height: 50px;
			font-size: 18px;
			white-space: nowrap;
			text-overflow: ellipsis;
			overflow: hidden;
		}

		li:hover {
			background: #EEE;
		}
	}
</style>
