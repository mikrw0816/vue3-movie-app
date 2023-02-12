<template>
  <HeaderMenu />
  <RouterView />
  <FooterMenu />
</template>

<script>
  import HeaderMenu from '~/components/HeaderMenu'
  import FooterMenu from '~/components/Footer';

  export default {
    components: {
      HeaderMenu,
      FooterMenu
    }
  }
</script>