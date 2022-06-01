<template>
    <section class="carousel">
        <ul>
            <li v-for="img in images" class="img-wrapper" :key="img.id" :class="{ active: img.isDisplay }"
                :data-active="img.isDisplay">

                <img :src="img.src" alt="carousel-img" />
                <h3>{{ img.title }}</h3>

            </li>
        </ul>
        <div class="carousel-btns-wrapper">
            <button class="carousel-btns" v-for="img in images" :key="img.id" :class="{ activeBtn: img.isDisplay }"
                @click="changeCarousel(img.id)"></button>
        </div>
    </section>

</template>

<script>

export default {
    name: 'Carousel',
    data() {
        return {
            images: [
                {
                    id: 1,
                    src: "https://svgshare.com/i/hrA.svg",
                    isDisplay: true,
                    title: 'Accelerate Your Entire Mobile Team Workflow'
                },
                {
                    id: 2,
                    src: 'https://svgshare.com/i/hrB.svg',
                    isDisplay: false,
                    title: 'The Most Comprehensive Bug Reporting Tool For Mobile Apps'
                },
                {
                    id: 3,
                    src: 'https://svgshare.com/i/hrV.svg',
                    isDisplay: false,
                    title: 'Secure Crash Reporting With Real-Time Alerts'
                },
            ],
            idCounter: 1,
            
        }
    },
    methods: {
        changeCarousel(id) {
            this.images.forEach((img) => {
                img.isDisplay = img.id === id;
            })
        },
        changeCarouselTime() {
            return setInterval(() => {
                this.idCounter = this.idCounter <= this.images.length ? this.idCounter : 1;
                this.images.forEach((img) => {
                    img.isDisplay = img.id === this.idCounter;
                })
                this.idCounter += 1
            }, 3000)
        }
    },
    mounted(){
        this.changeCarouselTime();
    },
    beforeUnmount(){
        clearInterval(this.changeCarouselTime());
    }

}
</script>

<style lang="scss">
.carousel {
    width: 100%;
    position: relative;
    padding: 0px;
    height: 110vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    ul {
        width: 100%;
        list-style: none;
        padding: 0px;
        margin: 0px;


        li.img-wrapper {
            display: none;
            position: absolute;
            inset: 0;
            width: 100%;
            text-align: center;
            opacity: 0;
            /*transform: translate(-100% , 0%);*/
            transition: all 0.5s 0.5s ease-in-out;

            img {
                width: 75%;
                display: block;
            }

            h3 {
                color: white;
                font-weight: 500;
            }

        }

        li.img-wrapper[data-active='true'] {
            display: flex !important;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            background-color: darkblue;
            opacity: 1 !important;
            /*transform: translate(100% , 0%)!important;*/
        }

        /*.active {
            display: flex !important;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            background-color: blue;
            opacity : 1!important;
            transition: opacity 0.5s 0.5s ease-in-out;
            
        }*/



    }

    .carousel-btns-wrapper {
        display: flex;
        position: absolute;
        align-items: center;
        justify-content: center;
        bottom: 4vh;
        margin-top: 0.5rem;

        button {
            background-color: transparent;
            border: 2px solid white;
            width: 10px;
            height: 10px;
            border-radius: 50%;
            padding: 0;
            margin-left: 0.5rem;
            margin-right: 0.5rem;
            cursor: pointer;
        }

        .activeBtn {
            background-color: white;
        }

        button:active {
            background-color: gray;
        }
    }
}
</style>