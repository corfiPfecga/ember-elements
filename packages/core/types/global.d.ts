// Types for compiled templates
declare module 'core/templates/*' {
  import type { TemplateFactory } from 'htmlbars-inline-precompile';
  const tmpl: TemplateFactory;
  export default tmpl;
}

declare module '@ember/component' {
  import type { TemplateFactory } from 'ember-cli-htmlbars';

  type TF = TemplateFactory;
  export function setComponentTemplate(template: TF, klass: any): any;
}

declare module '@ember-elements/icons';
