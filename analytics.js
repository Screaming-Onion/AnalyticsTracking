import {slackChannelAlert} from './Slack';

const homeScreenEvents = {
  'Buy Button': 'ev-buy',
  'Chat Button': 'ev-chat',
};

const navigationEvents = {
  'Explore Link': 'ev-explore',
  'Shopping Cart': 'ev-shopping-cart',
  'Compare Link': 'ev-compare',
};

const footerEvents = {
  'Contact Support Link': 'ev-contact-support',
};

const chatEvents = {
  'Chat Submit': 'ev-submit-chat',
  'Open Chat Window': 'open-chat-window',
};

const profileEvents = {
  'Upload Image': 'ev-upload-image',
  'Update Password': 'ev-update-password',
  'Update Username': 'ev-update-username',
  'Continue': '"continue-btn"',
}

const events = {
  'Shopping-Site': {
    'Home Screen': homeScreenEvents,
    'Navigation': navigationEvents,
    'Footer': footerEvents,
    'Chat': chatEvents,
    'Profile': profileEvents,
  },
};

const iterKeys = (object, funct) => Object.keys(object).forEach(func);

iterKeys(events, category => iterKeys(events[category], label => iterKeys(events[category][label], event => {
  const className = events[category][label][event];
  $(`.${className}`).on('click', function(event) {
    analytics.track(event, {
      category,
      label,
    });
    if (label = 'Chat') {
      slackChannelAlert(label, 'New message received');
    } else if (label = 'Profile') {
      slackChannelAlert(label, 'A profile was updated');
      console.log(`it worked for ${user.username} ${user.password}`);
  });
})));
