import {
  LitElement, html, customElement, property
} from 'lit-element';

/**
 * Use the customElement decorator to define your class as
 * a custom element. Registers <my-element> as an HTML tag.
 */
@customElement('header-element')
export class HeaderElement extends LitElement {

  /**
   * Create an observed property. Triggers update on change.
   */
  @property()
  title = 'HubExplorer';

  /**
   * Implement `render` to define a template for your element.
   */
  render(){
    /**
     * Use JavaScript expressions to include property values in
     * the element template.
     */
    return html`
      <header>
        <h1>${this.title}</h1>
      </header>
    `;
  }
}
