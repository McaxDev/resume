import type {BaseColorVariant} from "bootstrap-vue-next";
import {ref} from "vue";

export const servserAddr = ref<string>('https://static.mcax.cn:520/resume')

export type ColorStyle = 'light' | 'dark'

export const Scheme: Record<keyof BaseColorVariant, ColorStyle> = {
	primary: 'dark',
	secondary: 'dark',
	success: 'dark',
	info: 'light',
	warning: 'light',
	danger: 'dark',
	light: 'light',
	dark: 'dark',
}
