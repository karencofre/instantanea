<script>
  import Scroll  from "../components/Scroll.svelte";
  import Feed from "../components/Feed.svelte"
  import Sidebar from "../components/Sidebar.svelte";
  
</script>
<style>
.Home{
  background-color: #fbfbfb;
  display: flex;
  justify-content: space-between;
}
.main-content{
  margin-left: 12.5em ;
}
.profile-content{
  margin-right: 12.5em;
}
@media screen and (max-width:1024px){

}
@media screen and (max-width:768px){

}
@media screen and (max-width:480px){

}
@media screen and (max-width:320px){

}
</style>

<div class="Home"id="Home">
<div class="main-content">
  <Scroll/>
  <Feed/>
</div>
<div class="profile-content">
  <Sidebar/>
</div>
</div>