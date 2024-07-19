import type { Schema, Attribute } from '@strapi/strapi';

export interface DE extends Schema.Component {
  collectionName: 'components_d_es';
  info: {
    displayName: 'e';
    icon: 'briefcase';
  };
  attributes: {
    Ed: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'd.e': DE;
    }
  }
}
