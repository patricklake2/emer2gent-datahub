<template>
  <div>
    <input id="hamburger" type="checkbox" class="hamburger" />
    <label for="hamburger" class="hamburger">
      <span class="nv">Toggle menu (if not visible)</span>
    </label>
    <header class="emergent-header">
      <div class="glory">
        <div class="holder">
          <h1>Emergent Alliance Data</h1>
        </div>
      </div>
      <div class="holder opacity">
        <nav>
          <ul>
            <li><router-link :to="{ path: '/' }">Home</router-link></li>
            <li>
              <router-link :to="{ path: '/catalogue' }">Catalogue</router-link>
            </li>
            <li>
              <router-link :to="{ path: '/add' }">Add Data</router-link>
            </li>
            <li><a href="https://emer2gent.org/">The Alliance</a></li>
          </ul>
        </nav>
      </div>
    </header>
  </div>
</template>

<style scoped>
.emergent-header {
  background-image: url('../assets/emergent-bg-small.png');
}
.emergent-header h1 {
  padding: 1em;
  font-size: 3rem;
  text-shadow: 0.5px 0.5px;
}
.opacity {
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 10px;
}
</style>
