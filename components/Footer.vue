<template>
    <nav class="footer__">
       
        <div class="footer__total">
            Total:

            <input type="text" v-model="$store.state.total">
        </div>
       
    </nav>
</template>

<style scoped>
    .footer__{
        background-color: blueviolet;
        height: 50px;
       
        position: fixed;
        display: flex;
        width: 100%;
        bottom: 0;
        justify-content: space-between;
        align-items: center;
        

    }
</style>

