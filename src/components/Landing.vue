<template>
	<div>
		<b-container class="bv-example-row">
			<b-row>
				<b-col lg="4" class="text-center" md="12" sm="12">
					<b-card
						border-variant="light"
						title="Anant Mittal"
						sub-title="Ph.D. Candidate"
						:img-src="require('@/assets/Anant.jpeg')"
						img-alt="Profile picture of Anant Mittal"
						img-top
						tag="article"
						class="mb-2">
						<b-card-text> anmittal [at] cs [dot] washington [dot] edu </b-card-text>

						<b-card-body style="font-size: 30px">
							<!-- <a href="mailto:anmittal@cs.washington.edu" class="card-link">
								<b-icon icon="envelope-fill" style="color: #7952b3"> </b-icon
							></a> -->
							<a href="https://github.com/anantmittal" class="card-link" target="_blank">
								<b-icon icon="github" style="color: #7952b3"> </b-icon
							></a>
							<a href="https://www.linkedin.com/in/anantmittal/" class="card-link" target="_blank">
								<b-icon icon="linkedin" style="color: #7952b3"> </b-icon
							></a>
							<b-link href="https://orcid.org/0009-0000-9085-8446" class="card-link" target="_blank">
								<span style="color: #7952b3">ORCiD</span>
							</b-link>
							<b-link
								href="https://homes.cs.washington.edu/~anmittal/Resume.pdf"
								class="card-link"
								target="_blank">
								<span style="color: #7952b3">Resume</span>
							</b-link>
						</b-card-body>
					</b-card>
				</b-col>
				<b-col lg="8">
					<About />
				</b-col>
			</b-row>
		</b-container>
	</div>
</template>

<script>
import About from '@/components/About.vue';
export default {
	name: 'Landing',
	props: {
		msg: String,
	},
	data() {
		return {};
	},
	components: { About },
	mounted: function () {},
	created() {},
	methods: {},
};
</script>
<style scoped>
.card-img-top {
	border-radius: 50%;
}
</style>
