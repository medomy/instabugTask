<template>
<section class="error-page">
    <figure>
        <img src="https://i.ibb.co/vXHPhZb/Screenshot-2022-06-01-014304.png" alt="not found img" />
    </figure>
    <h2>404 - Page Not Found!</h2>
    <p>sorry that page doesn't exist.what would you like to do?</p>

</section>
  
</template>

<script>
export default {
    name : 'NotFound'

}
</script>

<style lang="scss">
.error-page{
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    figure{
        width: 50%;
        padding: 0px;
        margin: 0px;

        img{
            width: 100%;
        }
    }
    h2{
        color: #445065;
    }
    p{
        color: #445065;
    }
}

</style>