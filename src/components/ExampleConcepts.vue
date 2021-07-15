<template>
	<div>
		<h1>Example {{ problemId }}</h1>
		<b-card-group deck>
			<b-card
				v-for="concept in concepts"
				:key="concept.id"
				:title="concept.title"
				header-tag="header"
				footer-tag="footer"
				align="center"
			>
				<template v-slot:header>
					<h6 class="mb-0">{{ concept.header }}</h6>
				</template>
				<b-card-text>{{ concept.description }}</b-card-text>
				<b-button
					v-b-modal="'modal-' + concept.id"
					@click="emitViewConceptModal(problemId, concept.id)"
					>View Examples</b-button
				>

				<b-modal
					:id="'modal-' + concept.id"
					:title="concept.title"
					ok-only
					no-close-on-esc
					no-close-on-backdrop
					hide-header-close
					@ok="emitCloseViewConceptModal(problemId, concept.id)"
					class="text-center"
				>
					<div
						class="text-center"
						v-for="example in concept.examples"
						:key="example.id"
					>
						<h4>Example {{ example.id }}</h4>
						<span v-for="eqn in example.eqns" :key="eqn.id" class="my-0"
							><mathlive-mathfield
								ref="mathfield"
								:config="{ smartFence: false }"
							>
								{{ eqn.eqn }}
							</mathlive-mathfield>
						</span>
					</div>
				</b-modal>
			</b-card>
		</b-card-group>
		<router-link
			:to="{
				name: 'ExampleMathProblem',
				params: { mathproblem, problemId },
			}"
		>
			<div>
				<b-button
					block
					variant="success"
					class="my-5"
					@click="emitProblemButtonClicked(problemId)"
				>
					See Second Screen - Example {{ problemId }}!</b-button
				>
			</div>
		</router-link>
	</div>
</template>

<script>
	import axios from "axios";

	export default {
		name: "ExampleConcepts",
		props: {
			msg: String,
		},
		data() {
			return {
				concepts: [],
				mathproblem: {},
				problemId: null,
				pageName: "Example Concepts Page",
			};
		},
		created() {
			this.fetchData();
		},
		watch: {
			$route: "fetchData",
		},
		mounted: function() {
			this.emitPageLoaded(this.$route.params.id); //emitEventConceptsPageLoaded will execute at pageload
		},
		methods: {
			fetchData() {
				axios
					.get("sample_data/" + this.$route.params.id + "/Concepts.json")
					.then((resp) => {
						this.concepts = resp.data;
						this.problemId = this.$route.params.id;
					})
					.catch((err) => {
						console.log(err);
					});

				axios
					.get("sample_data/" + this.$route.params.id + "/MathProblem.json")
					.then((resp) => {
						this.mathproblem = resp.data;
					})
					.catch((err) => {
						console.log(err);
					});
			},
			emitPageLoaded: function(problemId) {
				let logData = {
					eventName: "pageLoaded",
					pageName: this.pageName,
					problemId: problemId,
				};
				this.$emit("callEvent", logData);
			},
			emitViewConceptModal: function(problemId, conceptId) {
				let logData = {
					eventName: "conceptModalViewed",
					pageName: this.pageName,
					problemId: problemId,
					conceptId: conceptId,
				};
				this.$emit("callEvent", logData);
			},
			emitCloseViewConceptModal: function(problemId, conceptId) {
				let logData = {
					eventName: "conceptModalClosed",
					pageName: this.pageName,
					problemId: problemId,
					conceptId: conceptId,
				};
				this.$emit("callEvent", logData);
			},
			emitProblemButtonClicked: function(problemId) {
				let logData = {
					eventName: "seePoblemButtonClicked",
					pageName: this.pageName,
					problemId: problemId,
				};
				this.$emit("callEvent", logData);
			},
		},
	};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
