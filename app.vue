<script setup>
import { ref } from "vue";

const since = ref(null);
const transactions = ref([]);

const handleClick = async () => {
  const response = await $fetch(`/api/transactions?since=${since.value}`);

  transactions.value = await response.transactions;
  since.value = null;
};
</script>

<template>
  <div class="p-8">
    <h1 class="text-indigo-800 font-2xl font-bold mb-8">YNAB + AI</h1>

    <div class="flex flex-row justify-between items-center">
      <h2 class="font-xl font-semibold">Transaction History</h2>
      <div>
        <label for="since-date" class="mr-2">transactions since:</label>
        <!-- only allow iso date -->
        <input
          v-model="since"
          type="date"
          id="since-date"
          class="p-1 border border-gray-400 rounded-sm"
          name="since-date"
          pattern="\d{4}-\d{2}-\d{2}"
        />
      </div>
    </div>

    <!-- empty state -->
    <div v-if="transactions?.length === 0" class="my-8">
      <p class="text-gray-600">
        You don't have any transactions yet. Please select a date range to get
        started.
      </p>
    </div>

    <!-- transactions -->
    <div v-else class="my-8">
      <div class="flex flex-row justify-between items-center space-x-4">
        <p class="font-semibold w-1/5">Date</p>
        <p class="font-semibold w-2/5">Payee</p>
        <p class="font-semibold w-1/5">Amount</p>
        <p class="font-semibold w-1/5">Category</p>
      </div>
      <div
        v-for="transaction in transactions"
        :key="transaction.id"
        class="flex flex-row justify-between items-center space-x-4 my-4"
      >
        <p class="w-1/5 truncate">{{ transaction.date }}</p>
        <p class="w-2/5 truncate" :title="transaction.payee_name">
          {{ transaction.payee_name }}
        </p>
        <p class="w-1/5 truncate">{{ transaction.amount }}</p>
        <p class="w-1/5 truncate">{{ transaction.category_name }}</p>
      </div>
    </div>

    <!-- load transactions button -->
    <button
      class="bg-indigo-800 hover:bg-indigo-500 text-white font-bold py-2 px-4 rounded-sm focus:outline-none focus:shadow-outline"
      @click="handleClick"
      :disabled="!since"
    >
      Load Transactions
    </button>
  </div>
</template>
