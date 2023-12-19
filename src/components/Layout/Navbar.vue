
import { RouterLink } from 'vue-router';
<template>
  <nav class="navbar is-success" role="navigation" aria-label="main navigation">
    <div class="container is-max-desktop px-2">
      <div class="navbar-brand">
        <div class="navbar-item is-size-4 is-family-monospace">
          Noteballs
        </div>
  
          <a
            ref="navbarBurgerRef"
            class="navbar-burger"
            :class="{ 'is-active': showMobileNav }"
            aria-expanded="false"
            aria-label="menu"
            data-target="navbarBasicExample"
            role="button"
            @click.prevent="showMobileNav = !showMobileNav"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
      </div>
  
      <div
        ref="navbarMenuRef"
        id="navbarBasicExample"
        class="navbar-menu"
        :class="{ 'is-active': showMobileNav }"
      >
        <div class="navbar-end">
          <RouterLink
            to="/"
            class="navbar-item"
            active-class="is-active"
            @click="showMobileNav = false"
          >
            Notes
          </RouterLink>
          <RouterLink
            to="/stats"
            class="navbar-item"
            active-class="is-active"
            @click="showMobileNav = false"
          >
            Stats
          </RouterLink>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
/* imports */
  import { ref } from 'vue'
  import { onClickOutside } from '@vueuse/core'

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
</script>

<style>
@media (max-width: 1023px) {
  .navbar-menu {
    position: absolute;
    left: 0;
    width: 100%;
  }
}
</style>