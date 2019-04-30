<template>
  <footer>
    <div class="footer-info row">
      <div class="brand-info">
        <img src="/img/nepalaya.svg" alt="logo" style="height: 35px;" />
        <div>
          nepa~laya manages music, publishes books and produces independent non-fiction films. Our focus has been to project artists and authors to a
          broader mainstream audience and readers within the country and beyond.
        </div>
      </div>
      <div class="contact-info">
        <h3>Contact</h3>
        <ul>
          <li>162/102 Kalika Marg, Kalikasthan,</li>
          <li>
            <span>Kathmandu,</span>
            <span>Nepal</span>
          </li>
          <li>P.O. Box No. 8975 EPC 1269</li>
          <li>
            Tel:
            <a href="tel:+977014412395"> 977-1-4412395</a>,
            <a href="tel:+977014412469">977-1-4412469</a>
          </li>
          <li>Fax : 977 1 442 0891</li>
          <li>Email : <a href="mailto:balrachana@nepalaya.com.np">balrachana@nepalaya.com.np</a></li>
        </ul>
      </div>
      <div class="social-media">
        <h3>Let's Be Friends</h3>
        <ul>
          <li>
            <a href="https://www.youtube.com/balrachana" target="_blank" rel="noopener noreferrer">
              <img src="/img/social/youtube.svg" alt="YouTube" />YouTube
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/balrachana" target="_blank" rel="noopener noreferrer">
              <img src="/img/social/facebook.svg" alt="Facebook" />Facebook
            </a>
          </li>
          <li>
            <a href="https://twitter.com/balrachana" target="_blank" rel="noopener noreferrer">
              <img src="/img/social/twitter.svg" alt="Twitter" />Twitter
            </a>
          </li>
          <li>
            <a href="https://instagram.com/balrachana" target="_blank" rel="noopener noreferrer">
              <img src="/img/social/instagram.svg" alt="Instagram" />Instagram
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div class="copyright">
      <p>Copyright © 2019 Nepa~laya</p>
    </div>
  </footer>
</template>

<style lang="scss">
footer {
  -webkit-box-shadow: -1px -7px 13px 0px rgb(181, 144, 109);
  -moz-box-shadow: -1px -7px 13px 0px rgb(181, 144, 109);
  box-shadow: -1px -7px 13px 0px rgb(181, 144, 109);
  background: rgb(211, 172, 136);
  background-image: url('/img/bg/1.png');
  background-position: bottom;
  color: #fff;
  padding: 2rem;
  .row > div {
    background: rgba(135, 206, 31, 0.7);
    padding: 1rem;
    border-radius: 1rem;
    color: #6d4016;
    min-width: 300px;
    margin: 0.5rem 0;
  }
  ul {
    list-style: none;
    padding: 0;
  }
  h3 {
    color: #df7626;
    margin-bottom: 1rem;
  }
  .brand-info {
    max-width: 400px;
  }
  .row {
    justify-content: space-evenly;
  }
  .social-media {
    a {
      display: flex;
      margin-bottom: 0.5rem;
    }
    img {
      height: 1.5rem;
      padding-right: 0.5rem;
    }
  }
}

.copyright {
  border-top: 1px solid #df7626;
  margin-top: 1rem;
  padding: 1rem 0 0;
  text-align: center;
  color: #df7626;
}
</style>
