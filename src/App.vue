<template>
  <header>
    <h1>
      <span @click="$router.push({ path: '/' })">
        <logo-icon /> dev-tools
      </span>
    </h1>
    <nav>
      <ul>
        <li>
          <span @click="$router.push({ path: '/id' })"> Gerador de id </span>
        </li>
        <li>
          <span @click="$router.push({ path: '/person' })">
            Gerador de pessoas
          </span>
        </li>
      </ul>
    </nav>
  </header>

  <RouterView />
</template>

<script setup lang="ts">
import LogoIcon from "./components/icons/LogoIcon.vue";
</script>

<style>
@import "@/assets/base.css";

#app {
  height: 100vh;
  margin: 0 auto;
  padding: 2rem;
  font-weight: normal;
}

header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
}

header span {
  text-decoration: none;
  color: #fff;
  cursor: pointer;
}

header ul {
  display: flex;
}

header ul li {
  list-style-type: none;
  margin-right: 16px;
}
</style>
