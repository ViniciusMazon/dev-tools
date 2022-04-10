<template>
  <div class="container">
    <h1>Gerador de IDs</h1>

    <span>{{ state.id }}</span>

    <button @click="generateId">Gerar</button>
  </div>
</template>

<script lang="ts">
import { reactive } from "vue";
import { v4 as uuidv4 } from "uuid";

export default {
  setup() {
    const state = reactive({
      id: "",
    });

    function generateId() {
      const id = uuidv4().split("-").join('');
      state.id = id;
    }

    return {
      state,
      generateId,
    };
  },
};
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

.container span {
  font-size: 30px;
  padding: 40px;
}

button {
  width: 200px;
  height: 60px;
  text-transform: capitalize;
  font-weight: bold;
  font-size: 18px;
  background-color: var(--vt-c-indigo);
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  filter: brightness(90%);
  transition: 0.2s;
}
</style>