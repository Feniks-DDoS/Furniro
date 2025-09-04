import { Route , Routes , Navigate } from "react-router-dom"
import { route } from "@/route/route.js"

const AppRoute = () => {
  return (
    <Routes>
      {route.map(route => 
        <Route path={route.path} element={<route.component/>} key={route.path}/>
      )}
        <Route path="*" element={<Navigate to="/error" replace />} />
    </Routes>
  )
}

export default AppRoute