import { BrowserRouter,Route ,Routes } from 'react-router-dom'
import SignInPage from './pages/SignInPage'
import SignUpPage from './pages/SignUpPage'
import NewChatPage from './pages/NewChatPage'
import './index.css'
import JudgementPage from './pages/JudgementPage'
import StatusesPage from './pages/StatusesPage'
import DraftsPage from './pages/DraftsPage'
import ChatPage from './pages/ChatPage'
import NoPage from './pages/404'
import ForgetPasswordPage from './pages/ForgetPasswordPage'
import ChangePasswordPage from './pages/ChangePasswordPage'

export default function App() {
  interface PrivateRouterProps{
    element: React.ReactElement
  }
   const PrivateRouter = ({element}: PrivateRouterProps)=>{
        // const accessToken = localStorage.getItem('accessToken');
        // return accessToken? element : <Navigate to='/signin'/> 
        return element 
   }
  
  return (
    <BrowserRouter>
    <Routes>
      <Route path="*" element={<PrivateRouter element={<NoPage/>} />} />
      <Route path="/" element={<PrivateRouter element={<NewChatPage/>} />} />
      <Route path="/chat/:id" element={<PrivateRouter element={<ChatPage/>} />} />
      <Route path="/judgement" element={<PrivateRouter element={<JudgementPage/>} />} />
      <Route path="/statuses" element={<PrivateRouter element={<StatusesPage/>} />} />
      <Route path="/drafts" element={<PrivateRouter element={<DraftsPage/>} />} />
      <Route path='/forgetpassword' element={<ForgetPasswordPage/>}/>
      <Route path='/changepassword' element={<ChangePasswordPage/>}/>
      <Route path='/signin' element={<SignInPage/>}/>
      <Route path='/signup' element={<SignUpPage/>}/>
    </Routes>
    </BrowserRouter>
   

  )
}
