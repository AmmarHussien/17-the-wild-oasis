import Filter from "../../ui/Filter";
import TableOperations from "../../ui/TableOperations";

function DriversTableOperations() {
  return (
    <TableOperations>
      <Filter
        filterField="status"
        options={[
          { value: "Approved", label: "Approved" },
          { value: "Pending", label: "Pending" },
          { value: "Blocked", label: "Blocked" },
          { value: "Suspended", label: "Suspended" },
        ]}
      />

      {/* <SortBy
        options={[
          { value: "startDate-desc", label: "Sort by date (recent first)" },
          { value: "startDate-asc", label: "Sort by date (earlier first)" },
          {
            value: "totalPrice-desc",
            label: "Sort by amount (high first)",
          },
          { value: "totalPrice-asc", label: "Sort by amount (low first)" },
        ]}
      /> */}
    </TableOperations>
  );
}

export default DriversTableOperations;
