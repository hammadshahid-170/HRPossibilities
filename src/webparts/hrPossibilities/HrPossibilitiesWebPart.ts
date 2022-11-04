import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-webpart-base';

import * as strings from 'HrPossibilitiesWebPartStrings';
import HrPossibilities from './components/HrPossibilities';
import { IHrPossibilitiesProps } from './components/IHrPossibilitiesProps';

export interface IHrPossibilitiesWebPartProps {
  description: string;
  ListName: string;
  SiteUrl: string;
}

export default class HrPossibilitiesWebPart extends BaseClientSideWebPart<IHrPossibilitiesWebPartProps> {

  public render(): void {
    const element: React.ReactElement<IHrPossibilitiesProps > = React.createElement(
      HrPossibilities,
      {
        description: this.properties.description,
        ListName: this.properties.ListName,
        SiteUrl: this.properties.SiteUrl,
        context:this.context
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

 

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                }),
                PropertyPaneTextField('ListName', {
                  label: 'List Name'
                }),
                PropertyPaneTextField('SiteUrl', {
                  label: 'Root Site Url'
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
