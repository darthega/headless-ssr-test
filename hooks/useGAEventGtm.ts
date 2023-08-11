import TagManager from 'react-gtm-module';

import { GoogleTagManagerEvents } from '@headless-commerce/types/GoogleTagManagerEvents';

export interface TrackingArgs {
  eventCategory: string;
  eventAction: string;
  eventLabel: string;
}

function useGAEventGtm() {
  function handleGAEventGtm(event: GoogleTagManagerEvents, gaEventArgs: TrackingArgs) {
    const gaEvent = {
      eventCategory: gaEventArgs?.eventCategory,
      eventAction: gaEventArgs?.eventAction,
      eventLabel: gaEventArgs?.eventLabel,
    };
    const tagManagerArgs = {
      dataLayer: {
        event: event,
        ...gaEvent,
      },
    };
    TagManager.dataLayer(tagManagerArgs);
  }
  return [handleGAEventGtm];
}

export default useGAEventGtm;
