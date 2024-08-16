
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import { Provider } from "./components/Provider";


function App() {
  return (
    <Provider>

    <div className="text-gray-600">
      <Router>
     
          <Routes>
            {/* <Route index element={} /> */}
            <Route path="/home" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
           

              {/* <Route path="*" element={} /> */}
            </Routes>
        
        
      </Router>
    </div>
    </Provider>
  );
}

export default App;