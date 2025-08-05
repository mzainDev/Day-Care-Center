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
import { generateMetadata as generateSEO } from "../components/Meta"; 


export async function generateMetadata() {
  const metadata = await generateSEO();
  return metadata.features;
}


export default function Features() {
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
  );
}
