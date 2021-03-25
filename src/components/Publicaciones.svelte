<script>

import App from "../App.svelte";

</script>
<style>
  .publicaciones {
  margin-top: 32px;
}
h6{
  margin-block-start: 17px;
}
.options{
  display: flex;
  justify-content: space-between;
}
.grid-container{
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 22px;
  margin-bottom: 16px;
  justify-content: center;
}
.grid-container img{
  width: 293px;
  height: 293px;
}
@media screen and (max-width:1024px) {}

@media screen and (max-width:768px) {}

@media screen and (max-width:480px) {}

@media screen and (max-width:320px) {}
</style>

<div class="publicaciones">
  <hr>
  <div class="options">
    <h6>PUBLICACIONES</h6>
    <h6>REELS</h6>
    <h6>IGTV</h6>
    <h6>GUARDADO</h6>
    <h6>ETIQUETADAS</h6>
  </div>
  <div class="grid-container">
    <img src="../assets/img-one.png" alt="">
    <img src="../assets/img-two.png" alt="">
    <img src="../assets/img-three.png" alt="">
    <img src="../assets/img-four.png" alt="">
    <img src="../assets/img-five.png" alt="">
    <img src="../assets/img-six.png" alt="">
    <img src="../assets/img-seven.png" alt="">
    <img src="../assets/img-eight.png" alt="">
    <img src="../assets/img-nine.png" alt="">
  </div>
</div>
