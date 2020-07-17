<template>
  <div class="panel">
    <div style="margin-top: -60px">
      <h1 class="text">{{ $t('apps.title') }}</h1>
      <h3 class="text">{{ $t('apps.subtitle') }}</h3>
      <a class="external" href="https://apps.yannickspoerl.de" target="_blank">
        <h1 class="text">👉 apps.yannickspoerl.de</h1>
      </a>
      <a class="button nav-link" href="#resume">
        {{ $t('apps.button') }}
      </a>
    </div>
  </div>
</template>

<script>
export default {
    name: 'apps'
}
</script>

<style>
.external {
  text-decoration-line: none;
}
</style>