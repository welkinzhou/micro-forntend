<template>
  <div class="home">
    <div class="masonry">
      <div class="item">
        <img src="https://picsum.photos/360/460?random=1">
      </div>
       <div class="item">
        <img src="https://picsum.photos/360/460?random=1">
      </div>
       <div class="item">
        <img src="https://picsum.photos/360/460?random=1">
      </div>
       <div class="item">
        <img src="https://picsum.photos/360/460?random=1">
      </div>
       <div class="item">
        <img src="https://picsum.photos/360/460?random=1">
      </div>
       <div class="item">
        <img src="https://picsum.photos/360/460?random=1">
      </div>
       <div class="item">
        <img src="https://picsum.photos/360/460?random=1">
      </div>
       <div class="item">
        <img src="https://picsum.photos/360/460?random=1">
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'HomeView',
}
</script>
<style scoped>
.masonry {
  column-count: 4;
  column-gap: 0;
}
.item {
  padding: 2px;
}
.item img {
  display: block;
  width: 100%;
  height: auto;
}
</style>