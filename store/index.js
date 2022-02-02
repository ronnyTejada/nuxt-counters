import Swal from 'sweetalert2'


export const strict = false


export const state = () => ({
  contadores: [],
  contadoresCopy: [],
  total: 0,
  numberFilter: 5,
  alfabetico: false,
  numerico: true,
  optionA: '',
  optionB: '',
  colors:['#c62828','#6a1b9a','#e91e63',"#d81b60","#c5cae9","#3949ab","#1e88e5"]
})

export const getters = {
  getCounters(state) {
    

    return state.contadores
  },
}

export const actions = {
  sumar(context, payload) {
    context.commit('SUMAR', payload)
  },
  restar(context, payload) {
    context.commit('RESTAR', payload)
  },
  delete(context, payload) {
    context.commit('DELETE', payload)
  },
  add(context, payload) {
    context.commit('ADD', payload)
  },
  menor_que(context, payload) {
    context.commit('MENOR_QUE', payload)
  },
  mayor_que(context, payload) {
    context.commit('MAYOR_QUE', payload)
  },
  reset_filters(context, payload) {
    context.commit('RESET_FILTERS')
  },
  update_contadores(context, payload) {
    context.commit('UPDATE_CONTADORES', payload)
  },
  update_filter(context, payload) {
    context.commit('UPDATE_FILTER', payload)
  },
}

export const mutations = {
  SUMAR(state, item) {
    if (item.count < 20) {
      item.count++
      state.total += 1
      localStorage.setItem('total', state.total)
      localStorage.setItem('contadores', JSON.stringify(state.contadores))
    }
  },
  RESTAR(state, item) {
    if (item.count > 0) {
      item.count--
      state.total -= 1
      localStorage.setItem('total', state.total)
      localStorage.setItem('contadores', JSON.stringify(state.contadores))
    }
  },
  DELETE(state, item) {
    state.contadores = state.contadores.filter((i) => i.id !== item.id)
    state.total -= item.count
    state.contadoresCopy = state.contadores
    localStorage.setItem('contadores', JSON.stringify(state.contadores))
    localStorage.setItem('total', state.total)
    Swal.fire(
      'Eliminado!',
      `El contador ${item.title} a sido eliminado`,
      'success'
    )
  },
  MENOR_QUE(state, number) {
    // alert('da')
    sessionStorage.setItem('number', number)
    state.contadores = state.contadoresCopy

    state.contadores = state.contadores.filter((i) => i.count <= number)
  },
  MAYOR_QUE(state, number) {
    // alert('da')
    sessionStorage.setItem('number', number)
    state.contadores = state.contadoresCopy
    state.contadores = state.contadores.filter((i) => i.count >= number)
  },
  RESET_FILTERS(state) {
    state.contadores = state.contadoresCopy
    sessionStorage.setItem('number', 0)
  },
  UPDATE_CONTADORES(state, contadores) {
    if (contadores !== null ) {
      console.log(contadores)
      state.contadores = contadores
      
      if(localStorage.getItem('total')===null){
        localStorage.setItem('total',0)
      }
      state.total = parseInt(localStorage.getItem('total'))
      state.contadoresCopy = contadores
    }
  },
  UPDATE_FILTER(state) {
    state.numberFilter = sessionStorage.getItem('number')
  },
  ADD(state, item) {
    let contador = {}
    item.color=state.colors[Math.floor(Math.random() * 7 + 0)]
    state.contadores.push(item)
    localStorage.setItem('contadores', JSON.stringify(state.contadores))
  },
}
