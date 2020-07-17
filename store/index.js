import data from '~/static/api/cursos-data.json'

export const state = () => ({
  cursos: data
})

export const getters = {
  cursos: state => state.cursos,
  curso: state => state.cursos[1],
  umCurso: state => slug => state.cursos.find(e => e.slug === slug)
}
