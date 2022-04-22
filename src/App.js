import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom'

import { CreateContainer, Footer, Header, MainContainer } from './componnets';

import { AnimatePresence } from 'framer-motion';


import { getAllFoodItems } from './utils/firebaseFunction';


import { useDispatch } from "react-redux";
import { setFoodItems } from './actions'

function App() {
  const dispatch = useDispatch();

    
  const fetchFoodItems = async () => {
      await getAllFoodItems().then((data) => {
      dispatch(setFoodItems(data));
      });
  };

  useEffect(() => {
      fetchFoodItems();
       // eslint-disable-next-line
  }, []);
    
    return (
        <AnimatePresence exitBeforeEnter>
            <div className="w-screen h-auto flex flex-col bg-primary">
                <Header />
                <main className='mt-14 md:mt-18 px-4 md:px-16 py-4 w-full'>
                    <Routes>
                        <Route path='/*' element={<MainContainer/>}/>
                        <Route path='/createItem' element={<CreateContainer/>}/>
                    </Routes>
                </main>
                <Footer/>
            </div>
        </AnimatePresence>
        
    )
}
export default App;