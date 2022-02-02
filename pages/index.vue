<template>
  <main>
    <Counter />
  </main>
</template>

<script>
import Swal from 'sweetalert2'
import { nanoid } from 'nanoid'

export default {
  mounted() {
    console.log(this.$store.state.contadores)
    if (this.$store.getters['getCounters'].length === 0) {
      let contador={}
      Swal.fire({
        title: 'AGREGAR NUEVO CONTADOR',
        html: `<input type="text" maxLength="20" id="title" class="swal2-input" placeholder="Titulo">`,
        confirmButtonText: 'Agregar',
        showCancelButton: true,

        focusConfirm: false,
        preConfirm: () => {
          const titulo = Swal.getPopup().querySelector('#title').value

          if (!titulo) {
            Swal.showValidationMessage(`Debe agregar un titulo`)
          }
          return { titulo: titulo }
        },
      }).then((result) => {
        contador = { id: nanoid(), title: result.titulo, count: 0 }
        console.log(result)
        this.$store.dispatch('add', {
          id: nanoid(),
          title: result.value.titulo,
          count: 0,
        })

        // localStorage.setItem('contadores', JSON.stringify(state.contadores))
        Swal.fire({
          type: 'success',

          icon: 'success',
          title: 'Se ha agregado el nuevo contador',
          showConfirmButton: false,
          timer: 1500,
        })
      })
      
    }
  },
}
</script>

<style>
html{
  height: 100%;
}
body {
  margin: 0 !important;
  padding: 0 !important;
  min-height: 100%;
  display: flex;
  flex-direction: column;
}


</style>
