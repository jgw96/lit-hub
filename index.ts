import {
  LitElement, html, customElement, property
} from 'lit-element';

import './style.css';

import './src/home';
import './src/components/header';

/**
 * Use the customElement decorator to define your class as
 * a custom element. Registers <my-element> as an HTML tag.
 */
@customElement('my-element')
export class MyElement extends LitElement {

  /**
   * Create an observed property. Triggers update on change.
   */
  @property()
  foo = 'foo';

  /**
   * Implement `render` to define a template for your element.
   */
  render() {
    /**
     * Use JavaScript expressions to include property values in
     * the element template.
     */
    return html`
      <header-element></header-element>

      <main>
        <home-element></home-element>
      </main>
    `;
  }
}
