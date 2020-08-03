<template>

	<div>

		<span class="logo logo-blue">字</span>
		<span class="logo logo-red">节</span>
		<span class="logo logo-yellow">跳</span>
		<span class="logo logo-blue">动</span>


	</div>
</template>


<style lang="less" scoped>
	.logo {
		display: inline-block;
		position: relative;
		font-size: 3em;
		font-weight: bold;
		font-family: FZYaoti, Helvetica, sans-serif;
		-webkit-transition: width 2s, height 2s, -webkit-transform 2s;
		/* For Safari 3.1 to 6.0 */
		transition: width 2s, height 2s, transform 3s;

	}

	.logo-blue {
		color: #4285F4;

	}

	.logo:hover {
		color: powderblue;
		-webkit-transform: rotate(360deg);
		/* Chrome, Safari, Opera */
		transform: rotate(360deg);

	}

	.logo-red {
		color: #E84235;

	}

	.logo-red:hover {
		-webkit-transform: rotate(-360deg);
		/* Chrome, Safari, Opera */
	}

	.logo-yellow {
		color: #FABB06;
		transform: rotate(18deg);
		font-size: 3.5em;
	}

	.logo-green {
		color: #34A853;
	}
</style>
