<template>
    <section class="login-page">
        <div class="carousel-view">
            <Carousel />
        </div>
        <div class="login-view">
            <Login />
        </div>

    </section>
</template>

<script>
import Carousel from '@/components/carousel/carousel.vue'
import Login from '@/components/login_form/login.vue'
export default {
    name: 'LoginPage',
    components: {
        Carousel,
        Login
    }


}
</script>

<style lang="scss">
.login-page {
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    padding: 0px;

    div {
        width: 50%;

    }
}

/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {
    .login-page {
        justify-content: center;
        align-items: center;

        .carousel-view {
            display: none;
        }
        .login-view{
            width: 70%;
        }

    }

}

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {
    .login-page {
        justify-content: center;
        align-items: center;

        .carousel-view {
            display: none;
        }
        .login-view{
            width: 70%;
        }

    }
}

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {
    .login-page {
        .carousel-view {
        display: block;
    }
    .login-view{
            width: 50%;
        }

    }
    
}
</style>