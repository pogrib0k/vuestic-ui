<template>

<button @click="init('Show toast')">
  Show toast
</button>
<button @click="showToast('Toast without vue context')">
  Show toast without vue context
</button>

</template>

<script lang="ts" setup>
import { useToast } from '../../components/va-toast'
import { showToast } from './current-app.demo'

const { init } = useToast()

</script>
