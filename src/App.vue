<template>
  <div class="container">
    <Aside />
    <router-view />
  </div>
</template>

<script>
import Aside from "./components/Aside";
export default {
  components: {
    Aside,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,500;0,700;1,300&display=swap");
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body,
#app {
  display: flex;
  font-family: "Roboto", sans-serif;
}
#app {
  max-width: 1500px;
  margin: 0 auto;
}
.container {
  margin: 0 auto;
}

.btn {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 12px;
  background-color: transparent;
  min-width: 120px;
  border: solid 2px darkslategrey;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s;
}

.btn:hover {
  background-color: rgba(128, 166, 255, 1);
  color: #fff;
  font-weight: 700;
}

.no-resize {
  resize: none;
}
</style>
