import LoadingSpinner from "../../../components/Shared/LoadingSpinner";
import useRole from "../../../hooks/useRole";
import AdminStatistics from "../Admin/AdminStatistics";
import GuestStatistics from "../Guest/GuestStatistics";
import HostStatistics from "../Host/HostStatistics";


const Statistics = () => {
  const  [role, isLoading] = useRole();
  if (isLoading) {
    return <LoadingSpinner/>
  }
  return (
    <>
     {
      role === 'admin' && <AdminStatistics/>
     }
     {
      role === 'host' && <HostStatistics/>
     }
     {
      role === 'gust' && <GuestStatistics/>
     }

    </>
  );
}

export default Statistics