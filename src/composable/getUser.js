import { ref } from 'vue'
import { projectAuth } from '../firebase/config'

const user = ref(projectAuth.currentUser)

projectAuth.onAuthStateChanged(authUser => {
  user.value = authUser
})

const getUser = () => {
  return { user }
}

export default getUser
