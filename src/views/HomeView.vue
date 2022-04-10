<template>
  <div class="container">
    <h1><logo-icon /> dev-tools</h1>
    <p>Pacote de ferramentas úteis no dia a dia de um desenvolvedor</p>
  </div>
</template>

<script setup>
import LogoIcon from "../components/icons/LogoIcon.vue";
</script>

<style scoped>
.container {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.container h1 {
  font-size: 60px;
  font-weight: bold;
}

.container p {
  font-size: 18px;
}
</style>