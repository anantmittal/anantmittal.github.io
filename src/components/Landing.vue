<template>
	<div>
		<b-container class="bv-example-row">
			<b-row>
				<b-col lg="4" class="text-center">
					<b-card
						title="Anant Mittal"
						sub-title="Ph.D. Student"
						:img-src="require('@/assets/Anant.jpeg')"
						img-alt="Profile picture of Anant Mittal"
						img-top
						tag="article"
						style="max-width: 20rem;"
						class="mb-2"
					>
						<!--b-card-text>
							Some quick example text to build on the card title
							and make up the bulk of the card's content.
						</!--b-card-text-->

						<b-card-body style="font-size:30px;">
							<a
								href="mailto:anmittal@cs.washington.edu"
								class="card-link"
							>
								<b-icon
									icon="envelope-fill"
									style="color: #7952b3;"
								>
								</b-icon
							></a>
							<a
								href="https://github.com/anantmittal"
								class="card-link"
							>
								<b-icon icon="github" style="color: #7952b3;">
								</b-icon
							></a>
							<a
								href="https://www.linkedin.com/in/anantmittal/"
								class="card-link"
							>
								<b-icon icon="linkedin" style="color: #7952b3;">
								</b-icon
							></a>
						</b-card-body>
					</b-card>
				</b-col>
				<b-col lg="8" class="text-justify">
					<p>
						I am a CS PhD student at the University of Washington,
						currently affiliated with the Center for Game Science
						and closely collaborating with education researchers at
						Enlearn. My research is at the intersection of
						human-computer interaction, cognitive psychology,
						learning sciences, and applied artificial intelligence.
						Using concepts from these fields, I try to build
						personalized math learning systems for classroom
						environments. In the past, I have had some experience
						working in healthcare as an intern at IKP Centre for
						Technologies in Public Health (ICTPH) and consultant for
						the Swasth Foundation in India. Both these organizations
						build sustainable primary healthcare clinics in rural
						India. During my time there, I built interactive systems
						that help administrators and patients make better sense
						of healthcare data. Please find attached my resume for
						further reference.
					</p>
				</b-col>
			</b-row>
		</b-container>
	</div>
</template>

<script>
	export default {
		name: "Landing",
		props: {
			msg: String,
		},
		data() {
			return {};
		},
		components: {},
		mounted: function() {},
		created() {},
		methods: {},
	};
</script>
