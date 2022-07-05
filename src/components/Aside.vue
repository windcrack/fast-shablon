<template>
  <aside>
    <router-link class="aside-link" to="/">
      <button class="btn btn-shablon">Шаблоны</button>
    </router-link>
    <router-link class="aside-link" to="/add">
      <button class="btn btn-add">Добавить</button>
    </router-link>
    <router-link class="aside-link" to="/req">
      <button class="btn btn-add">Шаблоны для запроса</button>
    </router-link>
  </aside>
</template>

<style>
aside {
  position: fixed;
  inset: 10rem auto auto 1rem;
}

aside .router-link-exact-active {
  background-color: rgba(128, 166, 255, 1);
  color: #fff;
  font-weight: 700;
}
.aside-link {
  text-decoration: none;
  margin: 12px;
}
.aside-link:last-child {
  margin-bottom: 0;
}
</style>