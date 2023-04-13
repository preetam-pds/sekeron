import type { thumbShapeType } from '../types';
declare type Props = {
    thumbShape?: thumbShapeType;
    thumbSize: number;
    thumbColor?: string;
    handleStyle: {};
    vertical?: boolean;
    channel?: 'h' | 'b' | 's' | 'a';
};
export default function Thumb({ thumbShape, thumbSize, thumbColor, handleStyle, vertical, channel }: Props): JSX.Element;
export {};
