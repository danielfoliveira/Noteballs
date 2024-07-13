<template>
  <header class="navbar">
    <div class="container">
      <div class="navbar--brand align-content-left">
        <a classhref="#">
          Noteballs
        </a>
      </div>
      <div class="navbar--logout">
      <button
        v-if="storeAuth.user.id"
        class="button-logout"
        @click="logout"
      >
        logout {{ storeAuth.user.email }}
      </button>
      </div>
      <nav
        v-if="storeAuth.user.id"
        class="align-content-right"
      >
        <RouterLink
          to="/"
          class="navbar--item"
          active-class="is-active"
          @click="showMobileNav = false"
        >
          Notes
        </RouterLink>
        <RouterLink
          to="/stats"
          class="navbar--item"
          active-class="is-active"
          @click="showMobileNav = false"
        >
          Stats
        </RouterLink>
      </nav>
    </div>
  </header>
</template>

<script setup>
/* imports */
  import { ref } from 'vue'
  import { onClickOutside } from '@vueuse/core'
  import { RouterLink } from 'vue-router'
  import { useStoreAuth } from '@/stores/storeAuth'


//store
const storeAuth = useStoreAuth()

/* Mobile Nav */
  const showMobileNav = ref(false)
  const navbarMenuRef = ref(null)
  const navbarBurgerRef = ref(null)

/** Clickoutside */
onClickOutside(navbarMenuRef, () => { 
  showMobileNav.value = false 
}, {
  ignore: [navbarBurgerRef]
})

const logout = () => {
  storeAuth.signOut()
  showMobileNav.value = false 
}
</script>

<style scope>
@import './Navbar.css'; 
</style>