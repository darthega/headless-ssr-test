import { GoogleTagManagerEvents } from '@headless-commerce/types/GoogleTagManagerEvents';
import { PromotionEvent } from '@headless-commerce/types/gtm';
import TagManager from 'react-gtm-module';

interface Args {
  [key: string | number]: string | number;
}
type Name = 'promoView' | 'promoClick';

export function usePromotionGtm() {
  function handlePromotionGtm(event: GoogleTagManagerEvents, name: Name, promotion: Args) {
    const promotionImpression: PromotionEvent = {
      ecommerce: {
        [name]: {
          promotions: [promotion],
        },
      },
    };
    const tagManagerArgs = {
      dataLayer: {
        event: event,
        ...promotionImpression,
      },
    };
    TagManager.dataLayer(tagManagerArgs);
  }
  return [handlePromotionGtm];
}
