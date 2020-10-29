<template>
	<div class="home-search-bar">
		<input class="input-search" v-model="searchText" @keydown.enter="handleClick(doSearch)" @keyup="searchData(searchText)" />
		<button class="btn-search" @click="handleClick(doSearch)">搜索一下6666</button>
		<ul class="resultList">
			<li v-for="(item) in options" @click="handleLiClick(item)">{{item.keyword}}</li>
			<p v-show="searchText && searchList && searchList.length==0">暂无数据...</p>
		</ul>

		<span class="welcome" v-show="searchText == '新兵训练营' && a" v-on:click="a=flase">
			<p>welcome</p>
		</span>
	</div>
</template>

<script>
	import Util from "../common/Util.js"
	import {
		Request
	} from "../network/request.js"
	export default {
		name: "home-search-bar",
		data() {
			return {
				a: true,
				searchText: "",
				msg: '哈哈',
				searchList: [],
				value: [],
				loading: false,
				options: [],
				isFocus: false,
				timer2: null,
				switchFlag: true
			}
		},
		methods: {
			doSearch() {

				if (this.searchText !== "") {
					this.$router.push(`/search/${this.searchText}`)
				}

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
			handleLiClick(item) {
				this.$router.push({
					name: 'search',
					query: {
						item: item.keyword
					}
				})
			}
		}
	}
</script>

<style lang="less" scoped>
	@import "./../themes/base.less";

	.home-search-bar {
		position: relative;
		max-width: 650px;
	}

	.input-search {

		outline: none;
		height: @home-search-bar;
		width: 70%;
		box-sizing: border-box;
		border: solid 1px @color-border-gray;
		vertical-align: bottom;
		font-size: 1.2em;
		padding: 20px;
		border-radius: @home-search-bar-border-radius 0px 0px @home-search-bar-border-radius;
	}


	.btn-search {
		font-family: LiSu, Helvetica, sans-serif;
		cursor: pointer;
		outline: none;
		height: @home-search-bar;
		width: 30%;
		box-sizing: border-box;
		background-color: @color-primary;
		color: white;
		font-size: 1.6em;
		border: none;
		border-radius: 0px @home-search-bar-border-radius @home-search-bar-border-radius 0px;
	}

	.resultList {
		list-style: none;
		text-align: left;
		padding: 0 10px;
		transition: all .3s ease;
		margin-top: -5px;
		border: 1px solid #ccc;
		width: 70%;
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

	.resultList p {
		transition: all 0.5s ease;
		// background-color: red;
	}


	.welcome {
		margin-top: 0px;
		margin-left: 20px;
		position: absolute;
		font-size: 5em;

		background-image: -webkit-linear-gradient(left, blue, #66ffff 10%, #cc00ff 20%, #CC00CC 30%, #CCCCFF 40%, #00FFFF 50%, #CCCCFF 60%, #CC00CC 70%, #CC00FF 80%, #66FFFF 90%, blue 100%);
		-webkit-text-fill-color: transparent;
		/* 将字体设置成透明色 */
		-webkit-background-clip: text;
		/* 裁剪背景图，使文字作为裁剪区域向外裁剪 */

		animation: welcome 10s;
		animation-iteration-count: 3;
		animation-direction: alternate;
		animation-timing-function: linear;
		z-index: -10px;
		opacity: 0.5;


	}

	@keyframes welcome {
		0% {
			left: -450px;
			top: -200px;
		}

		25% {
			left: -200px;
			top: 200px;
		}

		50% {
			left: 100px;
			top: -200px;
		}

		75% {
			left: 300px;
			top: 200px;
		}

		100% {
			left: 500px;
			top: -200px;
		}
	}
</style>
