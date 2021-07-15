<template>
	<div>
		<b-container class="bv-example-row" style="text-align:justify;">
			<b-row align-h="center">
				<h1>{{ msg }}</h1>
			</b-row>
			<b-row align-h="center">
				<h3>Task Instructions:</h3>
			</b-row>
			<b-row align-h="center">
				<p>
					Amy knows how to solve linear equations, but she is inflexible in her
					approach. Your goal is to help her identify different approaches and
					potential mistakes that were possible on her solution paths.
				</p>
				<p>
					In this unique task, you will
					<strong style="text-decoration: underline;">NOT</strong> be asked to
					solve linear equations. Amy has solved them correctly for you. She
					wants your help in something else. You will go through a series of
					problems, 5 in total. Each problem consists of 2 consecutive screens:
				</p>
			</b-row>
			<b-row align-h="center">
				<b-list-group>
					<b-list-group-item
						class="flex-column align-items-start border border-dark"
					>
						<div class="d-flex w-100 justify-content-between">
							<h5 class="mb-1">
								<strong style="text-decoration: underline;"
									>First Screen</strong
								>
							</h5>
						</div>

						<p class="mb-1">
							You will see
							<strong style="text-decoration: underline;">"N"</strong> number of
							cards and a green button which will take you to the Second Screen.
							Here is an example of the first screen with 2 cards,
						</p>
						<div class="border border-info" style="padding: 20px">
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
										@click="emitViewConceptModal(concept.id)"
										>View Examples</b-button
									>

									<b-modal
										:id="'modal-' + concept.id"
										:title="concept.title"
										ok-only
										no-close-on-esc
										no-close-on-backdrop
										hide-header-close
										class="text-center"
										@ok="emitCloseViewConceptModal(concept.id)"
									>
										<div
											class="text-center"
											v-for="example in concept.examples"
											:key="example.id"
										>
											<h4>Example {{ example.id }}</h4>
											<span
												v-for="eqn in example.eqns"
												:key="eqn.id"
												class="my-0"
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
							<div>
								<b-button block variant="success" class="my-2">
									See Problem {{ problemId }}!</b-button
								>
							</div>
						</div>
						<p class="mb-1 my-1">There are two types of cards:</p>
						<ol>
							<li>
								Math concepts used by students to solve a step in linear
								equation problem and move towards the final answer.
							</li>
							<li>
								Misconceptions/mistakes that students like Amy usually make
								while solving linear equations
							</li>
						</ol>
						Feel free to click on “View Examples” to see specific mathematical
						examples. Make sure you understand the cards, as you
						<strong style="text-decoration: underline;">
							will not be able to return to these descriptions later </strong
						>.
					</b-list-group-item>

					<b-list-group-item
						class="flex-column align-items-start my-3 border border-dark"
					>
						<div class="d-flex w-100 justify-content-between">
							<h5 class="mb-1">
								<strong style="text-decoration: underline;"
									>Second Screen</strong
								>
							</h5>
						</div>

						<p class="mb-1">
							This screen will contain a linear equation problem and its
							step-by-step solution. In between the steps will be a selection
							list with the options from the previous screen, such as
							<strong style="text-decoration: underline;">BadArithmetic</strong>
							and
							<strong style="text-decoration: underline;"
								>AddTermsWhenAnotherOperationHasPrecedent</strong
							>. Second Screen will look something like this,
						</p>
						<div class="border border-info" style="padding: 20px">
							<div class="text-center">
								<h1>Problem: {{ problemId }}</h1>
								<h3 v-if="mathproblem.statement">
									{{ mathproblem.statement }}
									<mathlive-mathfield
										ref="mathfield"
										:config="{ smartFence: false }"
									>
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
													@open="emitMultiSelectOpended"
													@input="emitMultiSelectInputChanged"
													@close="emitMultiSelectClosed"
													@select="emitMultiSelectOptionSelected"
													@remove="emitMultiSelectOptionRemoved"
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
												x = 1
											</mathlive-mathfield>
										</b-col>
										<b-col cols="5"
											><mathlive-mathfield id="mf" ref="mathfield">
												Answer
											</mathlive-mathfield></b-col
										>
									</b-row>
								</b-container>
							</div>
						</div>
						<p class="mb-1 my-1">
							Your task is to select
							<strong style="text-decoration: underline;"> ALL </strong> the
							card operations that could have occurred or did occur between the
							steps. For example, could Amy have made the
							<span style="text-decoration: underline;">BadArithmetic</span>
							mistake between Steps #1 and #2?
						</p>
						<p class="mb-1 my-1">
							<strong style="text-decoration: underline;">
								Note there may be multiple or no options as answers. If you
								think no answer matches, leave the dropdown blank.</strong
							>
						</p>
					</b-list-group-item>
				</b-list-group>
			</b-row>
			<b-row class="my-2">
				<p>
					Don’t worry if you are not super clear with the instructions. We will
					walk you through 2 sample problems with solutions to make sure you
					understand everything.
				</p>
				<h3>Important things to keep in mind:</h3>
				<ol>
					<li>
						For each problem, you won’t be able to access the
						<u>First screen</u> once you move to the <u>Second screen</u>.
					</li>
					<li>
						There may be multiple or no options as answers on the Second screen.
					</li>
					<li>
						Please don’t use paper/pencil while going through the task.
					</li>
					<li>
						Please don't change the URL or hit the back/forward/refresh browser
						buttons.
					</li>
				</ol>
			</b-row>
			<b-row align-h="center">
				<router-link to="/exampleconcepts/1">
					<div class="my-2">
						<b-button block variant="info" @click="emitSeeExampleButtonClicked"
							>See Example Problems with Solutions!</b-button
						>
					</div>
				</router-link>
			</b-row>
		</b-container>
	</div>
