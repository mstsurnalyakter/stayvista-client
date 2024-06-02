import LoadingSpinner from "../../../components/Shared/LoadingSpinner";
import useRole from "../../../hooks/useRole";
import AdminStatistics from "../Admin/AdminStatistics";
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
    
    </>
  );
}

export default Statistics