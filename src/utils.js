import pluginConfig from './config'

/**
 * Console log depending on config debug mode
 * @param {...*} message
 */
export const logDebug = function (message) {
  if (pluginConfig.debug) {
    console.log('VueGtm :', ...arguments)
  }
};

/**
 * Load GTM script tag
 * @param {String}  id  GTM ID
 * @param {Object}  params query params object
 */
export const loadScript = function (id, params) {
  const win    = window,
        doc    = document,
        script = doc.createElement('script'),
        dl     = 'dataLayer';

  console.log(`loading script ${id} with ${JSON.stringify(params)}`)

  win[dl] = win[dl] || [];

  win[dl].push({
    event: 'gtm.js',
    'gtm.start': new Date().getTime(),
  });

  if (!id) {
    return
  }

  script.async = true;
  const queryString = new URLSearchParams({
    id,
    ...(params || {}),
  });
  script.src = `https://www.googletagmanager.com/gtm.js?${queryString}`
  doc.body.appendChild(script)
};

/**
 * Check if GTM script is in the document
 * @return {boolean}
 */
export const hasScript = function () {
  return Array
      .from(document.getElementsByTagName('script'))
      .some(script => script.src.includes('googletagmanager'))
};
