import * as React from 'react'

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sbg-button': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    }
  }
}