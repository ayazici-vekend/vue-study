new Vue({
    el: '#vue-app',
    data:{
        favFood: ''
    },
    methods:{
        updateFavFood: function(){
            console.log(this.$refs.input.value);
            this.favFood = this.$refs.input.value;
        }
    },
    computed:{
        
    }
});