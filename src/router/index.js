import Vue from "vue";
import Router from "vue-router";

import Landing from "@/components/Landing";
import Reading from "@/components/Reading";

import Concepts from "@/components/Concepts";
import ExampleConcepts from "@/components/ExampleConcepts";
import MathProblem from "@/components/MathProblem";
import ExampleMathProblem from "@/components/ExampleMathProblem";

import ThankYou from "@/components/ThankYou";
import AllConcepts from "@/components/AllConcepts";
import SampleConcept from "@/components/SampleConcept";
import SampleMathProblem from "@/components/SampleMathProblem";

Vue.use(Router);

export default new Router({
	routes: [
		{
			path: "/",
			name: "Landing",
			component: Landing,
		},
		{
			path: "/reading",
			name: "Reading",
			component: Reading,
		},
		{
			path: "/concepts/:id",
			name: "Concepts",
			component: Concepts,
		},
		{
			path: "/exampleconcepts/:id",
			name: "ExampleConcepts",
			component: ExampleConcepts,
		},
		{
			path: "/mathproblem",
			name: "MathProblem",
			component: MathProblem,
			props: true,
		},
		{
			path: "/examplemathproblem",
			name: "ExampleMathProblem",
			component: ExampleMathProblem,
			props: true,
		},
		{
			path: "/thankyou",
			name: "ThankYou",
			component: ThankYou,
		},
		{
			path: "/allconcepts",
			name: "AllConcepts",
			component: AllConcepts,
		},
		{
			path: "/sampleconcept",
			name: "SampleConcept",
			component: SampleConcept,
		},
		{
			path: "/samplemathproblem",
			name: "SampleMathProblem",
			component: SampleMathProblem,
		},
	],
});
