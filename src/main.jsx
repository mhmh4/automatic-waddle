import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import Patients, { loader as patientsLoader } from "./routes/Patients";
import Patient, {
  loader as patientLoader,
  action as patientAction,
} from "./routes/Patient";
import NewPatientForm, {
  action as newPatientFormAction,
} from "./routes/NewPatientForm";
import HeaderAndSidebar from "./routes/HeaderAndSidebar";
import Messages, { loader as MessageLoader } from "./routes/Messages";
import EditPatientForm, {
  loader as editPatientFormLoader,
  action as editPatientFormAction,
} from "./routes/EditPatientForm";
import Settings from "./routes/Settings";
import PatientInfo, { loader as patientInfoLoader } from "./routes/PatientInfo";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<HeaderAndSidebar />}>
      <Route
        path="/patients"
        element={<Patients />}
        loader={patientsLoader}
      ></Route>
      <Route
        path="/patients/:patientId"
        element={<Patient />}
        loader={patientLoader}
        action={patientAction}
      >
        <Route
          index
          element={<PatientInfo />}
          loader={patientInfoLoader}
        ></Route>
        <Route
          path="/patients/:patientId/edit"
          element={<EditPatientForm />}
          loader={editPatientFormLoader}
          action={editPatientFormAction}
        ></Route>
      </Route>
      <Route
        path="/patients/new"
        element={<NewPatientForm />}
        action={newPatientFormAction}
      ></Route>
      <Route
        path="/messages"
        element={<Messages />}
        loader={MessageLoader}
      ></Route>
      <Route path="/settings" element={<Settings />}></Route>
    </Route>,
  ),
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
