import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { publicRoutes } from './routes';

function App() {
    return (
        <div>
            <Router>
                <div className="App">
                    <Routes>
                        {publicRoutes.map((route, index) => {
                            const Page = route.component;
                            return <Route key={index} path={route.path} element={<Page />} />;
                        })}
                    </Routes>
                </div>
            </Router>
        </div>
    );
}

export default App;
