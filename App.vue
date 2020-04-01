<script>
	export default {
		data: {
			return: {
				auth: true
			}
		},
		onLaunch: function() {
			// 获取用户信息
			uni.getUserInfo({
				success:(res)=>{
					uni.setStorageSync('userInfo', res.userInfo)
				}
				
			})
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
</style>
