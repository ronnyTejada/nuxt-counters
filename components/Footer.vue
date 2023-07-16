<template>
    <nav class="footer__">
       
        <div class="footer__total">
            Total:

            <input type="text" v-model="$store.state.total">
        </div>
        

        <a href="https://github.com/ronnyTejada/nuxt-counters" target="_blank">codigo</a>
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
        
        
        justify-content: space-between;
        align-items: center;
        
        

    }
</style>

