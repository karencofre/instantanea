<script>
	import {Router,Route,Link,link} from "svelte-routing";
	import Profile from "./routes/Profile.svelte";
	import Home from "./routes/Home.svelte";
</script>
<style>
:global(:root){
  --color-brand2:#ED4756;
  --color-blue1:#3898F3;
  --color-blue2:#306197;
  --color-grey:#DBDBDB;
  --color-white:#fff;
  --color-black:#000;
}
:global(body){
  font-family: Avenir Next;
}
nav{
  margin:0 12.5em;
  display: flex;
  justify-content: space-between;
}
.icons{
  margin:0 1em;
  width: 18px;
  height: 18px;
}
#mini-profile{
  width: 24px;
  height: 24px;
}
</style>
<Router>
  <nav>
    <img src="../assets/Instantanea-logo.png" alt="logo instantanea website">
    <input type="search" placeholder="Buscar">
    <div class="icon-container">
      <Link to="/"><img src="../assets/fill-home.png" alt="icono home fill" class="icons"></Link>
      <img src="../assets/messenger.png" alt="icono messenger" class="icons">
      <img src="../assets/outline-heart.png" alt="icono corazon" class="icons">
      <Link to="/profile"><img src="../assets/mini-profile.png" alt="mini profile" class="icons" id="mini-profile"></Link>
    </div>
  </nav>
  <div>
    <Route path="/profile" component="{Profile}" /> <Profile /> </Route>
    <Route path="/"><Home /></Route>
  </div>
</Router>