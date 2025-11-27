import React from 'react';
import { PolicySectionData, CouncilConfig } from './types';

// Configuration for supported councils
export const COUNCILS: Record<string, CouncilConfig> = {
  'hills': {
    id: 'hills',
    appName: 'HillsBins',
    councilName: 'The Hills Shire Council',
    lastUpdated: 'October 26, 2023',
    contactEmail: 'sophiekwon.syd@gmail.com',
  },
  'blacktown': {
    id: 'blacktown',
    appName: 'Blacktown Bins',
    councilName: 'Blacktown City Council',
    lastUpdated: 'March 1, 2024',
    contactEmail: 'sophiekwon.syd@gmail.com',
  },
  'parramatta': {
    id: 'parramatta',
    appName: 'Parramatta Waste',
    councilName: 'City of Parramatta Council',
    lastUpdated: 'February 15, 2024',
    contactEmail: 'sophiekwon.syd@gmail.com',
  }
};

// Helper to get config
export const getCouncilConfig = (id: string | undefined): CouncilConfig | null => {
  if (!id || !COUNCILS[id]) return null;
  return COUNCILS[id];
};

// Generator function for policy content
export const generatePolicyData = (config: CouncilConfig): PolicySectionData[] => [
  {
    id: 'introduction',
    title: '1. Introduction',
    content: (
      <>
        <p className="mb-4">
          Welcome to <strong>{config.appName}</strong> ("we," "our," or "us"). We are committed to protecting your personal information and respecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mobile application (the "App").
        </p>
        <p>
          We are bound by the <em>Privacy Act 1988</em> (Cth) and the Australian Privacy Principles (APPs). By using the App, you agree to the collection and use of information in accordance with this policy.
        </p>
      </>
    ),
  },
  {
    id: 'information-collected',
    title: '2. Information We Collect',
    content: (
      <>
        <p className="mb-4">
          We collect information that is necessary to provide you with accurate waste collection schedules and reminders. This includes:
        </p>
        
        <h4 className="text-lg font-semibold text-gray-900 mt-6 mb-2">A. Information You Provide</h4>
        <ul className="list-disc pl-5 space-y-2 mb-4">
          <li>
            <span className="font-medium">Address Details:</span> To fetch your specific bin schedule, we collect your Suburb, Street Name, and House Number. This information is entered by you manually or populated via your location selection.
          </li>
          <li>
            <span className="font-medium">Preferences:</span> We store your settings regarding reminder times and notification preferences locally on your device.
          </li>
        </ul>

        <h4 className="text-lg font-semibold text-gray-900 mt-6 mb-2">B. Information Automatically Collected</h4>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <span className="font-medium">Location Data (GPS):</span> With your explicit permission, we may collect your device’s precise location to automatically detect your suburb and street. This is used solely to simplify the setup process.
          </li>
          <li>
            <span className="font-medium">Device Information:</span> We may collect non-personal information about your mobile device (e.g., operating system version, device model) to ensure the App functions correctly and for debugging purposes.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 'how-we-use',
    title: '3. How We Use Your Information',
    content: (
      <>
        <p className="mb-4">We use the information we collect for the following specific purposes:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <span className="font-medium">To Provide Services:</span> Your address details are used to query {config.councilName}’s API and retrieve your specific waste collection schedule.
          </li>
          <li>
            <span className="font-medium">To Send Reminders:</span> To schedule local push notifications on your device to remind you to put your bins out.
          </li>
          <li>
            <span className="font-medium">To Improve Functionality:</span> To automatically detect your location during the initial setup, reducing the need for manual data entry.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 'disclosure',
    title: '4. Disclosure of Your Information',
    content: (
      <>
        <p className="mb-4">
          We do not sell, trade, or rent your personal information to third parties. However, we may share your data in the following limited circumstances:
        </p>

        <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-brand-500 my-4">
          <h4 className="font-semibold text-gray-900 mb-1">A. {config.councilName}</h4>
          <p className="text-sm text-gray-600 mb-2">
            The App acts as a third-party interface for residents. When you search for your bin day, your address details (Suburb, Street, House Number) are transmitted to {config.councilName}'s API to fetch the schedule data. This transmission is necessary for the App’s core functionality.
          </p>
          <p className="text-xs text-gray-500 italic">
            Note: We do not control {config.councilName}’s data retention policies. We recommend reviewing their privacy statement for more information on how they handle ratepayer data.
          </p>
        </div>

        <h4 className="text-lg font-semibold text-gray-900 mt-6 mb-2">B. Service Providers</h4>
        <p className="mb-2">We may employ third-party companies and services to facilitate our App (e.g., map services for location detection).</p>
        <ul className="list-disc pl-5 space-y-2 mb-4">
          <li>
            <span className="font-medium">Google Maps / Apple Maps:</span> We use these services to provide location-based features. Your use of these features is subject to the privacy policies of Google and/or Apple.
          </li>
        </ul>

        <h4 className="text-lg font-semibold text-gray-900 mt-6 mb-2">C. Legal Requirements</h4>
        <p>
          We may disclose your information if required to do so by law or in response to valid requests by public authorities (e.g., a court or a government agency).
        </p>
      </>
    ),
  },
  {
    id: 'location-info',
    title: '5. Location Information',
    content: (
      <>
        <p className="mb-4">We request access to your location to improve the user experience.</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <span className="font-medium">Consent:</span> We only access your location if you grant us permission through your device settings.
          </li>
          <li>
            <span className="font-medium">Revocation:</span> You can enable or disable location services for the App at any time via your mobile device's settings.
          </li>
          <li>
            <span className="font-medium">Storage:</span> We do not store your historical location movements. We only use your current location at the moment of setup to determine your service address.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 'push-notifications',
    title: '6. Push Notifications',
    content: (
      <>
        <p className="mb-2">We may request to send you push notifications regarding your bin collection schedule.</p>
        <p>
          <span className="font-medium">Opt-Out:</span> If you wish to opt out of receiving these communications, you can turn them off in the App's settings or your device's system settings.
        </p>
      </>
    ),
  },
  {
    id: 'security',
    title: '7. Data Storage and Security',
    content: (
      <>
        <p className="mb-4">
          We take reasonable steps to protect your information from misuse, interference, loss, unauthorized access, modification, or disclosure.
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <span className="font-medium">Local Storage:</span> Your address and schedule preferences are primarily stored locally on your device.
          </li>
          <li>
            <span className="font-medium">Transmission:</span> Data transmitted between the App and the Council's API is sent via secure standard internet protocols (HTTPS).
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 'external-links',
    title: '8. Links to Other Sites',
    content: (
      <>
        <p>
          Our App contains a "Waste Info" section that may include links to external websites (e.g., recycling guides or council pages). We are not responsible for the content or privacy practices of these external sites. We encourage you to review the privacy policies of any third-party sites you visit.
        </p>
      </>
    ),
  },
  {
    id: 'access-correction',
    title: '9. Access and Correction',
    content: (
      <>
        <p>
          Under the <em>Privacy Act 1988</em>, you have the right to access and correct the personal information we hold about you. Since the {config.appName} app stores your address data locally on your device, you can "correct" or update this information at any time simply by changing your selected address within the App settings.
        </p>
      </>
    ),
  },
  {
    id: 'changes',
    title: '10. Changes to This Privacy Policy',
    content: (
      <>
        <p>
          We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date. You are advised to review this page periodically for any changes.
        </p>
      </>
    ),
  },
  {
    id: 'contact',
    title: '11. Contact Us',
    content: (
      <>
        <p className="mb-4">If you have any questions about this Privacy Policy or our data practices, please contact us at:</p>
        <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
            <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                    <span className="font-medium text-gray-900 w-20">Email:</span>
                    <a href={`mailto:${config.contactEmail}`} className="text-brand-600 hover:text-brand-800 hover:underline">{config.contactEmail}</a>
                </div>
                {config.websiteUrl && (
                  <div className="flex items-center gap-2">
                      <span className="font-medium text-gray-900 w-20">Website:</span>
                      <a href={config.websiteUrl} className="text-brand-600 hover:text-brand-800 hover:underline" target="_blank" rel="noreferrer">{config.websiteUrl}</a>
                  </div>
                )}
            </div>
        </div>
      </>
    ),
  },
];