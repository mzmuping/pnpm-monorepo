<template>
  <button @click="clicks">{{ msg }}</button>
</template>

<script setup lang="ts">
defineProps<{
  msg?: string;
}>();
// type-based
const emit = defineEmits<{
  (e: "change", id: number): void;
  (e: "update", value: string): void;
}>();

const clicks = () => {
  emit("change", "adfadfa");
};
</script>
<style scoped></style>
