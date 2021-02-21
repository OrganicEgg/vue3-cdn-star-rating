const app = Vue.createApp({
    data() {
        return {
            rating: 0,
            books: [
                {
                    title: "Powerhouse",
                    author: "Kenya Case",
                    show_author: true,
                    rating: 2
                },
                {
                    title: "The Final Empire",
                    author: "Brandon Sanderson",
                    show_author: true,
                    rating: 4
                },
                {
                    title: "OFF The Grid",
                    author: "Luis Doe",
                    show_author: false,
                    rating: 3.5
                }
            ]
        }
    },
    methods: {
        changeTitle(title) {
            this.title = title
        },
    },
})

app.component('star-rating', VueStarRating.default)
app.mount("#app")