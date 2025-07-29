import AttendanceSystem from "../components/AttendanceSystem";
import ComplianceForms from "../components/ComplianceForms";
import ComprehensiveReports from "../components/ComprehensiveReports";
import FeaturesPage from "../components/FeaturesPage";
import GuardianDashboard from "../components/GuardianDashboard";
import MultilingualSupport from "../components/MultilingualSupport";
import StaffManagement from "../components/StaffManagement";
import SubscriptionPlans from "../components/SubscriptionPlans";



export default function page() {
  return (
    <div>
      <FeaturesPage/>
      <StaffManagement/>
      <GuardianDashboard/>
      <AttendanceSystem/>
      <ComprehensiveReports/>
      <SubscriptionPlans/>
      <MultilingualSupport/>
      <ComplianceForms/>
    </div>
  )
}
