<template>
  <div class="container">
    <h1>Gerador de Pessoas</h1>
    <div>
      <div class="input-group">
        <label for="avatar">Avatar</label>
        <img name="avatar" :src="state.avatar" />
      </div>

      <div class="input-group">
        <label for="name">Nome</label>
        <input name="name" type="text" :value="state.name" readonly />
      </div>

      <div class="input-group">
        <label for="email">E-mail</label>
        <input email="email" type="email" :value="state.email" readonly />
      </div>

      <div class="input-group">
        <label for="phone">Telefone</label>
        <input name="phone" type="text" :value="state.phone" readonly />
      </div>
    </div>
    <button @click="generatePerson">Gerar</button>
  </div>
</template>

<script setup lang="ts">
import { reactive, onMounted } from "vue";
import {faker} from '@faker-js/faker'

var state = reactive({
  name: "",
  email: "",
  phone: "",
  avatar: "",
});

onMounted(() => {
  generatePerson()
})

function generatePerson() {
  state.name = faker.name.findName();
  state.email = faker.internet.email();
  state.phone = faker.phone.phoneNumber();
  state.avatar = faker.image.avatar();
}
</script>

<style>
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

.input-group {
  display: flex;
  flex-direction: column;
}

.input-group label {
  margin-bottom: 8px;
}

.input-group img {
  width: 300px;
  height: 300px;
  border: 1px soid var(--vt-c-indigo);
  border-radius: 4px;
  padding: 4px;
}

.input-group input {
  width: 500px;
  height: 60px;
  border-radius: 4px;
  background-color: transparent;
  border-color: var(--vt-c-indigo);
  color: #fff;
  font-size: 18px;
  padding: 4px;
}

button {
  width: 200px;
  height: 60px;
  text-transform: capitalize;
  font-weight: bold;
  font-size: 18px;
  background-color: var(--vt-c-indigo);
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 32px;
}

button:hover {
  filter: brightness(90%);
  transition: 0.2s;
}
</style>
