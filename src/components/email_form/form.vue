<template>
    <form class="email-form" @submit.prevent="logIn">
        <div class="wrong-emai-password" v-if="isEmailOrPasswordWrong">
            <p>Your email and/or your password are
                incorrect</p>
        </div>
        <div class="form-control">
            <label for="email">Work Email :</label>
            <input type="text" placeholder="Your@company.com" id="email" v-model="email" @blur="v$.email.$touch"
                :class="{ 'err-inp': v$.email.$error }" />
            <p class="err-txt" v-if="v$.email.$error">Enter a valid email</p>
        </div>
        <div class="form-control">
            <div>
                <label for="password">password :</label>
                <a href="#">forgot password?</a>
            </div>
            <input type="password" placeholder="6+Characters" id="password" v-model="password"
                @blur="v$.password.$touch" :class="{ 'err-inp': v$.password.$error }" />
            <p class="err-txt" v-if="v$.password.$errors.find((err) => err.$validator === 'passwordMatchValidation')">
                password must
                contain at least one uppercase and one number</p>
            <p class="err-txt" v-if="v$.password.$errors.find((err) => err.$validator === 'minLength')">
                password must be 6 charachters or more</p>
            <p class="err-txt" v-if="v$.password.$errors.find((err) => err.$validator === 'checkEmailExistence')">
                password must not
                contain the email address in it</p>
        </div>
        <div class="form-control">
            <button type="submit" :disabled="v$.$invalid" :class="{ activebtn: !v$.$invalid }">Log in</button>
        </div>
        <div class="options">
            <span>Don't have an account?<a href="#">Sign Up</a></span>
            <a href="#">Login via SSO</a>
        </div>
    </form>
</template>

<script>
import useVuelidate from '@vuelidate/core'
import { minLength, email } from '@vuelidate/validators'
import { passwordMatchValidation, passwordNotContainingEmail } from '@/utils/passwordValidator'
import { LogIn } from '@/services/loginServ'
import authStatus from '@/utils/authenticationStatus'
import actionTypes from '@/store/actionTypes'
import store from '@/store'
export default {
    name: 'Form',
    setup() {
        return { v$: useVuelidate() }
    },
    data() {
        return {
            email: '',
            password: '',
            isEmailOrPasswordWrong: false
        }
    },
    validations() {
        return {
            email: { email },
            password: {
                passwordMatchValidation,
                checkEmailExistence: passwordNotContainingEmail(this.email),
                minLength: minLength(6)
            }
        }
    },
    methods: {
        logIn() {
            console.log(this.v$.password.$errors)
            const status = LogIn({ email: this.email, password: this.password });
            if (status === authStatus.confirmed) {
                store.dispatch(actionTypes.setUser , { email: this.email, password: this.password })
                this.$router.push('/welcome')
            }
            else if (status === authStatus.pending) {
                this.isEmailOrPasswordWrong = true
            }
            else {
                this.isEmailOrPasswordWrong = true
            }

        }
    }


}
</script>

<style lang="scss">
.email-form {
    width: 100%;

    .wrong-emai-password {
        margin-top: 0.5rem;
        margin-bottom: 0.5rem;
        width: 100%;
        padding: 6px;
        border: 1px solid rgba(68, 80, 101, 0.5);
        background-color: pink;
        border-radius: 3px;

        p{
            padding: 0px;
            margin: 0px;
        }
    }

    .form-control {
        margin-top: 0.5rem;
        margin-bottom: 0.5rem;
        width: 100%;

        p.err-txt {
            color: rgba(255, 0, 0)
        }

        div {
            display: flex;
            justify-content: space-between;
            width: 100%;

            a {
                text-decoration: none;
                color: #a6a6a6;
            }

            a:hover {
                color: #0089e5;
            }

        }

        button {
            width: 100%;
            border: transparent;
            border-radius: 5px;
            background-color: #a6a6a6;
            cursor: not-allowed;
            height: 2.5rem;
            color: white;
            font-weight: 600;
        }

        .activebtn {
            cursor: pointer;
        }

        input {
            width: 100%;
            height: 2rem;
            padding: 6px;
            border: 1px solid rgba(68, 80, 101, 0.5);
            border-radius: 3px;

        }

        .err-inp {
            border: 1px solid red;
            background-color: pink !important;
            
        }

        label {
            color: #445065;
        }
    }

    .options {
        display: flex;
        width: 100%;
        justify-content: space-between;

        a {
            text-decoration: none;
            color: #0089e5;
        }
    }
}
</style>