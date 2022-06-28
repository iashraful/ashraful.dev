<script>
import { mapState } from "vuex";

export default {
  data: () => {
    return {
      projectName: "Ashraful's Portfolio",
      author: "Ashraful Islam",
    };
  },
  computed: {
    ...mapState(["copyrightDate"]),
  },
};
</script>

<template>
  <div class="flex justify-center items-center text-center">
    <div
      class="
        font-general-regular
        text-lg text-ternary-dark
        dark:text-ternary-light
      "
    >
      <a
        href="https://github.com/iashraful/ashraful.dev"
        target="__blank"
        class="
          font-general-medium
          hover:underline hover:text-indigo-600
          dark:hover:text-indigo-300
          duration-500
        "
        >{{ projectName }}</a
      > &copy; {{ copyrightDate }}
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
