<script setup="props">
import { watch } from 'vue'
import {
  NOTIFICATION_TYPE,
  useNotifications
} from '../../modules/notifications'
import AWM from 'awesome-notifications'

const notifierOptions = {
  durations: {
    global: 2000
  }
}
const notifier = new AWM(notifierOptions)

const state = useNotifications()

watch(state, (newVal, oldVal) => {
  // Handle the changes of the notifications here
  switch (newVal.type) {
    case NOTIFICATION_TYPE.success:
      notifier.success(newVal.message, newVal.options)
      break
    case NOTIFICATION_TYPE.general:
      notifier.general(newVal.message, newVal.options)
      break
    case NOTIFICATION_TYPE.info:
      notifier.info(newVal.message, newVal.options)
      break
    case NOTIFICATION_TYPE.warning:
      notifier.warning(newVal.message, newVal.options)
      break
    case NOTIFICATION_TYPE.alert:
      notifier.alert(newVal.message, newVal.options)
      break
  }
})
</script>
