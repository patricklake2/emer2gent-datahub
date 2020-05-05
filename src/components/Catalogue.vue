<template>
  <div class="holder">
    <ul class="grid">
      <li v-for="(dataset, i) in datasets" :key="i">
        <router-link
          class="c3-bg"
          :to="{ name: 'Details', params: { id: dataset.id } }"
        >
          <h3>{{ dataset.title }}</h3>
          <p>{{ shortDesc(dataset.description) }}</p>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Catalogue',
  props: {
    index: {
      type: Object,
      required: true,
    },
  },
  computed: {
    datasets() {
      let data = [];
      Object.values(this.index).forEach(
        entry => (data = data.concat(entry.indexData.datasets))
      );
      return data;
    },
  },
  methods: {
    shortDesc(desc) {
      if (desc.length < 175) return desc;
      return `${desc.substring(0, 175)}...`;
    },
  },
};
</script>
