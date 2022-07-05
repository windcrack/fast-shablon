<template>
  <form @submit.prevent="sendData">
    <h1 class="form-title">Добавление шаблона</h1>
    <div class="form-row">
      <label for="category">Категория</label>
      <input type="text" id="category" v-model="category" required />
    </div>
    <div class="form-row">
      <label for="text">Текстс шаблона</label>
      <textarea type="text" id="text" v-model="text" required></textarea>
    </div>
    <button class="btn center">Добавить шаблон</button>
  </form>
</template>

<script>
import { ref } from "vue";
export default {
  data() {
    return {
      category: null,
      text: null,
    };
  },
  setup() {
    const url = ref("http://localhost:3000/shablons");
    const sendData = () => {
      fetch(url.value, {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          category: category.value.trim(),
          text: text.value.trim(),
        }),
      }).then((res) => res(data));
    };

    return {
      sendData,
      url,
    };
  },
  mounted(){

  }
};
</script>

<style>
form {
  max-width: 700px;
}
.form-title {
  margin: 24px 0;
}
.form-row {
  display: flex;
  flex-direction: column;
  margin-bottom: 12px;
}
#text {
  width: auto;
  max-width: 322px;
  min-width: 321px;
  border-radius: 5px;
  border: 2px solid rgba(128, 166, 255, 1);
  outline: none;
  padding: 6px;
}
.form-row input {
  border: none;
  padding: 12px 6px;
  font-size: 16px;
  border-bottom: 2px solid rgba(128, 166, 255, 1);
  outline: none;
}
.center {
  margin: 0 auto 0;
}
</style>