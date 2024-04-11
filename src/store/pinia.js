import { defineStore } from 'pinia'

export const userStore = defineStore('counter', {
  state: () => ({
    count: 0,
    firstname: 'Margot',
    lastname: 'Foster',
    job: 'Backend Developer',
    email: '',
    about: 'Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim incididunt cillum culpa consequat. Excepteur qui ipsum aliquip consequat sint. Sit id mollit nulla mollit nostrud in ea officia proident. Irure nostrud pariatur mollit ad adipisicing reprehenderit deserunt qui eu.',
  }),
  getters: {
    doubleCount: (state) => state.count * 2,
  },
  actions: {
    saveEmail (email) {
      this.email = email
    },
  },
})