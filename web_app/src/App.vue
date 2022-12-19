<template>
  <nav class="navbar-brand">
    <!--    <router-link to="/">Home</router-link> |-->
    <!--    <router-link to="/about">About</router-link> |-->
    <!--    <router-link to="/algorithm">Algorithm</router-link>-->
    <div class="d-inline">
      <img
        src="./assets/Images/Big-Dipper-logo.png"
        alt="Big-Dipper-logo"
        class="logo"
      />
      <div class="d-inline brand-name">BIG Dipper</div>
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

nav a.router-link-exact-active {
  color: #42b983;
}*/
.logo {
  width: 50px;
  height: 50px;
}
.navbar-brand {
  border: 1px solid black;
}
.brand-name {
  font-size: 2rem;
  margin-left: 1rem;
}
</style>
