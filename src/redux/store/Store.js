import { configureStore } from "@reduxjs/toolkit";
import SettingsReducer from "../slice/Settingslice";
import taskReducer from "../slice/taskSlice";

export default configureStore({
    reducer: {
        settings: SettingsReducer,
        task:taskReducer
    }
})
