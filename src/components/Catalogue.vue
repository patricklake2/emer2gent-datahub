<template>
  <div class="holder">
    <div v-if="selectedOrgs.length > 1">
      <h2>Organisations</h2>
      <ul class="grid">
        <li v-for="(org, i) in selectedOrgs" :key="i">
          <router-link
            :to="{ name: 'Catalogue', params: { org } }"
            class="c2-bg"
          >
            <h3>{{ $root.index[org].author }}</h3>
            <p>{{ shortDesc($root.index[org].description) }}</p>
          </router-link>
        </li>
      </ul>
    </div>
    <h2>{{ title }}</h2>
    <ul class="grid">
      <template v-for="org in selectedOrgs">
        <li v-for="(dataset, i) in $root.index[org].datasets" :key="i">
          <router-link
            class="c3-bg"
            :to="{ name: 'Details', params: { org, id: dataset.id } }"
          >
            <h3>{{ dataset.title }}</h3>
            <p>{{ shortDesc(dataset.description) }}</p>
          </router-link>
        </li>
      </template>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Catalogue',
  computed: {
    selectedOrgs() {
      if (this.$route.params.org) return [this.$route.params.org];
      else return Object.keys(this.$root.index);
    },
    title() {
      if (this.$route.params.org)
        return this.$root.index[this.$route.params.org].author;
      else return 'All Datasets';
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
