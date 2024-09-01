import { Routes, Route } from "react-router-dom";
import Manager from "../components/Manager";

const RouterApp = () => {
    return (
        <>
            <Routes>
                <Route path="/manager" element={<Manager />} />
            </Routes>
        </>
    )
}

export default RouterApp;