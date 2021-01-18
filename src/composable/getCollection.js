import { ref, watchEffect } from 'vue'
import { projectFirestore } from '../firebase/config'

const getCollection = collection => {
  const documents = ref(null)
  const error = ref(null)

  const collectionRef = projectFirestore
    .collection(collection)
    .orderBy('createdAt')

  const unSub = collectionRef.onSnapshot(
    snap => {
      documents.value = []
      snap.docs.forEach(doc => {
        doc.data().createdAt &&
          documents.value.push({ ...doc.data(), id: doc.id })
      })
      error.value = null
    },
    err => {
      error.value = err.message
    }
  )

  watchEffect(onInvalidate => {
    onInvalidate(() => unSub())
  })
  return { error, documents }
}

export default getCollection
