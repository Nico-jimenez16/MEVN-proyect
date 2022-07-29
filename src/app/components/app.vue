<template>
    <div>
        <nav class="w-full flex justify-start items-center h-16 bg-black text-white">
            <a class="text-xl ml-4" href="/">MEVN Stack</a>
        </nav>
        <section class="w-full block lg:flex m-0 justify-center text-black p-12">
            <div class="w-full lg:w-1/2 flex justify-center">
                <div class="w-2/3 mt-4">
                    <form @submit.prevent="addTask">
                        <h1 class="font-bold text-xl border-b-2 mb-4">Tasks</h1>
                        <div class="mt-2">
                            <label>Title</label>
                            <input class="w-full border-2 rounded-xl pl-2 h-12" type="text" placeholder="Insert A Tasks" v-model="task.title">
                        </div>
                        <div class="mt-2">
                            <label>Description</label>
                            <textarea class="w-full border-2 rounded-xl pl-2 pt-2 h-32" type="text" placeholder="Insert A Description" v-model="task.description"></textarea>
                        </div>
                        <div class="mt-8">
                            <button class="w-full bg-cyan-600 p-2 text-xl text-white rounded-xl">Save</button>
                        </div>
                    </form>
                </div>
            </div>
            <div class="w-full lg:w-1/2 flex flex-col">
                <div class="w-full mt-4">
                    <h1 class="font-bold text-xl border-b-2 mb-4">Saved Tasks</h1>
                </div>
                <div class="flex w-full mt-4 border-b-2 mb-2" v-for="(task , i) of tasks" :key="i">
                    <div class="w-1/2 flex justify-start items-center text-black text-xl">
                        <p>{{ task.title }}</p>
                    </div>
                    <div class="w-1/2 flex justify-start items-center text-black text-md">
                        <p>{{ task.description }}</p>
                    </div>
                </div>
            </div>
        </section>
        <footer class="w-full block md:flex justify-center items-center h-40 text-black border-t-2">
            <div class="w-full md:w-1/2 pt-4 flex flex-col md:border-b-2 items-center">
                <h3 class="text-xl font-bold">Contacto</h3>
                <div class="flex flex-col p-2">
                <div class="flex justify-start items-center mt-1">
                    <img class="w-6 mr-2" src="https://cdn-icons-png.flaticon.com/512/5968/5968534.png" alt="mail">
                    <a href="mailto:jimeneznicolas520@gmail.com" target="_blank" >{{ mail }}</a>
                </div>
                <div class="flex justify-start items-center mt-1">
                    <img class="w-6 mr-2" src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="">
                    <a href="https://www.linkedin.com/in/jimenez-nicolas/" target="_blank" >{{ linkedin }}</a>
                </div>
                <div class="flex justify-start items-center mt-1">
                    <img class="w-6 mr-2" src="https://cdn-icons-png.flaticon.com/512/455/455907.png" alt="">
                    <a href="tel:3856494394" >{{ tel }}</a>
                </div>
                </div>
            </div>
            <div class="w-full flex flex-col justify-center items-center mt-4 md:mt-0 md:w-1/2">
                <h3 class="text-xl font-bold">Project MEVN</h3>
                <h3 class="text-3xl font-bold">Angel Nicolas Jimenez</h3>
            </div>
        </footer>
    </div>
</template>


<script>

export default {
    name: '#app',
    data() {
        return {
            task: {
                title: '',
                description: ''
            },
            tasks: [],
            mail: 'jimeneznicolas520@gmail.com',
            linkedin: 'linkedin.com/in/jimenez-nicolas/',
            tel: '3856494394'
        }
    },
    created(){
        this.getTask()
    },
    methods:{
        addTask(){
            fetch('/api/tasks', {
                method: 'POST',
                body: JSON.stringify(this.task),
                headers: {
                    'Accept' : 'application/json',
                    'Content-type' : 'application/json'
                }
            })
            .then(res => res.json())
            .then(data => console.log(data))
            .catch(err => console.error(err))
            this.task.title = ''
            this.task.description = ''
        },
        getTask(){
            fetch('/api/tasks')
            .then(res => res.json())
            .then(data => {
                this.tasks = data
            })
        }
    }
}
</script>



<style>


</style>