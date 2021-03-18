<template>
  <h4>{{ props.username }}</h4>
</template>
    


<script setup="props">
import { defineProps } from "vue";

const props = defineProps({
  username: {
    type: String,
    required: true,
  },
});
</script>