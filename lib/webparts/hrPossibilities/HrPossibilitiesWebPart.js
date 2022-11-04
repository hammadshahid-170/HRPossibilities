var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import * as React from 'react';
import * as ReactDom from 'react-dom';
import { BaseClientSideWebPart, PropertyPaneTextField } from '@microsoft/sp-webpart-base';
import * as strings from 'HrPossibilitiesWebPartStrings';
import HrPossibilities from './components/HrPossibilities';
var HrPossibilitiesWebPart = (function (_super) {
    __extends(HrPossibilitiesWebPart, _super);
    function HrPossibilitiesWebPart() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HrPossibilitiesWebPart.prototype.render = function () {
        var element = React.createElement(HrPossibilities, {
            description: this.properties.description,
            ListName: this.properties.ListName,
            SiteUrl: this.properties.SiteUrl,
            context: this.context
        });
        ReactDom.render(element, this.domElement);
    };
    HrPossibilitiesWebPart.prototype.onDispose = function () {
        ReactDom.unmountComponentAtNode(this.domElement);
    };
    HrPossibilitiesWebPart.prototype.getPropertyPaneConfiguration = function () {
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
    };
    return HrPossibilitiesWebPart;
}(BaseClientSideWebPart));
export default HrPossibilitiesWebPart;

//# sourceMappingURL=HrPossibilitiesWebPart.js.map
