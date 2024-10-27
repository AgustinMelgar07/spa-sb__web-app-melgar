import { AppointmentAdapter } from '@/adapters'
import { AppointmentModel } from '@/models'
import { AppError, privateInstance } from '@/helpers'

const collection = '/turns'

export const myAppts = async () => {
  const response = await privateInstance.get(`${collection}/get/my-appts`)
  if (!response || response instanceof AppError) return response as AppError

  const adaptedResponse = AppointmentAdapter.myAppts.output(response.data)
  return adaptedResponse
}

export const getBusy = async (data: AppointmentModel.BusyData) => {
  const adaptedInput = AppointmentAdapter.getBusy.input(data)

  const response = await privateInstance.post(
    `${collection}/get/busy`,
    adaptedInput
  )

  if (!response || response instanceof AppError) return response as AppError

  const adaptedResponse = AppointmentAdapter.getBusy.output(response.data)
  return adaptedResponse
}

export const create = async (data: AppointmentModel.CreateData) => {
  const adaptedInput = AppointmentAdapter.create.input(data)

  const response = await privateInstance.post(collection, adaptedInput)
  if (!response || response instanceof AppError) return response as AppError

  return true
}

export const cancel = async (params: { id: number }) => {
  const { id } = params

  const response = await privateInstance.put(`${collection}/${id}/cancel`)
  if (!response || response instanceof AppError) return response as AppError

  return true
}

export const pay = async (data: AppointmentModel.PayData) => {
  const adaptedInput = AppointmentAdapter.pay.input(data)

  const response = await privateInstance.post('invoices', adaptedInput)
  if (!response || response instanceof AppError) return response as AppError

  return true
}
