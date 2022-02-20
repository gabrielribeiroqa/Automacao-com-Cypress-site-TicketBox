
///<reference types="cypress"/>

import loc from '../support/locatorsTicketBox'


describe("ACESSAR O SITE", () => {

    before(() => {
        cy.visit("https://ticket-box.s3.eu-central-1.amazonaws.com/index.html")
        cy.title().should('be.equal', 'Ticketbox')
    })
    describe('INSERINDO O NOME E SOBRENOME', () => {
        it('nome e sobrenome', () => {
            cy.login()
        })
    })
    describe("INSERINDO E-MAIL", () => {

        it("inserindo o e-mail valido ", () => {
            cy.emailValido()

        })
        it("inserindo email invalido", () => {
            cy.emailInvalido()

        })
    })

    //CAMPO DE TEXTO SPECIAL REQUESTS
    describe('PREENCHENDO CAMPO DE TEXTO COM FIXTURE', () => {
        it("campo de texto", function () {
            cy.fixture('dadosDeTexte').as('textodeteste').then((t) => {
                this.textodeteste = t
                cy.get(loc.CAMP_DE_TEXTO.txt).should('be.empty').and('be.visible').type(this.t.texto)

            })

        })

    })

})

describe('SELECT SIMPLES', () => {
    it('campo de select selecionando apenas um valor', () => {
        cy.get(loc.SELECT.CAMP_DE_SELECT).should('be.visible').and('exist').and('be.enabled')
        cy.get(loc.SELECT.CAMP_DE_SELECT).select('2')

    })
    describe('BOTÃO DE RADIO', () => {
        it('clicando no botão tipo radio', () => {
            cy.get(loc.BTN_RADIO.VIP).should('be.empty').and('be.visible').click()

            cy.get(loc.BTN_RADIO.GENERAL).should('be.empty').check()

        })
    })
    describe('CAIXA DE SELEÇÃO', () => {
        it('selecionando e desmarcando os checkboxes', () => {
            cy.get(loc.CHECKBOXES.FRIEND).should('be.empty').click().uncheck()

            cy.get(loc.CHECKBOXES.PUBLICATION).should('be.empty').check().uncheck()

            cy.get(loc.CHECKBOXES.SOCIAL_MEDIA).should('be.empty').click()

        })
    })
    describe('SELECT MULTIPLO COM LAÇO DE REPETIÇÃO', () => {
        it('selecionando varios select com um forEach', () => {
            const tags = ['1', '2', '3', '4']
            tags.forEach(valor => {
                cy.get(loc.SELECT.CAMP_DE_SELECT).select(valor)

            })

        })
    })
    describe('VALIDANDO TEXTO', () => {
        it('verificando se dentro do campo Purchase Agreement tem o nome Gabriel Ribeiro', () => {
            cy.get(loc.CAMP_DE_TEXTO_PA.PARAGRAFO).should('contain.text', 'GABRIEL RIBEIRO')
        })
    })
    describe('BOTÃO DE ACEITAR', () => {
        it('Botão de aceitar', () => {
            cy.get(loc.BTN_ACEITAR.ACEITAR).should('be.visible').and('be.empty').click()
        })
    })
    describe('BOTÃO DE CONFIRMAR', () => {
        it('botão de confirmar', () => {
            cy.get(loc.BTN_CONFIRMAR.CONFIRMAR).click()
        })
    })
    describe('VALIDAÇÃO FINAL', () => {
        it('validação final', () => {
            cy.get(loc.VALIDAÇÃO_FINAL.MSG_SUCESSO).should('contain', 'Ticket(s) successfully ordered.')
            cy.get(loc.VALIDAÇÃO_FINAL.BTN_RESET).click()
            cy.reload()

        })
    })
})










