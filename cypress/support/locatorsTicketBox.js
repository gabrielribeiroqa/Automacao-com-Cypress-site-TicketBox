const locatorsTicketBox = {
    USUARIO:{
        MEUNOME:('#first-name'),
        SOBRENOME:('#last-name'),
    },
    EMAIL1:{
        EMAIL_VALIDO:('#email'),
    },
    EMAIL2:{
        EMAIL_INVALIDO:("#email.invalid"),
    },
    CAMP_DE_TEXTO:{
        txt:('#requests')
    },
    SELECT:{
        CAMP_DE_SELECT:('#ticket-quantity'),
    },
    BTN_RADIO:{
        VIP:('#vip'),
        GENERAL:('#general'),
    },
    CHECKBOXES:{
        FRIEND:('#friend'),
        PUBLICATION:('#publication'),
        SOCIAL_MEDIA:('#social-media'),
    },
    CAMP_DE_TEXTO_PA:{
        PARAGRAFO:('p'),
    },
    BTN_ACEITAR:{
        ACEITAR:('#agree'),
    },
    BTN_CONFIRMAR:{
        CONFIRMAR:('.active'),
    },
    VALIDAÇÃO_FINAL:{
        MSG_SUCESSO:('.success > p'),
        BTN_RESET:('.reset')
    }
}

export default locatorsTicketBox;