import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";

import Users from "./pages/Users";

import Login from "./pages/Login";
import PageNotFound from "./pages/PageNotFound";
import GlobalStyles from "./styles/GlobalStyles";
import AppLayout from "./ui/AppLayout";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "react-hot-toast";

//import ProtectedRoute from "./ui/ProtectedRoute";
//import { DarkModeProvider } from "./context/DarkModeContext";
import CarService from "./pages/CarService";
import Drivers from "./pages/Drivers";
import Rides from "./pages/Rides";
import Vehicles from "./pages/Vehicles";
import Logistic from "./pages/Logistic";
import Profit from "./pages/Profit";
import Documents from "./pages/Documents";
import PushNotification from "./pages/PushNotification";
import Rating from "./pages/Rating";
import Promos from "./pages/Promos";
//import Customisation from "./pages/Customisation";
import AddNewCarService from "./features/car-services/AddNewCarService";
import ServiceInformation from "./features/car-services/ServiceInformation";
import EditNewCarService from "./features/car-services/EditNewCarService copy";
import Cabins from "./pages/Cabins";
import UserInformation from "./features/users/user/UserInformation";
import DriverInformation from "./features/drivers/driver/DriverInformation";
import DriverPendingInformation from "./features/drivers/driver/DriverPendingInformation";
import RideInformation from "./features/rides/ride/RideInformation";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // staleTime: 60 * 1000,
      staleTime: 0,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />

      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Navigate replace to="/dashboard" />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/car-services" element={<CarService />} />
            <Route path="/add-car-services" element={<AddNewCarService />} />
            <Route path="/edit-car-services" element={<EditNewCarService />} />
            <Route
              path="/car-service-information/:Id"
              element={<ServiceInformation />}
            />

            <Route path="/users" element={<Users />} />
            <Route path="/user-information/:Id" element={<UserInformation />} />

            {/* //<Route path="/users/add-user" element={<AddUser />} /> */}
            <Route path="/drivers" element={<Drivers />} />
            <Route
              path="/driver-information/:Id"
              element={<DriverInformation />}
            />
            <Route
              path="/driver-pending-information/:Id"
              element={<DriverPendingInformation />}
            />
            <Route path="/rides" element={<Rides />} />
            <Route path="/ride-information/:Id" element={<RideInformation />} />
            <Route path="/vehicles" element={<Vehicles />} />
            <Route path="/logistic" element={<Logistic />} />
            <Route path="/profit" element={<Profit />} />
            <Route path="/documents" element={<Documents />} />
            <Route path="/push-notification" element={<PushNotification />} />
            <Route path="/rating" element={<Rating />} />
            <Route path="/promos" element={<Promos />} />
            <Route path="/customisation" element={<Cabins />} />

            {/* <Route path="/bookings" element={<Bookings />} />
              <Route path="/Bookings/:bookingId" element={<Booking />} />
              <Route path="/checkin/:bookingId" element={<Checkin />} />
              <Route path="/cabins" element={<Cabins />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/account" element={<Account />} /> */}
          </Route>
          <Route path="/login" element={<Login />} />
          {/* <Route path="/login" element={<TextLogin />} /> */}

          <Route path="/*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ margin: "8px" }}
        toastOptions={{
          success: {
            duration: 3000,
          },
          error: {
            duration: 5000,
          },
          style: {
            fontSize: "16px",
            maxWidth: "500px",
            padding: "16px 24px",
            backgroundColor: "var(--color-gray-0)",
            color: "var(--color-gray-700)",
          },
        }}
      />
    </QueryClientProvider>
  );
}

export default App;
