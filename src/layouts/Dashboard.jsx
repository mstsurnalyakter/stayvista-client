import { Outlet } from "react-router-dom"


const Dashboard = () => {
  return (
    <div>
      {/* sidebar */}
      <div>sidebar</div>
      {/* outlet */}
      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default Dashboard