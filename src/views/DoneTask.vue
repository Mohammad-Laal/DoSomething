<template>
  
<div class="done"  v-for="done in doneproject" :key="done.id">

 <p> {{done.title}} </p>

</div>


</template>

<script>

export default {

mounted(){

    fetch("http://localhost:3000/doneproject")
            .then(res => res.json())
            .then(data => this.doneproject = data)
            .catch(err => console.log(err.message));
             
},


data(){

    return {
        doneproject : []

    }

}


}



</script>


<style>

.done {

width: 500px;
margin: 20px 0px;
background:white;
padding: 10px 20px;
border-radius: 4px;
box-shadow:1px 0.5px 2px  rgba(29, 28, 28, 0.5);

}



</style>