import Mail from '../../app/lib/Mail';

export default {
    key: 'RegistrationMail',
    options: {
        delay: 5000,
        priority: 3,
        repeat: {
            every: 1,
            limit: 100
        },
        lifo: true,
    },
    async handle({
        data
    }) {
        const { user } = data;

        await Mail.sendMail({
            from: 'Lúcio Kings <lucioKings@WastLand.com>',
            to: `${user.name} <${user.email}>`,
            subject: 'Bem vindo a WastLand.com!',
            html: `<h1 style="font-family: Verdana;">Olá ${user.name},</h1> 
            <h2 style="font-family: Verdana;">Bem vindo a plataforma WastLand.com</h2>

            <p style="font-family: Verdana;">
            Seus Dados de Conta são: </br></br>
            Username: <b>${user.email}</b> </br>
            Password: <b>${user.password}</b> (Temporária) </br></p>

            <h3 style="font-family: Verdana; text-align: center;">Segue abaixo um resumo sobre as 4 raças mais conhecidas das planices de WastLand.</h3>

            <ul style="font-family: Verdana;">
                <li>
                    Humanos: Numerosos e ambiciosos, vivem em quase toda WastLand, subdivididos em suas próprias raças, bandos, religiões e níveis hierárquicos.
                </li>
                <li>
                    Berserks: Guerreiros extremamente talentosos, contam com sua armadura natural de exoesqueleto, e extrema força para conseguir o que querem.
                </li>
                <li>
                    TechMummies: Robôs humanoides de origem desconhecidas, portadores do mais alto intelecto. Geralmente viajam sozinhos, buscando ainda mais conhecimentos e experiências.
                </li>
                <li>
                    Commuants: Junção humano e formiga, são muito difíceis de serem encontrados fora de suas colônias. Fortes, trabalhadores e inteiramente fiéis a sua rainha.
                </li>
            </ul>

            <h3 style="font-family: Verdana;"> Espero que isso te ajude nesse começo de jornada!</h3>

            <h2 style="font-family: Verdana; text-align: center;"> Se caso ficou interessando em WastLand ou nas raças citadas acima, saiba mais em:</br>
            <a href="https://www.wattpad.com/myworks/251311218-o-viajante-de-wastland" target="_blank" style="color: #E63328; text-decoration: none;">O Viajante de WastLand</a></h2>

            <h2 style="font-family: Verdana;">Att. Lúcio Kings</h2>
        `
        });
    },
};