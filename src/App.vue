<script setup lang="ts">
import ResumeNav from './ResumeNav.vue';
import ResumeBody from './ResumeBody.vue';
import ResumeFooter from './ResumeFooter.vue';
</script>

<template>
	<div class="global">
		<ResumeNav />
		<ResumeBody class="resume-body" />
		<ResumeFooter class="resume-footer" />
	</div>
</template>

<style scoped>
.global {
	background-color: var(--light);
}
.resume-body {
	color: var(--deep);
}
.resume-footer {
	background-color: var(--deep);
}
</style>
