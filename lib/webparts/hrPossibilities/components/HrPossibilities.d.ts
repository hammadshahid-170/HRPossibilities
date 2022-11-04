/// <reference types="react" />
import * as React from 'react';
import { IHrPossibilitiesProps } from './IHrPossibilitiesProps';
import '../components/Custom.css';
export interface IHrPossibilitiesState {
    HrPossibilitiesData: any;
}
export default class HrPossibilities extends React.Component<IHrPossibilitiesProps, IHrPossibilitiesState> {
    constructor(props: any);
    componentDidMount(): void;
    render(): React.ReactElement<IHrPossibilitiesProps>;
    getItems(): Promise<any>;
}
