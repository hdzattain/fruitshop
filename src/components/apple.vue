<template>

	<div class="page">


	<h2>会员结算<br /></h2>

		<h4>尊敬的会员，您需要支付:</h4>

		{{this.$route.query.total*8/10}}元	

		<h4>支付成功！</h4>

		<button @click="$router.push('/')">返回</button>

		</div>
   


		

</template>



<script>
export default {
  name: 'apple'

}
</script>



<style>
#apple {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>