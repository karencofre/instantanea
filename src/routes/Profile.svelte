<script>
import Profileinfo from "../components/Profileinfo.svelte";
import Publicaciones from "../components/Publicaciones.svelte";
</script>
<style>
  .profile-container{
    margin: 0 200px;
    display: flex;
    flex-direction: column;

  }
@media screen and (max-width:1024px) {}

@media screen and (max-width:768px) {}

@media screen and (max-width:480px) {}

@media screen and (max-width:320px) {}
</style>

<div class="profile-container">
  <Profileinfo/>
  <Publicaciones/>
</div>
