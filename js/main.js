import {
  validaNome,
  validaEmail,
  validaTelefone,
  validaPassword,
  comparaSenha,
  validateRequired,
  validarDocumento,
} from "./service/validator.js";

import { navBarComponentTemplate } from "./../components/nav.component/nav.component.js";

import { footerComponentTemplate } from "./../components/footer.component/footer.component.js";

import { cardComponent } from "./../components/cards.component/card.component.js";

navBarComponentTemplate();
cardComponent();
validaNome();
validaEmail();
validaTelefone();
validaPassword();
comparaSenha();
validateRequired();
validarDocumento();
footerComponentTemplate();

function getElement(elementSelector) {
  return document.querySelector(elementSelector);
}

function setContentElement(elementSelector, content) {
  const element = getElement(elementSelector);

  if (element) {
    element.innerHTML = content;
  }
}
