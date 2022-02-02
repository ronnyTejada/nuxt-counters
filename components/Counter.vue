<template>
  <article class="counters__">
    <input
      type="text"
      placeholder="buscar contador"
      v-model="search"
      id="buscar"
    />
    <ul class="counters__List" v-if="countersFilter !== null">
      <li
        class="counters__list-item"
        v-for="counter in countersFilter"
        :key="counter.id"
      >
        
          <section class="counter__" :style="`background-color:${counter.color}`">
            <div class="counter__title">{{ counter.title }}</div>
            <div class="counter__buttoms">
              <button @click="restar(counter)">-</button>
              <input type="text" disabled v-model="counter.count" />
              <button @click="sumar(counter)">+</button>
              <button @click="eliminar(counter)">
                <TrashIcon size="1x" class="custom-class" />
              </button>
            </div>
          </section>
    
      </li>
    </ul>
    
  </article>
</template>

<script>
import { TrashIcon } from '@vue-hero-icons/outline'
import Swal from 'sweetalert2'

export default {
  components: {
    TrashIcon,
  },
  data: () => {
    return {
      search: '',
      color:"#000000"
    }
  },
  methods: {
    sumar(item) {
      this.$store.dispatch('sumar', item)
      this.orden
    },
    restar(item) {
      this.$store.dispatch('restar', item)
    },
    eliminar(item) {
      Swal.fire({
        title: 'Estas seguro?',
        text: 'No podras revertir los cambios',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Eliminar',
      }).then((result) => {
        console.log(result.value)
        if (result.value || result.isConfirmed) {
          this.$store.dispatch('delete', item)
        }
      })
    },
  },
  computed: {
    countersFilter() {
      if (this.$store.state.optionA === 'alfabetico') {
        this.$store.getters['getCounters'].sort((a, b) => {
          if (a.title > b.title) {
            return 1
          } else if (a.title < b.title) {
            return -1
          }
          return 0
        })
      } else if (this.$store.state.optionA === 'numerico') {
        this.$store.getters['getCounters'].sort((a, b) => {
          if (a.count < b.count) {
            return 1
          } else if (a.count > b.count) {
            return -1
          }
          return 0
        })
      }

      if (this.$store.state.optionB === 'descendente') {
        return this.$store.getters['getCounters']
          .reverse()
          .filter((i) => i.title.includes(this.search))
      } else {
        return this.$store.getters['getCounters'].filter((i) =>
          i.title.includes(this.search)
        )
      }
    },
  },
  mounted() {
    this.$store.dispatch(
      'update_contadores',
      JSON.parse(localStorage.getItem('contadores'))
    )
  },
}
</script>

<style scoped>
.counters__ {
  width: 100%;

  justify-self: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  justify-items: center;
  align-items: center;
}
ul {
  list-style: none;
  width: 80%;
  height: 450px;
  overflow: auto;
}

.counter__ {
  background-color: rgb(44, 241, 176);
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  margin-bottom: 5px;
  padding-left: 5px;
  padding-right: 5px;
  border-radius: 5px;
}

input {
  width: 50px;
  
}

#buscar {
  width: 200px !important;
  
  height: 25px;
  margin-top: 10px;
}



@media (max-width: 788px) {
  ul {
    width: 100%;
    padding: 0;
  }
}

@media (max-width: 250px) {
  .counter__ {
    flex-direction: column;
  }
}

@media (max-width: 214px) {
  #buscar{
    width: 100% !important;
  }
}
</style>
