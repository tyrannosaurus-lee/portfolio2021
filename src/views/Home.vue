<template>
  <div class="home">
    <div class="works-con">
      <div class="project-eunhye">
        eunhye
      </div>
      <div class="project-thumb">
        <swiper
          :modules="[Thumbs]"
          :slides-per-view="3"
          :space-between="50"
          navigation
          :pagination="{ clickable: true }"
          :scrollbar="{ draggable: true }"
          @swiper="onSwiper"
          @slideChange="onSlideChange"
        >
          <swiper-slide>Slide 1</swiper-slide>
          <swiper-slide>Slide 2</swiper-slide>
          <swiper-slide>Slide 3</swiper-slide>
          ...
        </swiper>
      </div>
      <div class="project-about">
        <div class="project-index">
          <span class="index-txt">No.</span>
          <span class="index-label">1</span>
        </div>
        <div class="project-tit">Hey News</div>
        <div class="project-date">2021</div>
        <div class="project-shortcut">
          <a href="#">View detail</a>
        </div>
      </div>
    </div>
    <div class="works-pagination-wrapper">
      <div class="works-pagination-con">
        <div class="pagination-bg"></div>
        <div class="project-icon swiper-container">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <span>1</span>
            </div>
            <div class="swiper-slide">
              <span>2</span>
            </div>
            <div class="swiper-slide">
              <span>3</span>
            </div>
            <div class="swiper-slide">
              <span>4</span>
            </div>
            <div class="swiper-slide">
              <span>5</span>
            </div>
            <div class="swiper-slide">
              <span>6</span>
            </div>
            <div class="swiper-slide">
              <span>7</span>
            </div>
            <div class="swiper-slide">
              <span>8</span>
            </div>
          </div>
        </div> -->
      </div>
    </div>
  </div>
</template>
<style>
  .home {position:fixed; top:0; right:0; bottom:0; left:0; width:100%; height:100%;}

  .works-con {
    position:fixed; top:0; right:0; bottom:0; left:0;
    display:flex; align-items:center; justify-content:space-between;
    padding:124px 6vw 219px; width:100%; height:100%; box-sizing:border-box;
  }
  .project-eunhye {width:28vw;}

  /* contents - right */
  .project-thumb {position:relative; width:28vw; height:42vw; max-height:100%; z-index:1; background:bisque;}

  /* contents - right */
  .project-about {width:28vw; text-align:right;}
  .project-index {display:flex; font-size:10px; -webkit-box-pack:end; justify-content:flex-end;}
  .project-tit {
    display:flex; -webkit-box-align: center; align-items: center; justify-content:flex-end; height: 10.2vw; font-size: 3vw; line-height: 1; font-weight:800;
    transform-origin:center right; pointer-events:auto;
  }
  .project-date {font-size:10px; color: #6b6b6b; white-space: nowrap;}
  .project-shortcut {display: inline-block; margin: 30px 0 0; pointer-events: auto;}
  .project-shortcut a {font-sizse:13px; color: #6b6b6b;}

  .works-pagination-wrapper {position:fixed; right:0; bottom:0; left:0; }
  .works-pagination-con {overflow:hidden; position:relative; z-index:1;}
  .pagination-bg {    position: absolute; top:0; right:0; bottom:0; left:0; width:100%; height:100%;
    background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1IDUiPjxwYXRoIGZpbGw9IiNjNmM2YzYiIGQ9Ik0yIDBoMXYxSDJ6Ii8+PC9zdmc+);
    background-position: 50%;
    background-size: 5px 5px;}
  .project-icon.swiper-container {padding:23px 0 22px;}
  .project-icon .swiper-wrapper {display:flex; width:100%; height:140px; box-sizing:content-box;}
  .project-icon .swiper-slide {margin:0 10px;}
  .project-icon .swiper-slide span {display:flex; align-items:center; justify-content:center; width:95px; height:95px; text-align:center;}
</style>
<script>
export default {
  name: 'Home',
}
</script>
