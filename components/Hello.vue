<template>
  <div class="panel">
    <div style="margin-top: -60px">
      <h1 class="text">{{ $t('hello.title') }}</h1>
      <h1 class="text">{{ $t('hello.subtitle') }}</h1>
      <a class="button nav-link" href="#me">
        {{ $t('hello.button') }}
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'hello'
}
</script>

<style>
</style>