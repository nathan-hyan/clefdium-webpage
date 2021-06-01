import i18next from 'i18next';

import { MODAL_TYPE } from 'contexts/constants';

i18next.addResources('es', 'Modal', {
  close: 'Cerrar',
  [`${MODAL_TYPE.comingSoon}_title`]: '¡Proximamente! 🎉',
  [`${MODAL_TYPE.comingSoon}_text`]:
    'Estamos trabajando para traerte esta funcionalidad y muchas más.\n¡Mantente alerta a nuestras redes sociales para saber más!'
});

i18next.addResources('en', 'Modal', {
  close: 'Close',
  [`${MODAL_TYPE.comingSoon}_title`]: 'Coming soon! 🎉',
  [`${MODAL_TYPE.comingSoon}_text`]:
    'We are working to bring you this functionality and many more.\nStay alert to our social networks to find out more! '
});
