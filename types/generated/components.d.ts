import type { Schema, Attribute } from '@strapi/strapi';

export interface BlockInfoBlock extends Schema.Component {
  collectionName: 'components_block_info_blocks';
  info: {
    displayName: 'InfoBlock';
    description: '';
  };
  attributes: {
    heading: Attribute.String;
    bullet_points: Attribute.Component<'general.information', true>;
    sub_heading: Attribute.String;
  };
}

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

export interface GeneralInformation extends Schema.Component {
  collectionName: 'components_general_information';
  info: {
    displayName: 'information';
    description: '';
  };
  attributes: {
    data: Attribute.Text & Attribute.Required;
  };
}

export interface GeneralRichText extends Schema.Component {
  collectionName: 'components_general_rich_texts';
  info: {
    displayName: 'rich_text';
  };
  attributes: {
    heading: Attribute.String;
    data: Attribute.RichText;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'block.info-block': BlockInfoBlock;
      'coze.technology': CozeTechnology;
      'general.information': GeneralInformation;
      'general.rich-text': GeneralRichText;
    }
  }
}
