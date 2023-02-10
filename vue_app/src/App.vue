<template>
  <nav class="navbar-brand">
    <!--    <index-link to="/">Home</index-link> |-->
    <!--    <index-link to="/about">About</index-link> |-->
    <!--    <index-link to="/algorithm">Algorithm</index-link>-->
    <div class="outer-box__logo">
      <img
        src="./assets/Images/Big-Dipper-logo.png"
        alt="Big-Dipper-logo"
        class="logo"
      />
    </div>
  </nav>
  <router-view />
</template>

<style>
/*#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.index-link-exact-active {
  color: #42b983;
}*/
.outer-box__logo {
  display: flex;
}
.logo {
  margin: 0 auto;
  margin-bottom: 1em;
  width: 80px;
  height: 80px;
}
.navbar-brand {
}
</style>
