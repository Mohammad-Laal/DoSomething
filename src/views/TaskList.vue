<template>
  
  <div class="desiredtime">
<p>مشاهده تسک ها در تاریخ مشخص شده </p>
<input type="date" v-model="desired">
<button @click="save" class="searchbutton"> جستجو </button>


<div v-if="showtitle"><p>: تسک های شما در این تاریخ به صورت زیراست</p></div>
<div style=" " v-for="t in time" :key="t" class="searchtask">

<p> {{t}} </p>


</div>
</div>

<div v-if="projects.length" >
    
<div class="project"  v-for="project in projects" :key="project.id">
    
    



<p>{{project.title}}  
<div class="icon" >
<span class="material-icons" style="cursor: pointer;" @click="deletefunction(project.id)"> delete </span>
<span class="material-icons" style="cursor: pointer; margin-left: 15px;" @click="donefunction(project.id , project.done , project.title , project.date)">done </span>
</div>

</p>

</div>



</div>







</template>

<script>



export default {
  
    mounted() {
        fetch("http://localhost:3000/projects")
            .then(res => res.json())
            .then(data => this.projects = data)
            .catch(err => console.log(err.message));

           
    },
    data() {
        return {

            projects : [],
            desired : '',
            time : [], 
            showtitle :false

        }
    },
    methods: {
        deletefunction(id) {
            fetch("http://localhost:3000/projects/" + id, { method: "DELETE" })
                .then(() => this.delete1(id))
                .catch(err => console.log(err.message));
        },
        delete1(id) {
            this.projects = this.projects.filter(item => {
                return item.id !== id;
            });
        },
        donefunction(id1, done1 , title1 , date1) {

            let doneproject1 = {
            
            done : done1,
            title : title1,
            date : date1
    }

           fetch('http://localhost:3000/doneproject'  , {
           method: 'POST',
           headers:{'Content-Type' : 'application/json'},
           body : JSON.stringify(doneproject1)
           
         })

         .then(()=>{
           this.$router.push('/donetask')
           })

          fetch("http://localhost:3000/projects/" + id1, { method: "DELETE" })
                .then(() => this.delete1(id1))
                .catch(err => console.log(err.message));
        },

        save() {
       
       this.time = []  
       if(this.desired!=''){
       for (let i = 0 ; i<this.projects.length ; i++) {
           if (this.desired === this.projects[i].date)
           this.time.push(this.projects[i].title)

     }

     if(this.time!='') {

      this.showtitle = true

     }

     else {

     alert("شما در این تاریخ تسکی ایجاد نکرده اید")

     }

    }
    }
        
      
    }
   
}
</script>

<style>

.project {
width: 500px;
margin: 20px 0px;
background:white;
padding: 10px 20px;
border-radius: 4px;
box-shadow:1px 0.5px 2px  rgba(29, 28, 28, 0.5);

}

.desiredtime input {
    width: 200px;
    border: 1px solid rgb(69, 68, 68);

}

.desiredtime {

display:inline-block;
text-align: center;
width: 500px;
position: absolute;
left: 900px;
top: 20px;
}

.icon {

float: right;


}

.searchbutton {
width: 50px;
display: block;
margin: 20px auto 0;
background: #00ce89;
color: white;
padding: 10px 5px;
border: 0;
border-radius: 6px;
font-size: 16px;
text-align: center;
cursor: pointer;

}

.searchtask {

width: 500px;
margin: 20px 0px;
background:white;
padding: 10px 20px;
border-radius: 4px;
box-shadow:1px 0.5px 2px  rgba(29, 28, 28, 0.5);


}

</style>