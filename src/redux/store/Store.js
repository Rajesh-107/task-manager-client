import { configureStore } from "@reduxjs/toolkit";
import SettingsReducer from "../slice/Settingslice";

export default configureStore({
    reducer: {
        settings: SettingsReducer,
    }
})
