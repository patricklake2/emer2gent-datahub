<template>
  <div class="holder">
    <h2>{{ dataset.title }}</h2>
    <p>{{ dataset.description }}</p>
  </div>
</template>

<script>
export default {
  computed: {
    dataset() {
      const org = this.$route.params.org;
      const id = this.$route.params.id;
      return this.$root.index[org].datasets.find(entry => entry.id === id);
    },
  },
};
</script>
