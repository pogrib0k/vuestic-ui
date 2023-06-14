import { useToast } from '../../components/va-toast'

const { init } = useToast()

export function showToast (text:string) {
  init(text)
}
