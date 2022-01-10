import React from 'react'
import Header from './Header'
import {MyRoutes} from './Routes'
import {HashRouter} from "react-router-dom";

function HW5() {
    return (
        <div>
            <HashRouter>

                <Header/>
                <MyRoutes/>

            </HashRouter>
        </div>
    )
}

export default HW5

