<template>
	<view class="">
			<uni-search-bar placeholder="自定placeholder" @confirm="search" />
	</view>
</template>

<script>
import uniCalendar from "@/components/uni-calendar/uni-calendar.vue";
import uniSearchBar from '@/components/uni-search-bar/uni-search-bar.vue'
	export default {
		components: {
			uniCalendar,
			uniSearchBar
		},
		data() {
			return {
				title: "Hello"
			};
		},
		onLoad() {
			// 获取用户权限信息
		},
		methods: {
			change(e) {
				console.log(e);
			},
			search(e) {
				console.log(e)
			}
		}
	};
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
