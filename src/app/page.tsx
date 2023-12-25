import Image from 'next/image'
import { ToastContainer } from 'react-toastify'
import { RecoilRoot } from 'recoil'

export default function Home() {
  return (
<RecoilRoot>
  <ToastContainer />
  <Home />
  {/* <ModalManager /> */}
  
</RecoilRoot>
  )
}
