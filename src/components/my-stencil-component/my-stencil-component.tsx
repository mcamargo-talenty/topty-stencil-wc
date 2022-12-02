import { Component, Prop, h } from '@stencil/core';
import { format } from '../../utils/utils';

@Component({
  tag: 'my-stencil-component',
  styleUrl: 'my-stencil-component.scss',
  shadow: true,
})
export class MyStencilComponent {
  /**
   * The first name
   */
  @Prop() first: string;

  /**
   * The middle name
   */
  @Prop() middle: string;

  /**
   * The last name
   */
  @Prop() last: string;

  private getText(): string {
    return format(this.first, this.middle, this.last);
  }

  render() {
    return <div class="name">Hola, {this.getText()}. Bienvenido a Topty WC con Stencil</div>;
  }
}
