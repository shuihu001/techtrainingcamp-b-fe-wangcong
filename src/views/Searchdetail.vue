<template>
	
	<div class="search-detail-page">
		<div class="context">
		<h1>{{title}}</h1>
		<p>{{detail}}</p>
		</div>
		
		
		<div class="sublist">
			<ul class="resultList">
				<li v-for="item in datas" @click="toDetail(item,datas)">
					<span class="title">{{item.title}}</span><br/>
					<span class="details">{{item.description}}</span>
				</li>
			</ul>
		</div>
	</div>
	

</template>

<script>

	export default {
		name: 'search-detail-page',
		data() {
			return {
				title: '',
				detail: '',
				datas:''
			}
		},
		created() {
			this.title = this.$route.query.title,
			this.detail = this.$route.query.detail,
			this.datas = this.$route.query.datas


		},
		methods:{
			toDetail(item,datas){
				this.title=item.title
				this.detail = item.description
				
				
				

			}
		}
	}
</script>

<style lang="less" scoped>
	@import "./../themes/base.less";

	
	.context{
		position:absolute;
		left:0;
		bottom: 0;

		width: 75%;
		height: 100%;
		float: left;
		background-color: #F6F4F2;
	}
	.sublist{
		position:absolute;
		right: 0;
		top: 0;
		padding: 0 0px;
		float: right;
		width: 25%;
		height: 100%;
		overflow: auto;
	}
	
	p{
	text-indent: 2em;
	text-align: left;
	}

	.resultList {
		list-style: none;
		text-align: left;
		padding: 0 0px;
		transition: all .3s ease;
		margin-top: 0px;
		
		width: 100%;
		border-radius: 0 0  @home-search-bar-border-radius @home-search-bar-border-radius;

	}
	.resultList li {
		line-height: 50px;
		height: auto;
		font-size: 18px;
		padding: 10px;
		border: 1px solid @color-border-gray;
		white-space: nowrap;
		text-overflow: ellipsis;
		overflow: hidden;
	}

	.resultList li:hover {
		background: @color-primary;
	}
	.title{
		color: paleturquoise;
	}
	.details{
		font-size: 15px;
	}

</style>
