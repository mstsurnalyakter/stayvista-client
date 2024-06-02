import LoadingSpinner from "../../../components/Shared/LoadingSpinner";
import useRole from "../../../hooks/useRole";
import AdminStatistics from "../Admin/AdminStatistics";


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
    </>
  );
}

export default Statistics