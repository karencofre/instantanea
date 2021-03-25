<script>
import App from "../App.svelte";
</script>

<style>
.Sidebar {
  margin-top: 3em;
  width: 19.125em;
  height: 32.9375em;
}

.profile {
  display: flex;
  justify-content: space-between;
  margin-bottom: 24px;
}

.profile-info {
  display: flex;
  align-items: center;
}

.profile-info img {
  width: 64px;
  height: 64px;
  border: 3px solid #fff;
  border-radius: 90px;
  box-sizing: border-box;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.08));

}

#username {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 0 8px;
}

h5 {
  font-style: normal;
  font-size: 14px;
  line-height: 19px;
  font-weight: 600;
  color: #000;
  opacity: 0.5;
}

ul {
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  padding-inline-start: 0;
}

ul li {
  margin-left: 0;
  margin-right: 8px;
}

.bottom {
  color: rgba(0, 0, 0, 0.2);
}

@media screen and (max-width:1024px) {}

@media screen and (max-width:768px) {}

@media screen and (max-width:480px) {}

@media screen and (max-width:320px) {}
</style>

<aside class="Sidebar">
    <div class="profile">
        <div class="profile-info">
            <img src="../assets/mini-profile.jpg" alt="foto profile">
            <p id="username">
                <a href="/">Joaquin</a>
                joaquin.perez
            </p>
        </div>
        <p>
            <a href="/">
                Cambiar
            </a>
        </p>
    </div>
    <div class="follow">
        <h5>Sugerencia para ti</h5>
        <!-- profile 1 -->
        <div class="profile">
            <div class="profile-info">
                <img src="../assets/profile1.jpg" alt="foto profile">
                <p id="username">
                    <a href="/">victorcoral</a>
                    Sugerencia para ti
                </p>
            </div>
            <p>
                <a href="/">
                    Seguir
                </a>
            </p>
        </div>
        <!-- /profile1 -->
        <!-- profile2 -->
        <div class="profile">
            <div class="profile-info">
                <img src="../assets/profile2.jpg" alt="foto profile">
                <p id="username">
                    <a href="/">evanodal</a>
                    Sugerencia para ti
                </p>
            </div>
            <p>
                <a href="/">
                    Seguir
                </a>
            </p>
        </div>
        <!-- profile 3 -->
        <div class="profile">
            <div class="profile-info">
                <img src="../assets/profile3.jpg" alt="foto profile">
                <p id="username">
                    <a href="/">mohammedev</a>
                    Sugerencia para ti
                </p>
            </div>
            <p>
                <a href="/">
                    Seguir
                </a>
            </p>
        </div>
        <!-- end -->
        <ul class="bottom">
            <li>Informacion *</li>
            <li>Ayuda *</li>
            <li>Prensa *</li>
            <li>API *</li><br>
            <li>Privacidad *</li>
            <li>Condiciones *</li>
            <li>Ubicaciones *</li><br>
            <li>Cuentas destacadas *</li>
            <li>Hashtags *</li>
            <li>Idioma *</li>
        </ul>
    </div>
    <p class="bottom">

        &copy; 2020 INSTAGRAM FROM FACEBOOK
    </p>
</aside>