</template>

<script>
	import axios from "axios";
	import Multiselect from "vue-multiselect";
	export default {
		name: "Instructions",
		props: {
			msg: String,
		},
		data() {
			return {
				concepts: [],
				mathproblem: {},
				problemId: null,
				pageName: "Instructions Page",
			};
		},
		components: {
			Multiselect,
		},
		mounted: function() {
			this.emitPageLoaded();
		},
		created() {
			this.fetchData();
		},
		watch: {
			$route: "fetchData",
		},
		methods: {
			fetchData() {
				axios
					.get("data/InstructionsPageConcept.json")
					.then((resp) => {
						this.concepts = resp.data;
					})
					.catch((err) => {
						console.log(err);
					});

				axios
					.get("data/InstructionsPageMathProblem.json")
					.then((resp) => {
						this.mathproblem = resp.data;
					})
					.catch((err) => {
						console.log(err);
					});
			},
			emitPageLoaded: function() {
				let logData = {
					eventName: "pageLoaded",
					pageName: this.pageName,
				};
				this.$emit("callEvent", logData);
			},
			emitViewConceptModal: function(conceptId) {
				let logData = {
					eventName: "conceptModalViewed",
					pageName: this.pageName,
					conceptId: conceptId,
				};
				this.$emit("callEvent", logData);
			},
			emitCloseViewConceptModal: function(conceptId) {
				let logData = {
					eventName: "conceptModalClosed",
					pageName: this.pageName,
					conceptId: conceptId,
				};
				this.$emit("callEvent", logData);
			},
			emitMultiSelectOpended: function(id) {
				let logData = {
					eventName: "selectOptionsOpened",
					optionId: id,
					pageName: this.pageName,
				};
				this.$emit("callEvent", logData);
			},
			emitMultiSelectInputChanged: function(value, id) {
				let selectedValues = value.map((element) => element.code);

				let logData = {
					eventName: "selectInputChanged",
					optionId: id,
					selectedValues: selectedValues,
					pageName: this.pageName,
				};
				this.$emit("callEvent", logData);
			},
			emitMultiSelectClosed: function(value, id) {
				let previousValues = value.map((element) => element.code);

				let logData = {
					eventName: "selectOptionsClosed",
					optionId: id,
					previousValues: previousValues,
					pageName: this.pageName,
				};
				this.$emit("callEvent", logData);
			},
			emitMultiSelectOptionSelected: function(selectedOption, id) {
				let logData = {
					eventName: "selectOptionsSelected",
					optionId: id,
					selectedOption: selectedOption.code,
					pageName: this.pageName,
				};
				this.$emit("callEvent", logData);
			},
			emitMultiSelectOptionRemoved: function(removedOption, id) {
				let logData = {
					eventName: "selectOptionsRemoved",
					optionId: id,
					removedOption: removedOption.code,
					pageName: this.pageName,
				};
				this.$emit("callEvent", logData);
			},
			emitSeeExampleButtonClicked: function() {
				let logData = {
					eventName: "seeExampleButtonClicked",
					pageName: this.pageName,
				};
				this.$emit("callEvent", logData);
			},
		},
	};
</script>
