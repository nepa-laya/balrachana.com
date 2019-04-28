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
            <img src="/img/youtube.svg" alt="YouTube" />
            <a href="https://www.youtube.com/balrachana" target="_blank" rel="noopener noreferrer">YouTube</a>
          </li>
          <li>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
              <path
                d="M12 0a12 12 0 1 0 0 24 12 12 0 0 0 0-24zm3 8h-1.35c-.54 0-.65.22-.65.78V10h2l-.2 2H13v7h-3v-7H8v-2h2V7.7c0-1.78.93-2.7 3.03-2.7H15v3z"
              ></path>
            </svg>
            <a href="https://www.facebook.com/balrachana" target="_blank" rel="noopener noreferrer">Facebook</a>
          </li>
          <li>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
              <path
                d="M12 0a12 12 0 1 0 0 24 12 12 0 0 0 0-24zm6.07 9.64A8.12 8.12 0 0 1 9.9 18.2a8.13 8.13 0 0 1-4.4-1.3 5.78 5.78 0 0 0 4.25-1.18 2.88 2.88 0 0 1-2.68-2c.45.09.9.06 1.3-.05a2.88 2.88 0 0 1-2.3-2.85c.38.22.82.35 1.3.36a2.88 2.88 0 0 1-.9-3.83 8.15 8.15 0 0 0 5.92 3 2.88 2.88 0 0 1 4.9-2.62 5.73 5.73 0 0 0 1.82-.7 2.88 2.88 0 0 1-1.26 1.59 5.73 5.73 0 0 0 1.65-.45 5.77 5.77 0 0 1-1.43 1.49z"
              ></path>
            </svg>
            <a href="https://twitter.com/balrachana" target="_blank" rel="noopener noreferrer">Twitter</a>
          </li>
          <li>
            <img src="/img/instagram.svg" alt="Instagram" />
            <a href="https://instagram.com/balrachana" target="_blank" rel="noopener noreferrer">Instagram</a>
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
}

.copyright {
  border-top: 1px solid #df7626;
  margin-top: 1rem;
  padding: 1rem 0 0;
  text-align: center;
  color: #df7626;
}
</style>
