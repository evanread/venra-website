import React from 'react';

const integrations = {
  adPlatforms: [
    {
      name: 'Google Ads',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/c/c7/Google_Ads_logo.svg',
      description: 'Reach customers actively searching for your services'
    },
    {
      name: 'Facebook Ads',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Facebook_icon.svg/2048px-Facebook_icon.svg.png',
      description: 'Target homeowners in your service area'
    },
    {
      name: 'Instagram Ads',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png',
      description: 'Showcase your work with visual ads'
    }
  ],
  aiAutomation: [
    {
      name: 'OpenAI',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg',
      description: 'AI-powered lead conversion and appointment booking'
    },
    {
      name: 'Google Calendar',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a5/Google_Calendar_icon_%282020%29.svg',
      description: 'Automated appointment scheduling and reminders'
    }
  ],
  communications: [
    {
      name: 'SendGrid',
      logo: 'https://www.vectorlogo.zone/logos/sendgrid/sendgrid-ar21.svg',
      description: 'Automated email follow-ups'
    },
    {
      name: 'Twilio',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Twilio-logo-red.svg/2560px-Twilio-logo-red.svg.png',
      description: 'SMS notifications and reminders'
    }
  ]
};

export function Integrations() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">Powerful Integrations</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Connect with the platforms that matter most to your business
          </p>
        </div>

        <div className="space-y-16">
          {/* Ad Platforms */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-center">
              Advertising Platforms
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              {integrations.adPlatforms.map((platform) => (
                <div key={platform.name} className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="h-16 flex items-center justify-center mb-6">
                    <img
                      src={platform.logo}
                      alt={platform.name}
                      className="h-8 object-contain"
                    />
                  </div>
                  <h4 className="text-xl font-semibold mb-3 text-center">
                    {platform.name}
                  </h4>
                  <p className="text-gray-600 text-center">
                    {platform.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* AI & Automation */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-center">
              AI & Automation
            </h3>
            <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
              {integrations.aiAutomation.map((service) => (
                <div key={service.name} className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="h-16 flex items-center justify-center mb-6">
                    <img
                      src={service.logo}
                      alt={service.name}
                      className="h-8 object-contain"
                    />
                  </div>
                  <h4 className="text-xl font-semibold mb-3 text-center">
                    {service.name}
                  </h4>
                  <p className="text-gray-600 text-center">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Communication Services */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-center">
              Communication Services
            </h3>
            <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
              {integrations.communications.map((service) => (
                <div key={service.name} className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="h-16 flex items-center justify-center mb-6">
                    <img
                      src={service.logo}
                      alt={service.name}
                      className="h-8 object-contain"
                    />
                  </div>
                  <h4 className="text-xl font-semibold mb-3 text-center">
                    {service.name}
                  </h4>
                  <p className="text-gray-600 text-center">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}