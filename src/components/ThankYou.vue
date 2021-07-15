<template>
	<div>
		<h1>Thank You</h1>
		<h4>Please submit the following code on MTurk.</h4>
		<b-table striped hover :items="items"></b-table>
	</div>
</template>

<script>
	export default {
		name: "ThankYou",
		data() {
			return {
				sessionId: null,
				confirmationCode: null,
				items: [],
				pageName: "Thank You Page",
			};
		},
		mounted: function() {
			let sessionData = this.$session.getAll();
			this.sessionId = sessionData["session-id"];
			this.confirmationCode = sessionData["user_id"];
			this.items = [
				{
					confirmation_code: sessionData["user_id"],
				},
			];
			this.emitPageLoaded();
		},
		methods: {
			emitPageLoaded: function() {
				let logData = {
					eventName: "pageLoaded",
					pageName: this.pageName,
				};
				this.$emit("callEvent", logData);
			},
		},
	};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	h3 {
		margin: 40px 0 0;
	}
	ul {
		list-style-type: none;
		padding: 0;
	}
	li {
		display: inline-block;
		margin: 0 10px;
	}
	a {
		color: #42b983;
	}
</style>
