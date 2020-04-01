<template>
	<view>
		<view class="center">
			{{userInfo.nickName}}
		</view>
	</view>
</template>

<script>
	export default {
		data(){
			return {
				userInfo:{}
			}
		},
		onLoad() {
			this.userInfo = uni.getStorageSync('userInfo');
			console.log(this.userInfo);
		}
	}
</script>

<style>
	
</style>
