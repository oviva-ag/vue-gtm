// declaring module will allow typescript to import the module

declare module 'vue-gtm' {

    import {PluginObject} from 'vue'
    import {VueRouter} from "vue-router/types/router";

    let vueGtm: PluginObject<PluginOptions>;
    export default vueGtm;

    export interface PluginOptionsQueryParams {
        gtm_auth: string
        gtm_preview: string
        gtm_cookies_win: string
    }

    export interface PluginOptions {
        id: string | [string],
        queryParams?: PluginOptionsQueryParams
        enabled?: boolean // defaults to true. Plugin can be disabled by setting this to false for Ex: enabled: !!GDPR_Cookie (optional)
        debug?: boolean // Whether or not display console logs debugs (optional)
        loadScript?: boolean // Whether or not to load the GTM Script (Helpful if you are including GTM manually, but need the dataLayer functionality in your components) (optional)
        vueRouter?: VueRouter, // Pass the router instance to automatically sync with router (optional)
        ignoredViews?: [string] // If router, you can exclude some routes name (case insensitive) (optional)
    }
}
