<template>
  <div class="panel">
    <div style="margin-top: -60px">
      <h1 class="text">{{ $t('socials.title') }}</h1>
      <h1 class="text">{{ $t('socials.subtitle') }}</h1>
      <ul style="list-style: none;">
        <li v-for="(item, index) in $site.contact" :key="index"
          style="display: inline; margin: 5px">
          <NavLink :link="item.link">
            <component :is="getIcon(item.type)" size="4x" class="mainIcon"></component>
          </NavLink>
        </li>
      </ul>
      <a class="button nav-link" href="#blog">
        {{ $t('socials.button') }}
      </a>
    </div>
  </div>
</template>

<script>
import { GithubIcon, TwitterIcon, InstagramIcon, MailIcon } from 'vue-feather-icons'

export default {
  name: 'socials',
  methods: {
    getIcon (type) {
      switch (type) {
        case 'github': return GithubIcon
        case 'twitter': return TwitterIcon
        case 'instagram': return InstagramIcon
        case 'mail': return MailIcon
      }
    }
  }
}
</script>

<style scoped lang="stylus">

</style>