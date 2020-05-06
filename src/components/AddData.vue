<template>
  <div class="holder">
    <h2>Add Data</h2>
    <p>
      This page allows you to enter details about a dataset and submit them to
      our public index, or download your input as JSON, so that you can manually
      add it to your own index.
    </p>
    <div ref="formContainer"></div>
    <div class="submit">
      <button type="button" class="c3-bg" @click="submit()">
        Submit to public Index
      </button>
      <button type="button" @click="download()">
        Download as JSON
      </button>
      <a
        ref="downloadLink"
        download="dataset-index-entry.json"
        target="_blank"
        style="display:none;"
      ></a>
    </div>
  </div>
</template>

<script>
import brutusin from 'brutusin';
import 'brutusin-json-forms/dist/css/brutusin-json-forms.min.css';

import submitForm from '../utils/submit-form';

export default {
  data() {
    return {
      form: null,
      formData: {},
    };
  },
  mounted() {
    const brutusinForms = brutusin['json-forms'];
    this.form = brutusinForms.create(
      this.$root.schema.properties.datasets.items
    );
    this.form.render(this.$refs.formContainer);
  },
  methods: {
    submit() {
      const valid = this.form.validate();
      if (valid) submitForm(this.form.getData());
    },
    download() {
      const valid = this.form.validate();
      if (valid) {
        const dataStr =
          'data:text/json;charset=utf-8,' +
          encodeURIComponent(JSON.stringify(this.form.getData()));
        this.$refs.downloadLink.setAttribute('href', dataStr);
        this.$refs.downloadLink.click();
      }
    },
  },
};
</script>

<style>
.submit {
  text-align: center;
  margin-top: 25px;
}
.submit button {
  width: 200px;
  height: 50px;
}
.error {
  color: red;
}
</style>
