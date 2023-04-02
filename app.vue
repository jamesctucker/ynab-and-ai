<script setup>
const handleClick = async () => {
  await $fetch("/api/transactions");
};
</script>

<template>
  <div>
    <h1 class="text-red-400">Hello</h1>
    <button @click="handleClick">Click</button>
  </div>
</template>
