<template>
	<view class="">
		<uni-calendar
		  :insert="true"
		  :lunar="true"
		  :start-date="'2019-3-2'"
		  :end-date="'2019-5-20'"
		  @change="change"
		></uni-calendar>
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
			uni.getSetting({
				success: res => {
					// console.log(res.authSetting['scope.userInfo'])
					if (!res.authSetting['scope.camera']) {
						console.log('[]')
						uni.authorize({
							scope: 'scope.camera',
							success: (res) => {
								console.log(res)
							}
						})
					}
				}
			})
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
