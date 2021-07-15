<template>
	<div>
		<h1>Example Problem: {{ problemId }}</h1>
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
						{{ mathproblem.lastStep }}
					</mathlive-mathfield>
				</b-col>
				<b-col cols="5"
					><mathlive-mathfield id="mf" ref="mathfield">
						Answer
					</mathlive-mathfield></b-col
				>
			</b-row>

			<div v-if="nextProblemId === 3">
				<b-row style="font-size: 1.2rem" align-h="center">
					<b-col cols="3"
						><b-button
							block
							pill
							v-b-modal.modal-solution
							@click="emitViewSolutionModal(problemId)"
							variant="warning"
							>See Solution!</b-button
						>
					</b-col>
					<b-modal
						size="lg"
						id="modal-solution"
						title="Solution"
						ok-only
						no-close-on-esc
						no-close-on-backdrop
						hide-header-close
						@ok="emitCloseViewSolutionModal(problemId)"
					>
						<p>
							<img
								:src="
									require('@/assets/sample_data_solution_' + problemId + '.png')
								"
								width="100%"
							/>
						</p>
						<div class="alert alert-success" role="alert">
							{{ mathproblem.solutionExplanation }}
						</div>
					</b-modal>
					<b-col cols="5">
						<router-link to="/concepts/1">
							<div>
								<b-button block pill variant="success" @click="emitTaskStarted"
									>Start the Task!</b-button
								>
							</div>
						</router-link>
					</b-col>
				</b-row>
			</div>
			<div v-else>
				<b-row style="font-size: 1.2rem" align-h="center">
					<b-col cols="3"
						><b-button
							block
							pill
							v-b-modal.modal-solution
							variant="warning"
							@click="emitViewSolutionModal(problemId)"
							>See Solution!</b-button
						>
					</b-col>
					<b-modal
						size="lg"
						id="modal-solution"
						title="Solution"
						ok-only
						no-close-on-esc
						no-close-on-backdrop
						hide-header-close
						@ok="emitCloseViewSolutionModal(problemId)"
					>
						<p>
							<img
								:src="
									require('@/assets/sample_data_solution_' + problemId + '.png')
								"
								width="100%"
							/>
						</p>
						<div class="alert alert-success" role="alert">
							{{ mathproblem.solutionExplanation }}
						</div>
					</b-modal>
					<b-col cols="5">
						<router-link :to="'/exampleconcepts/' + nextProblemId">
							<b-button
								block
								pill
								variant="success"
								@click="emitNextProblemButtonClicked(problemId, nextProblemId)"
								>Next Example Problem!</b-button
							>
						</router-link>
					</b-col>
				</b-row>
			</div>
		</b-container>
	</div>
</template>
<script>
	import Multiselect from "vue-multiselect";

	export default {
		name: "ExampleMathProblem",
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
				pageName: "Example Math Problem Page",
			};
		},
		mounted: function() {
			this.emitPageLoaded(this.problemId); //emitEventConceptsPageLoaded will execute at pageload
			//console.log(parseInt(this.problemId) + 1);
			//this.nextProblemId = parseInt(this.problemId) + 1;
		},
		methods: {
			emitPageLoaded: function(problemId) {
				let logData = {
					eventName: "pageLoaded",
					pageName: this.pageName,
					problemId: problemId,
				};
				this.$emit("callEvent", logData);
			},
			emitViewSolutionModal: function(problemId) {
				let logData = {
					eventName: "viewSolutionModal",
					pageName: this.pageName,
					problemId: problemId,
				};
				this.$emit("callEvent", logData);
			},
			emitCloseViewSolutionModal: function(problemId) {
				let logData = {
					eventName: "closeSolutionModal",
					pageName: this.pageName,
					problemId: problemId,
				};
				this.$emit("callEvent", logData);
			},
			emitNextProblemButtonClicked: function(problemId, nextProblemId) {
				// Log Button Click
				let logData = {
					eventName: "nextExampleProblemButtonClicked",
					pageName: this.pageName,
					problemId: problemId,
					nextProblemId: nextProblemId,
				};
				this.$emit("callEvent", logData);

				// Log Answers
				let answerArray = this.mathproblem.steps.map(
					(element) => element.value,
				);
				let answerJson = {};
				answerArray.forEach((element, index) => {
					answerJson[index + 1] = element.map((el) => el.code);
				});

				let answerLogData = {
					eventName: "answerSubmitted",
					pageName: this.pageName,
					answerJson: answerJson,
					problemId: problemId,
					nextProblemId: nextProblemId,
				};
				this.$emit("callEvent", answerLogData);
			},
			emitMultiSelectOpended: function(id) {
				let logData = {
					eventName: "selectOptionsOpened",
					optionId: id,
					pageName: this.pageName,
					problemId: this.problemId,
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
					problemId: this.problemId,
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
					problemId: this.problemId,
				};
				this.$emit("callEvent", logData);
			},
			emitMultiSelectOptionSelected: function(selectedOption, id) {
				let logData = {
					eventName: "selectOptionsSelected",
					optionId: id,
					selectedOption: selectedOption.code,
					pageName: this.pageName,
					problemId: this.problemId,
				};
				this.$emit("callEvent", logData);
			},
			emitMultiSelectOptionRemoved: function(removedOption, id) {
				let logData = {
					eventName: "selectOptionsRemoved",
					optionId: id,
					removedOption: removedOption.code,
					pageName: this.pageName,
					problemId: this.problemId,
				};
				this.$emit("callEvent", logData);
			},
			emitTaskStarted: function() {
				// Event task started
				let logData = {
					eventName: "taskStarted",
				};
				this.$emit("callEvent", logData);

				// submit answers
				let answerArray = this.mathproblem.steps.map(
					(element) => element.value,
				);
				let answerJson = {};
				answerArray.forEach((element, index) => {
					answerJson[index + 1] = element.map((el) => el.code);
				});

				let answerLogData = {
					eventName: "answerSubmitted",
					pageName: this.pageName,
					answerJson: answerJson,
					problemId: this.problemId,
					nextProblemId: this.nextProblemId,
				};
				this.$emit("callEvent", answerLogData);
			},
		},
	};
</script>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
<style src="mathlive/dist/mathlive-fonts.css"></style>
