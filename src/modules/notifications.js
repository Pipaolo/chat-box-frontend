import { reactive } from 'vue'

export const NOTIFICATION_TYPE = Object.freeze({
  success: 1,
  general: 2,
  tip: 3,
  info: 4,
  warning: 5,
  alert: 6
})

const state = reactive({
  type: '',
  message: '',
  options: {}
})

/**
 *
 * This will show a notification based on type
 * ['success', 'error','ok','tip']
 *
 * @param {string} type
 * @param {string} message
 * @param {Object} options
 */
export const showNotification = (type, message, options = {}) => {
  state.type = type
  state.message = message
  state.options = options
}

export const useNotifications = () => state
