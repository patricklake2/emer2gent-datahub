<template>
  <div class="holder">
    <div id="top" class="padded c3-bg">
      <h2>Data Hub</h2>
      <p>
        This page has been set up to collate and share data resources being used
        or produced by members of the
        <a href="https://emer2gent.org">Emergent Alliance</a>. It is powered by
        a distributed set of index files, which you can read more about on our
        <a href="https://github.com/odileeds/emer2gent-data"
          >GitHub repository</a
        >.
      </p>
    </div>
    <ul class="grid">
      <li>
        <router-link :to="{ path: '/catalogue' }" class="s1-bg">
          <h2>Catalogue</h2>
          <p>A catalogue of contributing organisations and datasets.</p>
        </router-link>
      </li>
      <li>
        <router-link :to="{ path: '/add' }" class="s1-bg">
          <h2>Add Data</h2>
          <p>
            A simple tool to allow you to easily contribute datasets to the
            catalogue.
          </p>
        </router-link>
      </li>
      <li>
        <a href="https://odileeds.github.io/emer2gent-data" class="s1-bg">
          <h2>More Info</h2>
          <p>
            Information about how this site works and how you can create your
            own index file to add to this catalogue.
          </p>
        </a>
      </li>
    </ul>
  </div>
</template>

<style>
#top {
  text-align: center;
  margin: 20px 0;
  padding: 25px;
}
a.s1-bg:visited {
  color: white;
}
</style>
