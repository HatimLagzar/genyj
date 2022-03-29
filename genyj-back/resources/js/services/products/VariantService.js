import variantTemplate from '../../templates/variant/variant-template';

class VariantService {
  static VARIANTS_NODE_ID = 'variants';
  static ADD_VARIANT_BTN_ID = 'add-new-variant';
  static VARIANT_ITEM_CLASS_NAME = '.variant-item'
  static DELETE_VARIANT_CLASS_NAME = '.delete-variant'

  constructor() {
    this.create = this.create.bind(this);
    this.delete = this.delete.bind(this);
  }

  /**
   * @returns {HTMLElement|null}
   */
  get variantsNode() {
    return document.getElementById(VariantService.VARIANTS_NODE_ID);
  }

  /**
   * @returns {HTMLElement|null}
   */
  get addVariantBtnNode() {
    return document.getElementById(VariantService.ADD_VARIANT_BTN_ID);
  }

  init() {
    this.create()
    this.eventsBinding();
  }

  eventsBinding() {
    if (!this.variantsNode instanceof HTMLElement) {
      return;
    }

    if (this.addVariantBtnNode instanceof HTMLElement) {
      this.addVariantBtnNode.removeEventListener('click', this.create);
      this.addVariantBtnNode.addEventListener('click', this.create);
    }

    this.variantsNode.querySelectorAll(VariantService.VARIANT_ITEM_CLASS_NAME).forEach(variantItem => {
      variantItem.querySelector(VariantService.DELETE_VARIANT_CLASS_NAME).removeEventListener('click', this.delete);
      variantItem.querySelector(VariantService.DELETE_VARIANT_CLASS_NAME).addEventListener('click', this.delete);
    });
  }

  create() {
    const order = this.countVariants()

    this.addVariantBtnNode.insertAdjacentHTML(
        'beforebegin',
        variantTemplate.replaceAll('_ORDER_', order)
    );

    this.eventsBinding();
  }

  delete(e) {
    e.preventDefault()

    e.currentTarget.parentElement.parentElement.parentElement.remove()
  }

  countVariants() {
    return this.variantsNode.querySelectorAll(VariantService.VARIANT_ITEM_CLASS_NAME).length
  }
}

export default new VariantService();