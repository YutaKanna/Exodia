<template>
  <div>
    <header class="header-3">
        <div class="header-inner">
            <div class="logo">
              Exodia
            </div>
            <nav class="header-nav">
                <div class="header-nav-item">
                    <a href="/uploads/choose-good-or-bad" class="header-button header-post">投稿する</a>
                </div>
            </nav>
        </div>
    </header>
    <div class="container">
        <div style="padding-bottom: 140px">
            <div class="links">
                <a
                href="/uploads/good-new"
                class="button--green"
                >
                ドラえもん
                </a>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}




























.header-3 {
  box-sizing: border-box;
  width: 100%;
}

.header-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1024px;
  height: 60px;
  padding: 0 0.8em;
  margin: 0 auto;
  font-size: 1.2em;
}

.header-nav {
  display: flex;
  align-items: center;
}

.header-nav-item {
  display: flex;
  align-items: center;
  margin-left: 16px;
}

.logo img {
  width: 70px;
}

.header-button {
  box-sizing: border-box;
  display: inline-block;
  padding: 0.5em 1.2em;
  font-size: 12px;
  text-decoration: none;
  cursor: pointer;
  user-select: none;
}

.header-login {
  color: #999;
}

.header-post {
  font-weight: bold;
  color: #fff;
  background: #00b5ad;
  border: 1px #00b5ad solid;
  border-radius: 3px;
}

@media screen and (max-width: 480px) {
  .header-post {
    display: none;
  }
}
</style>
