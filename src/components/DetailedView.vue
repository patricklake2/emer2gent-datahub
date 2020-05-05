<template>
  <div class="holder">
    <p>Detailed view for dataset id {{ datasetID }}</p>
  </div>
</template>

<script>
export default {
  props: {
    index: {
      type: Object,
      required: true,
    },
  },
  computed: {
    datasetID() {
      return this.$route.params.id;
    },
  },
};
</script>
