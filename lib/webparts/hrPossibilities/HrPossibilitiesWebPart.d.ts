import { BaseClientSideWebPart, IPropertyPaneConfiguration } from '@microsoft/sp-webpart-base';
export interface IHrPossibilitiesWebPartProps {
    description: string;
    ListName: string;
    SiteUrl: string;
}
export default class HrPossibilitiesWebPart extends BaseClientSideWebPart<IHrPossibilitiesWebPartProps> {
    render(): void;
    protected onDispose(): void;
    protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration;
}
