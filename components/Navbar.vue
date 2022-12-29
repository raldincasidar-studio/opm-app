<script>
import { mapMutations, mapState } from 'vuex';

export default {
    props: ['back', 'title'],
    data() { return {
        sidenav: false,
    }},
    computed: {
        ...mapState('auth', ['auth']),
    },
    methods: {
        ...mapMutations('auth', ['removeAuth']),
        logOut() {
            this.removeAuth();

            this.$swal.fire({
                title: 'Logged Out!',
                toast: true,
                timer: 3000,
                position: 'top',
                icon: 'success',
                timerProgressBar: true,
                showCloseButton: false,
                showConfirmButton: false
            });

            this.$router.replace('/login');
        }
    }
}
</script>

<template lang="pug">
eh
    div.navbar
        a.menu(v-wave v-if="!back" @click="sidenav = true")
            i.material-icons menu
        a.menu(v-wave v-if="back" @click="$router.go(-1)")
            i.material-icons arrow_back
        a.title {{title || 'Opol Public Market'}}
        nuxt-link.menu.right(to="/notifications" v-wave v-if="!back")
            i.material-icons notifications

    Transition(name="fade")
        .backdrop(v-if="sidenav" @click="sidenav = false")
    Transition(name="slide")
        div.sidenav(v-if="sidenav")
            .image
            .content 
                div.stall-icon
                    i.material-icons store
                h6.stall {{auth.stall_no ? 'Stall # '+auth.stall_no : 'No Stall Number'}}
                h6.name {{auth.firstname}} {{auth.lastname}}

                nuxt-link.menu-item.active(to="/dashboard" v-wave)
                    i.material-icons store
                    span Home
                nuxt-link.menu-item(to="/make-a-payment" v-wave v-if="auth.stall_no")
                    i.material-icons payments
                    span Make A Payment
                nuxt-link.menu-item(to="/record-history" v-wave)
                    i.material-icons receipt_long
                    span View Record History
                nuxt-link.menu-item(to="/balance" v-wave v-if="auth.stall_no")
                    i.material-icons account_balance
                    span View Balance
                a.menu-item(@click="logOut" v-wave)
                    i.material-icons logout
                    span Logout
</template>

<style lang="scss" scoped>

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease-in-out;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
  transition: all 300ms cubic-bezier(0.4, 0.0, 0.2, 1) 0s;
}

.slide-enter-active,
.slide-leave-active
{
	transition: transform 0.3s cubic-bezier(0.4, 0.0, 0.2, 1);
}

.slide-enter,
.slide-leave-to {
	transform: translateX(-100%);
	transition: all 300ms cubic-bezier(0.4, 0.0, 0.2, 1) 0s;
}

.navbar {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 5px 10px;
    z-index: 999;
    position: sticky;
    top: 0;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.05);
    background-color: #ddf4ffbd;
    backdrop-filter: blur(6px);

    a.menu {
        // outline: 1px solid red;
        padding: 9px 10px;
        padding-top: 10px;
        border-radius: 50%;

        i.material-icons {
            font-size: 30px;
        }

        
    }

    .title {
        width: 100%;
        padding: 14px;
        font-size: 20px;
        color: #03263F;
    }
}

.backdrop {
    z-index: 99999998;
    background-color: rgba(0, 0, 0, 0.291);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
}
.sidenav {
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0; 
    background-color: #DDF4FF;
    box-shadow: 3px 0 6px rgba(0, 0, 0, 0.078);
    width: 100%;
    max-width: 300px;
    z-index: 99999999;

    .image {
        padding: 130px;
        background: url(@/assets/img/Background.png) no-repeat center bottom;
        background-size: cover;
    }

    .content {
        margin-top: -200px;
        .stall-icon {
            // outline: 1px solid red;
            padding: 20px;
            display: inline-block;
            border-radius: 50%;
            background-color: rgba(0, 0, 0, 0.077);
            margin: 20px;
            i.material-icons {
                font-size: 50px;
                color: #0B63E6;
            }
        }

        .stall {
            margin: 5px 20px;
            font-size: 24px;
            font-weight: bold;
        }

        .name {
            margin: 0 20px;
            font-size: 15px;
            font-weight: normal;
            margin-bottom: 20px;
        }

        .menu-item {
            padding: 10px 20px;
            display: block;
            text-decoration: none;

            i.material-icons {
                font-size: 35px;
                margin-right: 20px;
                color: #0B63E6;
            }

            span {
                font-weight: bold;
            }

            &.active {
                background-color: rgba(0, 0, 0, 0.042);
            }
        }
    }
}
</style>