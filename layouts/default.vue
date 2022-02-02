<template>
    <div style="height:100% !important"> 
            <header>
              <Navbar />
            </header>
            <Nuxt/>
            <footer>
              <Footer />
            </footer>

    </div>
    
</template>
<script>
export default {

  mounted(){
    
  }
  
}
</script>

<style scoped>
html{
  height: 100%;
}
div {
  margin: 0 !important;
  padding: 0 !important;
  min-height: 100%;
  display: flex;
  flex-direction: column;
}
</style>
