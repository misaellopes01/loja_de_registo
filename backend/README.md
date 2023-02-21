# Descrição do Negócio

A Loja de Registo realiza as atividades de emissão de Novos BIs e renovação dos que já expiraram. O processo funciona da seguinte maneira: 
- O cidadão chega no local e fica na fila de espera pra ser atendido
- Quando chegar a sua vez, é solicitado os dados do mesmo, se for pra tratar um novo BI,é necessário o Assento de Nascimento.
- Para Renovar o B.I, é solicitado dados do BI antigo e paga-se uma comissão
- Depois agendam o dia do teu atendimento

# Regras de Negócio

- Precisa aparecer no dia indicado
- É obrigatório ter o assento de nascimento para poder tratar um novo BI
- É obrigatório ter dados do antigo BI à se renovar


# Descrição do Sistema

Pretende-se construir um Sistema de Cadastro e Agendamento para facilitar o processo de agendar um dia para renovar ou emitir um novo BI, visto que 
observou-se que a forma atual causa enchentes, desorganização, gastos desnecessários de dinheiro e tempo, bem como parcialidade na seleção de quem é atendido ou não
em tempo oportuno. Neste contexto, o sistema vai permitir o cadastramento dos dados do cidadão para uma das opções, emitir um novo ou renovar
por outra, o funcionário da loja, poderá consultar todos os cadastramentos e no referido dia, atender de acordo à ordem de cadastro.
O usuário poderá exportar um comprovativo da data estipulada pelo sistema para ser atendido. Em caso de renovação, o sistema irá verificar se o BI existe. O sistema também permitirá consultar os dados do seu cadastramento

 
# Admin
## Requisitos Funcionais
[x] deve ser possível super admin por seed
[x] deve ser possível ao super admin criar outros admins
[x] deve ser possível atualizar informações de perfil
[x] deve ser possível alterar o avatar
[x] deve ser possível ao super admin eliminar um admin
[x] deve ser possível fazer login no sistema
## Requisitos Não Funcionais
[x] não deve ser possível ao admin criar outros admins

# Cidadão - Agendamento
## Requisitos Funcionais
[] deve ser possível ao cidadão criar novo agendamento
[] deve ser possível consultar o agendamento pelo número de BI ou Telemóvel
[] deve ser possível definir para o sistema, definir o dia de atendimento 
[] deve ser possível alterar o status do agendamento para |atendido| pelo admin
[] deve ser possível alterar o status do agendamento para |expired| pelo sistema
[] deve ser possível consultar todos os agendamentos do dia atual
[] deve ser possível consultar cada agendamento pelo id
[] deve ser possível ter estatísticas de total, número de expirados, número de atendidos e de pendentes
## Requisitos Não Funcionais

if count 'monday' = 50 - 'pending', save on 'tuesday'