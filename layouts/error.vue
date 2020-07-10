<template>
  <div class="container">
    <h1>Looks, like you did a wrong turn!</h1>
    <a href="/">Take me back!</a>
  </div>
</template>

<script>
export default {
  props: ['error'],
  layout: 'default'
}
</script>