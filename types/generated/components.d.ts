import type { Schema, Attribute } from '@strapi/strapi';

export interface SharedImage extends Schema.Component {
  collectionName: 'components_shared_images';
  info: {
    displayName: 'image';
  };
  attributes: {
    mobileUrl: Attribute.Media;
    desktopUrl: Attribute.Media;
    label: Attribute.String;
    link: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'shared.image': SharedImage;
    }
  }
}
