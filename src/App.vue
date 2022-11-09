<template>
  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link class="text2" :to="{name : 'content'}"> content </router-link>
  </nav> -->

  <nav>

   <router-link class="tag" :to="{name : 'newtask'}"> NewTask </router-link>
   <router-link  :to="{name : 'TaskList'}"> Tasklist </router-link>
   <router-link class="" :to="{name : 'DoneTask'}"> DoneTask </router-link>



  </nav>

  <router-view/>
 

  
</template>

<script>




</script>


<style >

  
 /* #app {
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
} */

nav {

margin: 30px 0px;


}

a {
  font-weight: bold;
  color: #486a92;
  text-decoration: none;
  margin-left: 15px;
  font-size: 17px;




}

a.router-link-exact-active {
  
  padding: 10px 10px;
  background-color:#1a2e44  ;
  
  border-radius: 20px;
  
}

</style> 

