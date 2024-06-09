import styled from "styled-components";
import { useRecentBookings } from "./useRecentBookings";
import Spinner from "../../ui/Spinner";
import { useRecentStays } from "./useRecentStays";
import Stats from "./stats";
import useCabins from "../cabins/useCabins";
import SalesChart from "./SalesChart";

import RidesStatistics from "./Statistics";
import RecentRide from "./ResentRide.jsx/RecentRide";

const StyledDashboardLayout = styled.div`
  display: flex;
  flex-direction: row;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto 34rem auto;
  gap: 2.4rem;
`;

const SmallContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

function DashboardLayout() {
  const { bookings, isLoading: isLoadingBookings } = useRecentBookings();
  const {
    confirmedStays,
    isLoading: isLoadingStays,
    numDays,
  } = useRecentStays();

  const { cabins, isLoading: isLoadingCabins } = useCabins();

  if (isLoadingBookings || isLoadingStays || isLoadingCabins)
    return <Spinner />;

  return (
    <>
      <StyledDashboardLayout>
        <Stats totalUser="1000" totalDrivers="150" totalVehicles="150" />

        {/* <TodayActivity />
          <DurationChart confirmedStays={confirmedStays} /> */}
      </StyledDashboardLayout>
      <SmallContainer>
        <SalesChart bookings={bookings} numDays={numDays} />
        <RidesStatistics />
      </SmallContainer>
      <RecentRide />
    </>
  );
}

export default DashboardLayout;
