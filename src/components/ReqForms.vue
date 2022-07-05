<template>
  <div>
    <h1>Шаблоны для запроса</h1>
    <section v-if="reqForm.length">
      <div
        class="shablon shablon-req-froms"
        v-for="(req, i) of reqForm"
        :key="i"
      >
        <textarea
          readonly
          ref="textAreaReq"
          v-model="req.text"
          class="no-resize"
        ></textarea>
        <button @click="copyText(req.text, i)" class="copy">Копировать</button>
        <span class="shablon-category">{{ req.category }}</span>
      </div>
    </section>
    <p v-else>Шаблонов пока нет</p>
  </div>
</template>

<script>
export default {
  name: "This form",
  data() {
    return {
      reqForm: [],
      url: "http://localhost:3000/shablons",
    };
  },
  methods: {
    copyText(req, i) {
      this.$refs.textAreaReq[i].select();
      window.navigator.clipboard.writeText(req);
    },
  },
  async mounted() {
    await fetch(this.url)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        this.reqForm.push(...data);
        console.log("form ->", this.reqForm);
      })
      .catch((e) => console.log(e));
  },
  filters: {
    replace(st, rep, repWith) {
      const result = st.split(rep).join(repWith);
      return result;
    },
  },
};
</script>

<style>
.shablon-req-froms {
  position: relative;
}
.shablon-category {
  background-color: #ccc;
  height: 30px;
  padding: 4px;
  width: 150px;
  border-radius: 5px;
  position: absolute;
  inset: 5.4rem 0rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>