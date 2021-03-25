<script>
import App from "../App.svelte";
</script>
<style>
.profile-info {
  margin-top: 32px;
  display: flex;
  align-items: center;
}

.profile-info img {
  width: 166px;
  height: 166px;

  margin-right: 8px;
  border-radius: 50%;
}

.text {
  margin: 0 32px;
  width: 431px;
}

.header-text {
  margin-top: 26px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.profile-info .text .header-text button {
  border-radius: 4px;
  border: 1px solid #8a8a8a;
  width: 145px;
  height: 38px;
  cursor: pointer;
}

.statistics {
  display: flex;
  justify-content: space-between;
}

bold {
  font-weight: bold;
}

@media screen and (max-width:1024px) {}

@media screen and (max-width:768px) {}

@media screen and (max-width:480px) {}

@media screen and (max-width:320px) {}
</style>

<div class="profile-info">
    <img src="../assets/mini-profile.jpg" alt="">
    <div class="text">
        <div class="header-text">
            <h3>Joaquin</h3>
            <button>Enviar mensaje</button>
        </div>
        <div class="statistics">
            <p><bold>141</bold> publicaciones</p>
            <p><bold>2,768</bold> seguidores</p>
            <p><bold>710</bold> seguidos</p>
        </div>
        <p>🗺 Disfruta de los mejores paisajes del mundo</p>
    </div>
</div>
