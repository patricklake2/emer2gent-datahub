<template>
  <table class="odi">
    <tr v-for="(prop, i) in displayProps" :key="i">
      <th>{{ prettifyKey(prop) }}</th>
      <td>
        <a v-if="prop.includes('url')" :href="data[prop]">
          {{ data[prop] }}
        </a>
        <a v-else-if="prop.includes('email')" :href="`mailto:${data[prop]}`">{{
          data[prop]
        }}</a>
        <span v-else>{{ data[prop].toString() }}</span>
      </td>
    </tr>
  </table>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      required: true,
    },
    excludedProps: {
      type: Array,
      default: () => [],
    },
  },
  computed: {
    displayProps() {
      return Object.keys(this.data).filter(
        key => !this.excludedProps.includes(key)
      );
    },
  },
  methods: {
    prettifyKey(key) {
      if (key.includes('_')) key = key.replace(/_/g, ' ');
      const firstLetter = key.substring(0, 1);
      return firstLetter.toUpperCase() + key.substring(1);
    },
  },
};
</script>

<style>
table.odi {
  max-width: 100%;
  overflow: scroll;
  table-layout: fixed;
  word-wrap: break-word;
}
table.odi th {
  width: 25%;
  text-align: center;
}
</style>
