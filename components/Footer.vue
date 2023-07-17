<template>
    <nav class="footer__">
       
        <div class="footer__total">
            Total:

            <input type="text" v-model="$store.state.total">
        </div>
        

        <a href="https://github.com/ronnyTejada/nuxt-counters" class="link"  target="_blank" rel=“noreferrer”>código</a>
    </nav>
</template>

<style scoped>
    .footer__{
        background-color: blueviolet;
        height: 50px;
       
        position: fixed;
        bottom: 0;
        display: flex;
        width: 100%;
        align-items: center;
        
        

    }

    .link{
        margin: 0 auto;
        color: white;
    }
</style>

