<template>
  <div id="nav">
    <router-link class="link" to="/">Home</router-link>
    <router-link class="link" to="/about">David</router-link>
  </div>
  <router-view/>
</template>

<style lang="scss">

#nav {
  margin: 0px;
  padding: 0px;
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background-color: #283E4A;
  // border: 1px solid red;
}

  .link {
    margin-left: 5px;
    color: white;
  }

  a {
    text-decoration: none;
  }
</style>
