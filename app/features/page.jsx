import AttendanceSystem from "@/featurePageComponents/AttendanceSystem";
import ComplianceForms from "@/featurePageComponents/ComplianceForms";
import ComprehensiveReports from "@/featurePageComponents/ComprehensiveReports";
import FeaturesPage from "@/featurePageComponents/FeaturesPage";
import GuardianDashboard from "@/featurePageComponents/GuardianDashboard";
import MultilingualSupport from "@/featurePageComponents/MultilingualSupport";
import StaffManagement from "@/featurePageComponents/StaffManagement";
import SubscriptionPlans from "@/featurePageComponents/SubscriptionPlans";


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
