<script setup lang="ts">
import {ref} from 'vue';
import {fetchNginxFile, LogError} from './utils';
import {marked} from 'marked';
import {servserAddr} from './config';

interface Info { 
	info: {
		leftCol: { [key: string]: string };
		rightCol: { [key: string]: string };
	},
	position: string[];
	education: string[][];
};
const info = ref<Info>({
	info: {leftCol: {}, rightCol: {}},
	position: [],
	education: [],
});
const content = ref<string>('简历加载中')

// 从服务器获取个人信息、求职意向、教育经历
fetchNginxFile<Info>('/info.json').then(response => {
	info.value = response
}).catch(LogError)

// 从服务器获取技能和项目经验并解析
fetchNginxFile<string>('/resume.md').then(async response => {
	content.value = await marked(response)
}).catch(LogError)
</script>

<template>
	<body class="resume-body py-3 bg-light">
		<b-container class="lh-lg shadow rounded p-4 bg-light overflow-auto">
			<h2>个人信息</h2>
			<b-row class="px-5">
				<b-col cols="12" md="4" class="order-md-last text-center">
					<img :src="servserAddr + '/photo.jpg'" alt="照片"
						width="150px" height="150px" class="rounded-circle"
					>
				</b-col>
				<b-col cols="4" md="3">
					<ul>
						<li v-for="(value, key) in info.info.leftCol" :key="key">
							{{ key }}: <span v-html="value" />
						</li>
					</ul>
				</b-col>
				<b-col cols="8" md="5">
					<ul>
						<li v-for="(value, key) in info.info.rightCol" :key="key">
							{{ key }}: <span v-html="value" />
						</li>
					</ul>
				</b-col>
			</b-row>
			<h3>求职意向</h3>
			<ul class="d-flex justify-content-around mx-5">
				<li v-for="item in info.position" :key="item">{{item}}</li>
			</ul>
			<h3>教育经历</h3>
			<ul v-for="(line, index) in info.education" :key="index"
				class="d-flex justify-content-around mx-5"
			>
				<li v-for="column in line" :key="column">{{column}}</li>
			</ul>
			<div v-html="content" />
		</b-container>
	</body>
</template>

<style scoped>
.resume-body {
	margin-top: 56px;
	background-color: var(--light);
}
</style>
