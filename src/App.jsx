import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute/index.jsx';

import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Layout from './components/Layout/index.jsx';

const App = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <ErrorBoundary fallback={<div>Something went wrong...</div>}>
                <BrowserRouter>
                    <Routes>
                        <Route
                            path='/'
                            element={
                                <Layout>
                                    <Home />
                                </Layout>
                            }
                        />
                        <Route path='/signin' element={<SignIn />} />
                        <Route path='/signup' element={<SignUp />} />
                        <Route path='*' element={<div>Page Not Found</div>} />
                    </Routes>
                </BrowserRouter>
            </ErrorBoundary>
        </Suspense>
    );
};

export default App;
