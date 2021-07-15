<template>
	<div>
		<h1>Problem: {{ problemId }}</h1>
		<h3 v-if="mathproblem.statement">
			{{ mathproblem.statement }}
			<mathlive-mathfield ref="mathfield" :config="{ smartFence: false }">
				{{ mathproblem.firstStep }}
			</mathlive-mathfield>
		</h3>
		<b-container class="bv-example-row">
			<span v-for="step in mathproblem.steps" :key="step.step">
				<b-row style="font-size: 1.2rem" align-h="center">
					<b-col cols="3"
						><mathlive-mathfield
							ref="mathfield"
							:config="{ smartFence: false }"
						>
							{{ step.eqn }}
						</mathlive-mathfield></b-col
					>
					<b-col cols="5"
						><mathlive-mathfield
							ref="mathfield"
							:config="{ smartFence: false }"
						>
							{{ step.num }}
						</mathlive-mathfield></b-col
					>
				</b-row>
				<b-row align-h="center">
					<b-col style="font-size: 1.6rem" cols="3"
						><mathlive-mathfield
							id="mf"
							ref="mathfield"
							:config="{ smartFence: false }"
						>
							\Downarrow
						</mathlive-mathfield></b-col
					>
					<b-col cols="5"
						><multiselect
							v-model="step.value"
							:id="step.id"
							:placeholder="step.placeholder"
							label="code"
							track-by="code"
							:options="step.options"
							:multiple="true"
							:showLabels="true"
							deselectLabel="Remove"
							selectLabel="Select"
						></multiselect>
					</b-col>
				</b-row>
			</span>
			<b-row style="font-size: 1.2rem" align-h="center">
				<b-col cols="3"
					><mathlive-mathfield
						id="mf"
						ref="mathfield"
						:config="{ smartFence: false }"
					>
						{{ mathproblem.lastStep }}
					</mathlive-mathfield>
				</b-col>
				<b-col cols="5"
					><mathlive-mathfield id="mf" ref="mathfield">
						Answer
					</mathlive-mathfield></b-col
				>
			</b-row>
			<div v-if="nextProblemId === 6">
				<router-link to="/thankyou">
					<div>
						<b-button block variant="success"> Next Page!</b-button>
					</div>
				</router-link>
			</div>
			<div v-else>
				<router-link :to="'/concepts/' + nextProblemId">
					<div>
						<b-button
							block
							variant="success"
							@click="emitNextProblemButtonClicked(nextProblemId)"
						>
							Next Problem!</b-button
						>
					</div>
				</router-link>
			</div>
		</b-container>
	</div>
</template>
<script>
	import Multiselect from "vue-multiselect";
	import axios from "axios";

	export default {
		name: "MathProblem",
		props: {
			heading: String,
			formula: String,
			mathproblem: Object,
			problemId: String,
		},
		components: {
			Multiselect,
		},
		data() {
			return {
				value: null,
				nextProblemId: parseInt(this.problemId) + 1,
			};
		},
		created() {
			this.fetchData();
		},
		// watch hook for the $route object. VueRouter components are only rendered once for speed.
		// If you need to rerender, you need to do that manually so in this case we want to rerender
		// when the :id parameter in $route changes and then fetch new data.
		watch: {
			$route: "fetchData",
		},
		methods: {
			fetchData() {
				axios
					.get("data/SampleMathProblem.json")
					.then((resp) => {
						this.mathproblem = resp.data;
					})
					.catch((err) => {
						console.log(err);
					});
			},
		},
	};
</script>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
<style src="mathlive/dist/mathlive-fonts.css"></style>
<!--style>
@import "../../node_modules/mathlive/dist/mathlive-fonts.css";
</style-->
