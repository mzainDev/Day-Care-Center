import AttendanceSystem from "../components/AttendanceSystem";
import ChatFeature from "../components/ChatFeature";
import ComplianceForms from "../components/ComplianceForms";
import ComprehensiveReports from "../components/ComprehensiveReports";
import FeaturesPage from "../components/FeaturesPage";
import GuardianDashboard from "../components/GuardianDashboard";
import MultilingualSupport from "../components/MultilingualSupport";
import PickupRequest from "../components/PickupRequest";
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
      <PickupRequest/>
      <ChatFeature/>
    </div>
  )
}
