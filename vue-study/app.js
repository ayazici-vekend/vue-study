new Vue({
    el: '#vue-app',
    data: {
        name: '',
        job: 'Ninja',
        age: 20,
        website: 'https://www.google.com',
        websiteTag: '<a href="https://www.google.com">Google.com</a>',
        x: 0,
        y: 0,
        a: 0,
        b: 0,
        available: false,
        nearby: false,
        error: false,
        success: false
    },
    methods: {
        greet: function(time) {
            return 'Good ' + time + ' ' + this.name;
        },

        addYear: function(inc) {
            this.age += inc;
        },

        subtractYear: function(dec) {
            this.age -= dec;
        },
        
        updateXY: function(event) {
            console.log(event);
            this.x = event.offsetX;
            this.y = event.offsetY;
        },

        click: function(){
            alert('Prevented from going to google');
        },

        logName: function(){
            console.log('you entered your name');
        },
        logAge: function(){
            console.log('you entered your age');
        }
    },

    computed: {
        addToA: function(){
            return this.a + this.age;
        },

        addToB: function(){
            return this.b + this.age;
        },
        compClasses: function(){
            return {
                available: this.available,
                nearby: this.nearby
            };
        }
    }
});