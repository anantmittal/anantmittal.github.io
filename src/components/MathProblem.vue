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
					<b-col cols="4"
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
					<b-col cols="4"
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
				<b-col cols="4"
					><mathlive-mathfield id="mf" ref="mathfield">
						Answer
					</mathlive-mathfield></b-col
				>
			</b-row>
			<div v-if="nextProblemId === 6">
				<router-link to="/thankyou">
					<div>
						<b-button block variant="success" @click="emitNextPageClicked()">
							Next Page!</b-button
						>
					</div>
				</router-link>
			</div>
			<div v-else>
				<router-link :to="'/concepts/' + nextProblemId">
					<div>
						<b-button
							block
							variant="success"
							@click="emitNextProblemButtonClicked()"
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
				pageName: "Math Problem Page",
			};
		},
		mounted: function() {
			this.emitPageLoaded(this.problemId);
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
			emitNextProblemButtonClicked: function() {
				// Log Button Click
				let logData = {
					eventName: "nextProblemButtonClicked",
					pageName: this.pageName,
					problemId: this.problemId,
					nextProblemId: this.nextProblemId,
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
					problemId: this.problemId,
					nextProblemId: this.nextProblemId,
				};
				this.$emit("callEvent", answerLogData);
			},
			emitNextPageClicked: function() {
				let logData = {
					eventName: "nextPageClicked",
					problemId: this.problemId,
					nextProblemId: this.nextProblemId,
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
<!--style>
@import "../../node_modules/mathlive/dist/mathlive-fonts.css";
</style-->
