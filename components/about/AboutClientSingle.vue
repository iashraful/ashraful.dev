<script>
export default {
  props: ["client"],
  data: () => {
    return {
      // @todo
    };
  },
};
</script>

<template>
  <!-- About single client -->
  <div>
    <a :href="client.url" target="_blank">
      <img
        :src="client.img"
        :alt="client.title"
        class="
          w-64
          py-5
          px-10
          border border-ternary-light
          dark:border-ternary-dark
          shadow-sm
          rounded-lg
          mb-8
          cursor-pointer
        "
        :class="client.dark ? 'bg-secondary-dark' : 'bg-secondary-light'"
      />
    </a>
  </div>
</template>

<style lang="scss" scoped></style>
