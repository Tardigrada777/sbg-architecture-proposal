/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { ButtonColors } from "./components/sbg-button/enums";
export namespace Components {
    interface MyComponent {
        /**
          * The first name
         */
        "first": string;
        /**
          * The last name
         */
        "last": string;
        /**
          * The middle name
         */
        "middle": string;
    }
    interface SbgButton {
        "color": ButtonColors;
        "shaped": boolean;
    }
}
declare global {
    interface HTMLMyComponentElement extends Components.MyComponent, HTMLStencilElement {
    }
    var HTMLMyComponentElement: {
        prototype: HTMLMyComponentElement;
        new (): HTMLMyComponentElement;
    };
    interface HTMLSbgButtonElement extends Components.SbgButton, HTMLStencilElement {
    }
    var HTMLSbgButtonElement: {
        prototype: HTMLSbgButtonElement;
        new (): HTMLSbgButtonElement;
    };
    interface HTMLElementTagNameMap {
        "my-component": HTMLMyComponentElement;
        "sbg-button": HTMLSbgButtonElement;
    }
}
declare namespace LocalJSX {
    interface MyComponent {
        /**
          * The first name
         */
        "first"?: string;
        /**
          * The last name
         */
        "last"?: string;
        /**
          * The middle name
         */
        "middle"?: string;
    }
    interface SbgButton {
        "color"?: ButtonColors;
        "shaped"?: boolean;
    }
    interface IntrinsicElements {
        "my-component": MyComponent;
        "sbg-button": SbgButton;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "my-component": LocalJSX.MyComponent & JSXBase.HTMLAttributes<HTMLMyComponentElement>;
            "sbg-button": LocalJSX.SbgButton & JSXBase.HTMLAttributes<HTMLSbgButtonElement>;
        }
    }
}
