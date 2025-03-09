/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string | object = string> {
      hrefInputParams: { pathname: Router.RelativePathString, params?: Router.UnknownInputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownInputParams } | { pathname: `/_sitemap`; params?: Router.UnknownInputParams; } | { pathname: `${'/(app)'}` | `/`; params?: Router.UnknownInputParams; } | { pathname: `${'/(app)'}/auth/signin` | `/auth/signin`; params?: Router.UnknownInputParams; } | { pathname: `${'/(app)'}/home/overview` | `/home/overview`; params?: Router.UnknownInputParams; };
      hrefOutputParams: { pathname: Router.RelativePathString, params?: Router.UnknownOutputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownOutputParams } | { pathname: `/_sitemap`; params?: Router.UnknownOutputParams; } | { pathname: `${'/(app)'}` | `/`; params?: Router.UnknownOutputParams; } | { pathname: `${'/(app)'}/auth/signin` | `/auth/signin`; params?: Router.UnknownOutputParams; } | { pathname: `${'/(app)'}/home/overview` | `/home/overview`; params?: Router.UnknownOutputParams; };
      href: Router.RelativePathString | Router.ExternalPathString | `/_sitemap${`?${string}` | `#${string}` | ''}` | `${'/(app)'}${`?${string}` | `#${string}` | ''}` | `/${`?${string}` | `#${string}` | ''}` | `${'/(app)'}/auth/signin${`?${string}` | `#${string}` | ''}` | `/auth/signin${`?${string}` | `#${string}` | ''}` | `${'/(app)'}/home/overview${`?${string}` | `#${string}` | ''}` | `/home/overview${`?${string}` | `#${string}` | ''}` | { pathname: Router.RelativePathString, params?: Router.UnknownInputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownInputParams } | { pathname: `/_sitemap`; params?: Router.UnknownInputParams; } | { pathname: `${'/(app)'}` | `/`; params?: Router.UnknownInputParams; } | { pathname: `${'/(app)'}/auth/signin` | `/auth/signin`; params?: Router.UnknownInputParams; } | { pathname: `${'/(app)'}/home/overview` | `/home/overview`; params?: Router.UnknownInputParams; };
    }
  }
}
