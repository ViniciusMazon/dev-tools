<template>
  <div class="container">
    <h1>Gerador de IDs</h1>

    <span v-show="isIdGenerated" @click="clipBoard">
      {{ state.id }}
      <clip-board-icon />
    </span>

    <button @click="generateId">Gerar</button>
  </div>
</template>

<script setup lang="ts">
import { computed, reactive, onMounted } from "vue";
import { v4 as uuidv4 } from "uuid";
import ClipBoardIcon from '../components/icons/ClipBoardIcon.vue'
import { useToast } from 'vue-toastification'

const toast = useToast()

const state = reactive({
  id: "",
});

onMounted(() => {
  generateId()
})

const isIdGenerated = computed(() => state.id !== '')

function generateId() {
  const id = uuidv4().split("-").join("");
  state.id = id;
}

function clipBoard() {
  navigator.clipboard.writeText(state.id);
  toast.success("Copiado para área de transferência");
}
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
  cursor: pointer;
}

.container span > svg {
  margin-left: 16px;
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
}

button:hover {
  filter: brightness(90%);
  transition: 0.2s;
}
</style>
