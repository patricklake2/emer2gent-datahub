<template>
  <div class="holder">
    <h2>Add Data</h2>
    <p>
      This page allows you to enter details about a dataset and submit them to
      our public index, or download your input as JSON, so that you can manually
      add it to your own index.
    </p>
    <div ref="formContainer"></div>
    <div class="controls">
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
    async submit() {
      const valid = this.form.validate();
      if (valid) {
        const status = await submitForm(this.form.getData());
        console.log(status);
        if (status === 200) {
          alert('Form submitted successfully!');
          document.querySelector('.brutusin-form').reset();
        } else {
          alert('There was a problem submitting your form to the server.');
        }
      }
    },
    download() {
      const valid = this.form.validate();
      if (valid) {
        const dataStr =
          'data:text/json;charset=utf-8,' +
          encodeURIComponent(JSON.stringify(this.form.getData()));
        this.$refs.downloadLink.setAttribute('href', dataStr);
        this.$refs.downloadLink.click();
        document.querySelector('.brutusin-form').reset();
      }
    },
    reset() {},
  },
};
</script>

<style>
.controls {
  text-align: center;
  margin-top: 25px;
}
.controls button {
  width: 200px;
  height: 50px;
}
.submitted {
  color: green;
}
.error {
  color: red;
}
</style>
