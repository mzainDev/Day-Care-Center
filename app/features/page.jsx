
// import AttendanceSystem from "@/featurePageComponents/AttendanceSystem";
// import ComplianceForms from "@/featurePageComponents/ComplianceForms";
// import ComprehensiveReports from "@/featurePageComponents/ComprehensiveReports";
// import FeaturesPage from "@/featurePageComponents/FeaturesPage";
// import GuardianDashboard from "@/featurePageComponents/GuardianDashboard";
// import MultilingualSupport from "@/featurePageComponents/MultilingualSupport";
// import StaffManagement from "@/featurePageComponents/StaffManagement";
// import SubscriptionPlans from "@/featurePageComponents/SubscriptionPlans";
// import SettingOverview from "@/featurePageComponents/SettingOverview";
// import ReminderSetting from "@/featurePageComponents/RemainderSetting";

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
import SettingOverview from "../components/SettingOverview";
import AutoReminderSettings from "../components/RemainderSetting";



export default function page() {
  return (
    <div>
      <FeaturesPage />
      <StaffManagement />
      <GuardianDashboard />
      <AttendanceSystem />
      <ComprehensiveReports />
      <SubscriptionPlans />
      <SettingOverview />
      <AutoReminderSettings />
      <MultilingualSupport />
      <ComplianceForms />
      <PickupRequest />
      <ChatFeature />
    </div>
  )
}
