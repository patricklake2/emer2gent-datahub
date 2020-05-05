<template>
  <div>
    <div class="holder">
      <h2>{{ dataset.title }}</h2>
      <p>{{ dataset.description }}</p>
    </div>
    <section>
      <div class="holder">
        <a :href="downloadBlob" class="download button c2-bg">Raw JSON</a>
        <h3>Metadata</h3>
        <meta-table
          :data="dataset"
          :excludedProps="['title', 'description', 'resources', 'references']"
        />
      </div>
    </section>
    <section id="resources" v-if="dataset.resources">
      <div class="holder">
        <h3>Resources</h3>
        <ul>
          <li v-for="(resource, i) in dataset.resources" :key="i">
            <a :href="resource.url">
              <h4>{{ resource.title || '(no title)' }}</h4></a
            >
            <p v-if="resource.description">
              {{ resource.description }}
            </p>
            <meta-table
              :data="resource"
              :excludedProps="['title', 'description']"
            />
          </li>
        </ul>
      </div>
    </section>
    <section v-if="dataset.references" id="references">
      <div class="holder">
        <h3>References</h3>
        <ul>
          <li v-for="(ref, i) in dataset.references" :key="i">
            <a :href="ref.url">{{ ref.url }}</a>
            <p>{{ ref.description }}</p>
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script>
import MetaTable from './MetaTable.vue';

export default {
  name: 'Dataset',
  components: { MetaTable },
  data() {
    return {
      resourceDetailStates: {},
    };
  },
  computed: {
    tableProps() {
      const excluded = ['title', 'description', 'resources', 'references'];
      return Object.keys(this.dataset).filter(key => !excluded.includes(key));
    },
    dataset() {
      const org = this.$route.params.org;
      const id = this.$route.params.id;
      return this.$root.index[org].datasets.find(entry => entry.id === id);
    },
    downloadBlob() {
      const jsonStr = JSON.stringify(this.dataset, null, 2);
      const blob = new Blob([jsonStr], { type: 'application/json' });
      return window.URL.createObjectURL(blob);
    },
  },
};
</script>

<style scoped>
h3 {
  font-weight: 500;
  font-size: 1.7em;
}
.download {
  float: right;
  position: relative;
  top: 30px;
}
#resources,
#references {
  margin-top: 10px;
}
#resources ul {
  list-style-type: none !important;
  margin: 0;
}
#resources h4 {
  font-size: 1.1em;
  padding-bottom: 10px;
}
</style>
