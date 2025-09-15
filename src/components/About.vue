<template>
  <div>
    <span id="intro">
      <p>
        I am a Senior Research Software Engineer at the
        <b-link
          href="https://escience.washington.edu/software-engineering/ssec/"
          target="_blank"
          >Scientific Software Engineering Center</b-link
        >,
        <b-link href="https://escience.washington.edu/" target="_blank"
          >eScience Institute</b-link
        >, University of Washington (UW).
      </p>
      <p>
        I graduated with a Ph.D. in Computer Science from
        <b-link href="https://www.cs.washington.edu/" target="_blank">
          UW</b-link
        >. My dissertation work focused on designing and building systems for
        communication, collaboration, and coordination in complex settings like
        Accessibility and Health.
      </p>
    </span>
    <b-button v-b-toggle.dissertation-projects variant="outline-secondary"
      >Dissertation Projects</b-button
    >
    <b-collapse id="dissertation-projects" class="mt-2">
      <ul>
        <li>
          <strong>SCOPE:</strong> A Collaborative Care System for People with
          Cancer to Manage their Treatment and Depression <br />Advisors:
          <b-link
            href="https://homes.cs.washington.edu/~jfogarty/"
            target="_blank"
            >James Fogarty</b-link
          >
          and
          <b-link href="https://faculty.washington.edu/garyhs/" target="_blank"
            >Gary Hsieh</b-link
          ><br />
          <p id="project-description">
            Designed, built, and deployed a web-based patient-provider system
            for people with cancer to manage their treatment and depression.
            Capturing feedback through a randomized controlled trial with over
            100 participants
          </p>
          <b-link
            href="https://homes.cs.washington.edu/~anmittal/CSCW2025_SCOPE_Camera_Ready.pdf"
            target="_blank"
          >
            [CSCW '25 Paper]
          </b-link>
          <b-link href="https://sites.uw.edu/scopestudy/" target="_blank">
            [Study Link]
          </b-link>
          <b-link
            href="https://homes.cs.washington.edu/~anmittal/UWSCOPE_CHI_2023_Workshop.pdf"
            target="_blank"
          >
            [CHI '23 Workshop Paper]
          </b-link>
          <b-link
            href="https://homes.cs.washington.edu/~anmittal/UWSCOPE_APOS_2023_Poster.pdf"
            target="_blank"
          >
            [APOS '23 Poster]
          </b-link>
        </li>

        <li>
          <strong>Jod:</strong> Examining Design and Implementation of a
          Videoconferencing Platform for Mixed Hearing Groups <br />Advisors:
          <b-link
            href="https://homes.cs.washington.edu/~jfogarty/"
            target="_blank"
            >James Fogarty</b-link
          >, Mohit Jain, and Pratyush Kumar<br />
          <p id="project-description">
            Designed and built a new videoconferencing platform for mixed
            hearing groups using Azure Communication Services, and ran user
            studies with 34 participants
          </p>
          <b-link
            href="https://dl.acm.org/doi/abs/10.1145/3597638.3608382"
            target="_blank"
          >
            [ASSETS '23 Paper]
          </b-link>
          <b-link
            href="https://youtu.be/9AVCkzfcBus?si=n3WntOqB6V0ImPpO&t=860"
            target="_blank"
          >
            [Allen School Talk]
          </b-link>
        </li>
      </ul>
    </b-collapse>
    <b-button v-b-toggle.past-projects variant="outline-secondary"
      >Past Projects</b-button
    >
    <b-collapse id="past-projects" class="mt-2">
      <ul>
        <li>
          <strong>MigraineTracker:</strong> Examining Patient Experiences with
          Goal-Directed Self-Tracking for a Chronic Health Condition
          <br />Collaborator:
          <b-link href="https://sefyas.github.io/" target="_blank"
            >Yasaman S Sefidgar</b-link
          >, Advisor:
          <b-link
            href="https://homes.cs.washington.edu/~jfogarty/"
            target="_blank"
            >James Fogarty</b-link
          ><br />
          <b-link
            href="https://doi.org/10.1145/3613904.3642075"
            target="_blank"
          >
            [CHI '24 Paper]
          </b-link>
        </li>
        <li>
          <strong>PlayBridge:</strong> Examining Personalized AI for Runtime
          Enhancements to Improve Accessibility of Android Educational Games for
          Children with Upper Body Motor Impairments <br />Collaborators:
          <b-link href="https://jszh.github.io/" target="_blank"
            >Mingyuan Zhong</b-link
          >
          and
          <b-link
            href="https://homes.cs.washington.edu/~jessejm/"
            target="_blank"
            >Jesse J. Martinez</b-link
          >, Advisor:
          <b-link
            href="https://homes.cs.washington.edu/~jfogarty/"
            target="_blank"
            >James Fogarty</b-link
          >
          <!-- <p id="project-description">
					Applying generative AI and computer vision methods for runtime repair of Android educational games
					for children with upper body motor impairments
				</p> -->
        </li>
        <li>
          <strong>Fibromyalgia:</strong> Understanding Mobile App Use among
          Persons with Fibromyalgia <br />Advisors:
          <b-link href="https://annietchen.github.io/" target="_blank"
            >Annie T Chen</b-link
          >
          and
          <b-link href="https://pages.ischool.utexas.edu/yanz/" target="_blank"
            >Yan Zhang</b-link
          ><br />
          <b-link
            href="https://doi.org/10.1016/j.jpain.2024.03.011"
            target="_blank"
          >
            [Journal of Pain '24 Paper]
          </b-link>
        </li>
        <li>
          <strong>Executive Functions + Math:</strong> Designing and Prototyping
          Math Learning Tools for K12 Classroom Environments to Engage Students'
          Executive Functions <br />Advisors:
          <b-link
            href="https://www.linkedin.com/in/yun-en-liu-026218b8/"
            target="_blank"
            >Yun-En Liu</b-link
          >
          and
          <b-link href="https://homes.cs.washington.edu/~zoran/" target="_blank"
            >Zoran Popović</b-link
          ><br />

          <b-link
            href="https://engagedlearning.github.io/brainpoints_equations_training/#/problem/1/t"
            target="_blank"
          >
            [Immediate Next Steps in Linear Equations Prototype]
          </b-link>
          <br />
          <b-link
            href="https://ef_math.pages.cs.washington.edu/prototype_2/#/problem/1"
            target="_blank"
          >
            [Previous Steps in Linear Equations Prototype]
          </b-link>
        </li>

        <li>
          <strong>Scientific Discovery through Games:</strong> Applied Machine
          Learning and Data Science for Maximizing Scientific Discovery and
          Engagement in STEM Education and Crowdsourcing games <br />Advisor:
          <b-link href="https://homes.cs.washington.edu/~zoran/" target="_blank"
            >Zoran Popović</b-link
          ><br />
        </li>

        <li>
          <strong
            >Augmenting Authentic Data Science Environments for Learning
            Analytic:</strong
          >
          Built Extensions and Infrastructure for Project Jupyter to Capture
          Learning Behavior of Data Scientists and Crowdsource Data Science
          Questions and Datasets on Coursera
          <br />Advisor:
          <b-link href="https://christopherbrooks.ca/" target="_blank"
            >Christopher Brooks</b-link
          ><br />
          <b-link href="https://dl.acm.org/doi/10.1145/3359141" target="_blank">
            [CSCW '19 Paper]
          </b-link>
          <b-link
            href="https://homes.cs.washington.edu/~anmittal/LAK19_Augmenting_Authentic_Data_Science_Environments_for_Learning_Analytics_Camera_Ready.pdf"
            target="_blank"
          >
            [LAK '19 Poster Paper]
          </b-link>
          <b-link
            href="https://homes.cs.washington.edu/~anmittal/MIDAS_Mentor_Academy_Poster.pdf"
            target="_blank"
          >
            [Mentor Academy MIDAS Poster]
          </b-link>
        </li>
      </ul>
    </b-collapse>

    <p class="mt-2">
      I have been fortunate to work in education, health, governance, and public
      policy through affiliations with the following organizations:
    </p>
    <ul>
      <li>
        <a href="https://www.enlearn.org/" target="_blank">Enlearn</a>
      </li>
      <li>
        <a href="https://centerforgamescience.org/" target="_blank"
          >Center for Game Science</a
        >
      </li>
      <li>
        <a href="https://edtech.labs.si.umich.edu/" target="_blank">
          Educational Technology Collective Lab
        </a>
      </li>
      <li>
        <a href="https://www.mainstay.com/" target="_blank">Mainstay</a>
      </li>
      <li>
        <a href="https://aamaadmiparty.org/" target="_blank"
          >Aam Aadmi Party, Delhi</a
        >
      </li>
      <li><a>Adobe Systems</a></li>
      <li>
        <a href="https://www.swasth.org/" target="_blank">Swasth Foundation</a>
      </li>
      <li>
        <a href="http://ictph.org.in/" target="_blank"
          >IKP Centre for Technologies in Public Health</a
        >
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "About",
};
</script>
<style scoped>
a {
  color: #7952b3;
}

ul li {
  margin-bottom: 10px;
}

#intro {
  font-size: 1.2rem;
}

#project-description {
  margin-bottom: 0px;
}
</style>
