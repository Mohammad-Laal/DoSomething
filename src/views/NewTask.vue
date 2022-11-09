<template>
  
   <form @submit.prevent="addnewtask" class="form">
   <label >title</label>
   <textarea v-model="title"></textarea> 
   <label > date </label>
   <input type="date" v-model="date">
   <button>Add NewTask</button>
   </form>



</template>

<script>
export default {

  data() {
 
   return {

    title:'',
    date : ''

  }

},

    methods: {

    addnewtask() {
      if (this.title && this.date !=''){
      let project = {
      title : this.title,
      date : this.date,
      done : false

    }

      fetch('http://localhost:3000/projects' , {
      method: 'POST',
      headers:{'content-type' : 'application/json'},
      body : JSON.stringify(project)
     })

      .then(()=>{
       this.$router.push('/TaskList')

     })

    }

  }
}

}


</script>

<style>

form {

background: white;
padding: 20px;
border-radius: 10px;
width: 400px;
margin: 20px auto 0;
}

label {

display: block;
color: #bbb;
text-transform: uppercase;
font-size: 14px;
font-weight: bold;
letter-spacing: 1px;
margin: 20px 0 10px 0;

}

input {

padding: 10px;
border: 0;
border-bottom: 1px solid #ddd;
width: 100%;
box-sizing: border-box;

}

textarea {
   
border: 1px solid #ddd;
padding: 10px;
width: 100%;
height: 100px;
box-sizing: border-box;

}

form button {

display: block;
margin: 20px auto 0;
background: #00ce89;
color: white;
padding: 10px;
border: 0;
border-radius: 6px;
font-size: 16px;

}

</style>