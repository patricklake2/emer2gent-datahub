<template>
  <section>
    <router-view v-if="loaded" :index="index" />
    <div class="holder" v-else>
      <p v-if="errors">Sorry, loading data failed. Try refreshing the page</p>
      <p v-else>Loading data...</p>
    </div>
  </section>
</template>

<script>
import getIndex from '../utils/get-data';

export default {
  data() {
    return {
      index: {},
      loaded: false,
      errors: false,
    };
  },
  async created() {
    try {
      const idx = await getIndex();
      this.index = idx;
      this.loaded = true;
    } catch (err) {
      this.errors = true;
    }
  },
};
</script>
