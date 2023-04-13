import type { TCTX } from './types';
import type { StyleProp, ViewStyle } from 'react-native';
export declare const CTX: import("react").Context<TCTX>;
export declare function getStyle<T extends keyof ViewStyle>(style: StyleProp<ViewStyle>, property: T): ViewStyle[T] | undefined;
declare const _default: {
    panel_container: {
        position: "relative";
        alignSelf: "stretch";
        borderRadius: number;
    };
    panel_image: {
        position: "absolute";
        top: number;
        left: number;
        width: string;
        height: string;
        overflow: "hidden";
    };
    handle: {
        top: number;
        justifyContent: "center";
        alignItems: "center";
        right: number;
        position: "absolute";
    } | {
        top: number;
        justifyContent: "center";
        alignItems: "center";
        left: number;
        position: "absolute";
    };
    handleInner: {
        width: string;
        height: string;
        shadowColor: string;
        shadowOffset: {
            width: number;
            height: number;
        };
        shadowOpacity: number;
        shadowRadius: number;
        elevation: number;
    };
    shadow: {
        shadowColor: string;
        shadowOffset: {
            width: number;
            height: number;
        };
        shadowOpacity: number;
        shadowRadius: number;
        elevation: number;
    };
};
export default _default;
