"use client";

import ExportedImage from "next-image-export-optimizer";
import autoReminder from "../../public/image/autoReminder.png";
import { Bell, FileText, Compass } from "lucide-react";

const reminders = [
  {
    icon: <Bell className="text-blue-500 w-6 h-6" />,
    title: "Check-in Notification",
    description:
      "Sends a notification when a child checks in through the portal.",
  },
  {
    icon: <Bell className="text-blue-500 w-6 h-6" />,
    title: "Check-out Notification",
    description: "Sends a notification when a child checks out of the portal.",
  },
  {
    icon: <FileText className="text-green-600 w-6 h-6" />,
    title: "Daily Report Ready Notice",
    description:
      "Notifies guardians when their child’s daily report is ready for viewing.",
  },
  {
    icon: <Compass className="text-purple-500 w-6 h-6" />,
    title: "Portal Onboarding Guide",
    description:
      "Sends a welcome or onboarding guide to new users of the portal.",
  },
  {
    icon: <Compass className="text-purple-500 w-6 h-6" />,
    title: "Portal Onboarding Guide",
    description:
      "Sends a welcome or onboarding guide to new users of the portal.",
  },
  {
    icon: <Compass className="text-purple-500 w-6 h-6" />,
    title: "Portal Onboarding Guide",
    description:
      "Sends a welcome or onboarding guide to new users of the portal.",
  },
];

export default function AutoReminderSettings() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#00254d] mb-4">
            Auto Reminder Settings
          </h2>
          <p className="text-gray-700 text-base md:text-lg max-w-3xl mx-auto">
            Manage which automated WhatsApp or Email reminders are sent to
            users. Reminders can be categorized by purpose and toggled on/off to
            match your communication needs.
          </p>
        </div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left: Image */}
          <div className="w-full h-full">
            <div className="h-full min-h-[500px] rounded-3xl overflow-hidden border border-gray-200 shadow-[0_10px_30px_rgba(255,0,150,0.4),_0_5px_15px_rgba(0,205,255,0.3)] transition duration-300 hover:scale-[1.02]">
              <ExportedImage
                src={autoReminder}
                alt="Auto Reminder Settings UI"
                width={800}
                height={500}
                className="w-full h-full object-contain"
              />
            </div>
            <p className="text-sm text-gray-500 mt-3 text-center">
              Preview: Reminder Settings UI
            </p>
          </div>

          {/* Right: Cards in 2 columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {reminders.map((item, index) => (
              <div
                key={index}
                className="bg-gray-50 border border-gray-200 rounded-2xl p-5 shadow-sm hover:shadow-md transition duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="mt-1">{item.icon}</div>
                  <div>
                    <h3 className="text-base md:text-lg font-semibold text-[#0e7490]">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed mt-1">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
