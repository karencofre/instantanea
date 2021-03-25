<script>
import App from "../App.svelte";
</script>
<style>
.Feed {
  margin-right: 1.5em;
  margin-top: 23px;
}

.posts-container {
  background-color: #fff;
  border: 2px solid #f4f4f4;
  margin-bottom: 24px;
  max-width: 636px;
}

.header-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
}

.header-container img {
  width: 18px;
  height: 24px;
}

.user {
  display: flex;
  align-items: center;
}

.user-image,
.user img {
  width: 32px;
  height: 32px;
  margin-right: 8px;
  border-radius: 50%;
}

.rectangle {
  display: flex;
  flex-direction: column;
  padding: 16px;
}

.add-comment-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.add-comment {
  display: flex;
  align-items: center;
}

h5 {
  opacity: 0.5;
}

.post-icons {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.left-icons .icon{
  align-self: center;

  /* margin-right: 16px; */
  padding-right: 16px;
}




@media screen and (max-width:1024px) {}

@media screen and (max-width:768px) {}

@media screen and (max-width:480px) {}

@media screen and (max-width:320px) {}
</style>

<div class="Feed">
    <div class="posts-container">
        <div class="post">
            <div class="header-container">
                <div class="user">
                    <img src="../assets/mini-profile.jpg" alt="user">
                    <h5>
                        joaquin
                    </h5>
                </div>
                <img src="../assets/more.svg" alt="more icon">
            </div>
        </div>
        <img src="../assets/image-post-1.png" alt="image post">
        <div class="rectangle">
            <div class="post-icons">
                <div class="left-icons">
                    <img src="../assets/fill-heart.svg" alt="heart icon" class="icon">
                    <img src="../assets/outline-search.svg" alt="icon search" class="icon">
                    <img src="../assets/direct-outline.svg" alt="direct icon" class="icon">
                </div>
                <img src="../assets/outline-bookmark.svg" alt="bookmark"  class="icon">
            </div>
            <div class="comment-section">
                
                <p> <bold>Nestor</bold> Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                <div class="info-comment"></div>
            </div>
            <div class="add-comment-container">
                <div class="add-comment">
                    <img src="../assets/mini-profile.jpg" alt="user"class="user-image">
                    <h5>

                        Agrega un comentario...
                    </h5>
                </div>
                <a href="/">Publicar</a>
            </div>
        </div>
    </div>
    <!-- post 2 -->
    <div class="posts-container">
        <div class="post">
            <div class="header-container">
                <div class="user">
                    <img src="../assets/mini-profile.jpg" alt="user">
                    <h5>
                        joaquin
                    </h5>
                </div>
                <img src="../assets/more.svg" alt="more icon">
            </div>
        </div>
        <img src="../assets/image-post-2.png" alt="image post">
        <div class="rectangle">
            <div class="post-icons">
                <div class="left-icons">
                    <img src="../assets/fill-heart.svg" alt="heart icon" class="icon">
                    <img src="../assets/outline-search.svg" alt="icon search" class="icon">
                    <img src="../assets/direct-outline.svg" alt="direct icon" clas="icon">
                </div>
                <img src="../assets/outline-bookmark.svg" alt="bookmark" class="icon">
            </div>
            <div class="comment-section">
              <p> <bold>Juana</bold> Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                <div class="info-comment"></div>
            </div>
            <div class="add-comment-container">
                <div class="add-comment">
                    <img src="../assets/mini-profile.jpg" alt="user"class="user-image">
                    <h5>
                        Agrega un comentario...
                    </h5>
                </div>
                <a href="/">Publicar</a>
            </div>
        </div>
    </div>
    <!-- post 3 -->
</div>
