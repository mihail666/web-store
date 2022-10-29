<template>
  <div class="w-footer-bar">
    <div class="w-footer-bar__container">
      <div class="w-footer-bar__col">
        <div class="w-footer-bar__logo">
          <img class="w-footer-bar__logo_img" src="@/assets/images/icon/4.png" alt="">
          <h1>CarStore</h1>
        </div>
      </div>
      <div class="w-footer-bar__col">
        <ul class="w-footer-bar__list">
          <li class="w-footer-bar__title">For clients</li>
          <li v-for="({ name, path }, i) in footerMenu" :key="i">
            <router-link :to="path">
              <p class="w-footer-bar__link customBtnWhite">
                <span />{{ name }}
              </p>
            </router-link>
          </li>
        </ul>
      </div>
      <div class="w-footer-bar__col">
        <ul class="w-footer-bar__list">
          <li class="w-footer-bar__title">Contact us</li>
          <li>
            <p class="w-footer-bar__p">240 Central Park, Oren OR 54</p>
          </li>
          <li>
            <p class="w-footer-bar__p">FreePhone: +7 999 999 999</p>
            <p class="w-footer-bar__p">Telephone: +7 999 999 999</p>
            <p class="w-footer-bar__p">FAX: 1000-7?</p>
          </li>
          <li><a class="w-footer-bar__link" target="_blank" href="mailto:madoneglhp@gmail.com">
              <p class="customBtnWhite"><span />MAIL: madoneglhp@gmail.com</p>
            </a></li>
          <li><a class="w-footer-bar__link" target="_blank" href="https://github.com/mihail666">
              <p class="customBtnWhite"><span />MyGitHub: github.com/mihail666</p>
            </a></li>
        </ul>
      </div>
      <div class="w-footer-bar__col">
        <div class="w-footer-bar__socials">
          <p class="w-footer-bar__title">feedback</p>
          <a href=""><img class="w-footer-bar__socials_icon" src="@/assets/images/icon/email.png" alt=""></a>
          <a href=""><img class="w-footer-bar__socials_icon" src="@/assets/images/icon/facebook.png" alt=""></a>
          <a href=""><img class="w-footer-bar__socials_icon" src="@/assets/images/icon/instagram-logo.png" alt=""></a>
          <a href=""><img class="w-footer-bar__socials_icon" src="@/assets/images/icon/whatsapp.png" alt=""></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import './w-footer-bar.scss'
import { footerMenuLinks } from '@/const/fo-menu-links'
export default {
  name: 'w-footer-bar',
  components: {},
  data() {
    return {
      footerMenu: footerMenuLinks
    }
  },
  props: {},
  computed: {},
  methods: {},
}
</script>
