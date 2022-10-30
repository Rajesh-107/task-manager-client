import { configureStore } from "@reduxjs/toolkit";
import SettingsReducer from "../slice/Settingslice";
import taskReducer from "../slice/taskSlice";
import summaryReducer from "../slice/SummarySlice";

export default configureStore({
    reducer: {
        settings: SettingsReducer,
        task:taskReducer,
        summary:summaryReducer,
    }
})
