
import React from "react";
import { Route, Routes } from "react-router-dom";
import App from "../App";
import { ContentService } from "../services/content.service";

const menuContent = ContentService.getMenuContent();
let RoutesTree = () => { }

menuContent.then((menu) => {
    const RoutesTree1 = () => {
        return (
            <Routes>
                {
                    menu.items.map(item => {
                        return <Route key={item.url} path={'/' + item.url} element={<App />} />;
                    })
                }
            </Routes>
        );
    };

    RoutesTree = RoutesTree1;
    
});


export default RoutesTree;


