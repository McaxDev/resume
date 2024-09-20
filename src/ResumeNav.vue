<script setup lang="ts">
import type { BaseColorVariant } from 'bootstrap-vue-next'
import { ref } from 'vue'
import { Scheme, servserAddr, type ColorStyle } from './config'

const variant = ref<keyof BaseColorVariant>('primary')
const colorMode = ref<ColorStyle>('dark')

function setTheme(scheme: keyof BaseColorVariant) {
  variant.value = scheme
  colorMode.value = Scheme[scheme]
  document.documentElement.style.setProperty('--main', `var(--bs-${scheme})`)
  document.documentElement.style.setProperty('--light', `var(--bs-${scheme}-bg-subtle)`)
  document.documentElement.style.setProperty('--deep', `var(--bs-${scheme}-text-emphasis)`)
  document.documentElement.style.setProperty('--subtle', `var(--bs-${scheme}-border-subtle)`)
}
</script>

<template>
  <b-navbar :variant="variant" v-b-color-mode="colorMode" toggleable="md" fixed="top">
    <b-navbar-brand>个人简历</b-navbar-brand>
    <b-navbar-toggle target="collapse" />
    <b-collapse id="collapse" is-nav>

      <b-nav-form class="d-flex">
        <b-form-input class="me-2" placeholder="Search" v-model="servserAddr" />
        <b-button type="submit" variant="light">Refresh</b-button>

      </b-nav-form>
      <b-navbar-nav class="ms-auto">
        <!-- 多主题切换按钮 -->
        <b-nav-item-dropdown no-caret>
          <template #button-content>
            <i class="bi bi-palette" />
          </template>
          <b-dropdown-item v-for="(_, key) in Scheme" :key="key" @click="setTheme(key)">
            <i class="bi bi-palette-fill" :style="`color: var(--bs-${key})`" />
          </b-dropdown-item>
        </b-nav-item-dropdown>

        <!-- Github -->
        <b-nav-item href="https://github.com/McaxDev">
          <i class="bi bi-github" />
        </b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>
