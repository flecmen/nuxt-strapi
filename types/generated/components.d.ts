import type { Schema, Attribute } from '@strapi/strapi';

export interface CozeTechnology extends Schema.Component {
  collectionName: 'components_coze_technologies';
  info: {
    displayName: 'technology';
    icon: 'cog';
    description: '';
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'coze.technology': CozeTechnology;
    }
  }
}
