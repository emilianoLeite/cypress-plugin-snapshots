// -- Example Usage:
// -- cypress/tsconfig.json
// {
//   "compilerOptions": {
//      "types": ["cypress", "cypress-plugin-snapshots"]
//    }
// }

type CypressScreenshotFnOptions = Partial<
  Cypress.Loggable & Cypress.Timeoutable & Cypress.ScreenshotOptions
>;

declare namespace Cypress {
  interface Chainable<Subject = any> {
    toMatchSnapshot(
      options?: Partial<{
        ignoreExtralFields: boolean;
        ignoreExtraArrayItems: boolean;
        normalizeJson: boolean;
        replace: any;
        name: string;
      }>
    ): Chainable<null>;

    toMatchImageSnapshot(
      options?: {
        imageConfig?: Partial<{
          /**
           * Field description here
           *
           * @default 'xxx'
           */
          createDiffImage: boolean;
          /**
           * Field description here
           *
           * @default 'xxx'
           */
          resizeDevicePixelRatio: boolean;
          /**
           * Field description here
           *
           * @default 'xxx'
           */
          threshold: number;
          /**
           * Field description here
           *
           * @default 'xxx'
           */
          thresholdType: 'percent' | 'pixels';
        }>;
        name?: string;
        separator?: string;
      } & Partial<CypressScreenshotFnOptions>
    ): Chainable<null>;
  }
}
