<template>
  <nav class="navbar__">
    <div class="navbar__filtro-1">
      <select name="Filtrar" id="" v-model="$store.state.optionA">
        <option value="alfabetico">Orden alfabetico</option>
        <option value="numerico">Orden numerico</option>
      </select>
      <select name="Filtrar" id="" v-model="$store.state.optionB">
        <option value="ascendente">Ascendende</option>
        <option value="descendente">Descendente</option>
      </select>
    </div>
    <div class="navbar__filtro-2">
      <button @click="mayor_que">></button>
      <button @click="menor_que"><</button>
      <button @click="reset">
        <RefreshIcon size="1x" class="custom-class" />
      </button>

      <input type="number" v-model="number" />
      <button @click="add" v-if="$store.state.contadores.length < 20">
        New
      </button>
      <button disabled v-if="$store.state.contadores.length >= 20">New</button>
    </div>
  </nav>
</template>

<style scoped>
.navbar__ {
  background-color: blueviolet;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 50px 0 50px;
}

input {
  width: 50px;
}

@media (max-width: 788px) {
  .navbar__ {
    flex-direction: column;
    padding: 0 0 0 0;
  }
}
</style>

<script>
// Only import what you need!
import Swal from 'sweetalert2'
import { nanoid } from 'nanoid'
import { RefreshIcon, TrashIcon } from '@vue-hero-icons/outline'
export default {
  components: {
    RefreshIcon,
  },
  data: () => {
    return {
      number: 0,
    }
  },
  methods: {
    add() {
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
        this.$store.dispatch('add',{ id: nanoid(), title: result.value.titulo, count: 0 })

        // localStorage.setItem('contadores', JSON.stringify(state.contadores))
        Swal.fire({
          type: 'success',

          icon: 'success',
          title: 'Se ha agregado el nuevo contador',
          showConfirmButton: false,
          timer: 1500,
        })
      })
    },
    menor_que() {
      this.$store.dispatch('menor_que', this.number)
    },
    mayor_que() {
      this.$store.dispatch('mayor_que', this.number)
    },
    reset() {
      this.number = 0
      this.$store.dispatch('reset_filters')
    },
  },
  mounted() {
    this.$store.dispatch('update_filter')
    this.number = this.$store.state.numberFilter
  },
}
</script>
