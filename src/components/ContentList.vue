<template>
	<div>
		<ul class="resultList">
			<li v-for="item in datas" @click="toDetail(item)">
				<span class="title">{{item.title}}</span><br />
				<span class="details">{{item.description}}</span>
				<span class='tages'>
					<img src="../images/tag.svg" style="width: 15px; height: 15px;" />
					{{item.tags[0]}}</span>
				<span class='user_name'>
					<img src="../images/author.svg" style="width: 20px; height: 20px;" />
					{{item.user_name}}
				</span>
				<span style="clear: both;display: block;"></span>
			</li>
		</ul>
		<ul class="pagination">
			<li><button @click="pre" :disabled="preDis">«</button></li>
			<li><span class="active">{{page}}</span></li>
			<li><button @click="next" :disabled="nextDis">»</button></li>
		</ul>
	</div>
</template>

<script>
	export default {
		name: 'ContentList',
		data() {
			return {
				page: 0,
				targetUrl: ""
			}
		},
		props: ['datas', 'current', 'count'],
		created() {
			this.page = this.current
		},
		computed: {
			preDis() {
				return this.page === 0
			},
			nextDis() {
				return this.page === Math.ceil(this.count / 10)
			}
		},
		methods: {
			pre() {
				this.page--
				this.$parent.pre(this.page)
			},
			next() {
				this.page++
				this.$parent.next(this.page)
			},
			toDetail(item) {
				console.log(item.link_url),
					location.href = item.link_url

			}
			// toDetail(item, datas) {

			// 	this.$router.push({

			// 		name: 'searchDetail',
			// 		query: {
			// 			title: item.title,
			// 			detail: item.description,
			// 			datas: datas
			// 		}

			// 	})
			// }
		}
	}
</script>

<style lang="less" scoped>
	@import "./../themes/base.less";

	.resultList {

		list-style: none;
		text-align: left;
		padding: 0 0px;
		transition: all .3s ease;
		margin-top: 0px;

		width: 100%;
		border-radius: 0 0 @home-search-bar-border-radius @home-search-bar-border-radius;

	}

	.resultList li {
		line-height: 50px;
		height: auto;
		// line-height: 100px;
		font-size: 25px;
		padding: 10px;
		border: 1px solid @color-border-gray;
		border-radius: 30px;
		// white-space: nowrap;
		// text-overflow: ellipsis;
		// overflow: hidden;
	}

	.resultList li:hover {
		background: @color-primary;
	}

	.title {
		color: paleturquoise;
	}

	.details {
		font-size: 18px;
		display: block;
	}


	.pagination {
		display: inline-block;
		padding: 0;
		margin: 0;
	}

	.pagination li {
		display: inline;
	}

	.pagination li button,
	.pagination li span {
		color: black;
		float: left;
		padding: 8px 16px;
		text-decoration: none;
		border-radius: 5px;
	}

	.pagination li span.active {

		border-radius: 5px;
		height: 10px;
		line-height: 15px;
	}

	.pagination li button:hover:not(.active) {
		background-color: #ddd;
	}

	.tages {
		display: block;
		float: left;
		font-size: 0.5em;
		color: red;
	}

	.user_name {
		display: block;
		font-size: 0.5em;
		float: right;
		color: skyblue;

	}

	button {
		border: none;
		cursor: pointer;
	}

	button:disabled {
		background-color: #ddd;
		cursor: not-allowed;
	}
</style>
