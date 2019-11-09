<script>
  export let text = ''
  export let author = ''
  export let title = ''
</script>

<style>
  .container {
    display: flex;
    flex-direction: column;
    width: 420px;
    margin: 30px;
  }

  .text {
    font-size: 14px;
    color: #a1adbd;
  }

  .author {
    font-size: 14px;
    color: #ea5455;
    margin-left: 20px;
    margin-top: 10px;
  }

  .title {
    font-size: 14px;
    color: #ffffff;
    margin-left: 20px;
    margin-top: 5px;
  }
</style>

<div class="container">
  <span class="text">{`"${text}"`}</span>
  <span class="author">{author}</span>
  <span class="title">{title}</span>
</div>
