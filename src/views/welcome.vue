<template>
  <section class="welcome">
    <div>
      <figure>
        <img alt="avatar" src="https://www.w3schools.com/howto/img_avatar.png" />
      </figure>
    </div>
    <h4>Welcome back , {{ name }}</h4>
  </section>
</template>

<script>
export default {
  name: 'Welcome',
  // beforeMount(){
  //     if(!this.$store.state.user){
  //         this.$router.replace({path : ''})
  //     }
  // }
  data() {
    return {
      name: ""
    }
  },
  mounted() {
    this.name = this.$store.state.user.email.split("@")[0]
  }

}
</script>

<style lang="scss">
.welcome {
  width: 100;

  div {
    display: flex;
    justify-content: center;
    position: relative;
    width: 100%;
    height: 15vh;
    background-color: darkblue;

    figure {
      padding: 0px;
      width: 100px;
      height: 100px;
      border-radius: 50%;
      position: absolute;
      bottom: -50px;
      

      img {
        width: 100px;
        height: 100px;
        border-radius: 50%;
        border: 2px solid black;
      }
    }
  }

  h4 {
    color: #a6a6a6;
    text-align: center;
    margin-top: 5rem;
  }
}
</style>