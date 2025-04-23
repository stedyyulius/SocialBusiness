export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white text-gray-800 p-8 sm:p-16 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>

      <p className="mb-4">
        This Privacy Policy describes how <strong>we</strong> SocialBusiness
        collects, uses, and protects your information when using our platform to
        manage multiple Instagram Business accounts.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        Information We Collect
      </h2>
      <ul className="list-disc pl-6 mb-4">
        <li>
          <strong>Instagram Profile Information:</strong> We access basic
          account details such as username, account ID, and profile picture,
          provided through the Instagram Graph API.
        </li>
        <li>
          <strong>Instagram Content:</strong> We access posts, stories, media,
          captions, and metadata associated with your Business account content.
        </li>
        <li>
          <strong>Instagram Conversations:</strong> We read and send messages
          through the Instagram Messaging API (only for Business accounts).
        </li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        How We Use Your Information
      </h2>
      <ul className="list-disc pl-6 mb-4">
        <li>
          To display and manage content across multiple Instagram accounts.
        </li>
        <li>
          To enable you to send and receive messages within a unified interface.
        </li>
        <li>
          To provide analytics and activity summaries across all connected
          accounts.
        </li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        Data Storage & Security
      </h2>
      <p className="mb-4">
        We do not store your Instagram credentials. Access tokens are securely
        stored and encrypted on our servers and used only for authorized API
        calls. We apply best practices in security and encryption to protect
        your data.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Third-Party Sharing</h2>
      <p className="mb-4">
        We do not share, sell, or rent your data to any third parties. Your
        Instagram data is used only within the app for intended functionality.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        User Consent & Control
      </h2>
      <p className="mb-4">
        You grant permission to access your Instagram Business account by
        explicitly authorizing access via Meta`&apos;`s OAuth flow. You may
        revoke this access at any time through your Meta settings.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        Compliance with Meta Policies
      </h2>
      <p className="mb-4">
        This app uses the Instagram Graph API and Messaging API in compliance
        with Meta’s Platform Policies. It is designed exclusively for Instagram
        Business accounts.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Contact Us</h2>
      <p className="mb-4">
        If you have any questions or concerns about your privacy, please contact
        us at support@centraexchange.com.
      </p>

      <p className="text-sm text-gray-500 mt-12">
        Last updated: {new Date().toLocaleDateString("en-US")}
      </p>
    </div>
  );
}
