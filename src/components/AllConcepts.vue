<template>
	<div>
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
					@ok="emitCloseViewConceptModal(concept.id)"
					class="text-center"
				>
					<div
						class="text-center"
						v-for="example in concept.examples"
						:key="example.id"
					>
						<h4>Example: {{ example.id }}</h4>
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
	</div>
</template>

<script>
	import axios from "axios";

	export default {
		name: "AllConcepts",
		props: {
			msg: String,
		},
		data() {
			return {
				concepts: [],
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
					.get("data/AllConcepts.json")
					.then((resp) => {
						this.concepts = resp.data;
						this.problemId = this.$route.params.id;
					})
					.catch((err) => {
						console.log(err);
					});
			},
		},
	};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
