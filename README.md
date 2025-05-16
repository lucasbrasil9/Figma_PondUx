# Breve Relato do Desenvolvimento:

Nossa atividade consistiu em criar um componente de card de notificação (NotificationCard) para um aplicativo Expo, utilizando NativeWind para estilização (similar ao Tailwind CSS).
Começamos traduzindo um design do Figma para código React Native utilizando o plugin Figma to Code. No processo, enfrentamos alguns desafios comuns e interessantes:
No manuseio de Ícones inicialmente exploramos o uso de um arquivo SVG para o ícone, o que nos levou a configurar declarações de tipo para SVGs. Em seguida, optamos por uma abordagem mais flexível utilizando a biblioteca @expo/vector-icons, que simplifica a adição e customização de ícones.
Ao longo do processo, focamos em criar um componente reutilizável (NotificationCard) com props para título, mensagem, tempo, contagem de notificações, e customização de ícones. A tela NotificationsScreen foi criada para demonstrar o uso desses cards.

# Guia de Instruções para Acessar o App:
Aqui está um guia passo a passo para configurar e rodar o projeto:

1. Pré-requisitos:
Node.js e npm (ou Yarn): Certifique-se de que estão instalados em sua máquina.
Expo CLI: Se ainda não o tem, instale globalmente: npm install -g expo-cli
Dispositivo Móvel com Expo Go ou Emulador/Simulador:
Expo Go: Aplicativo disponível na App Store (iOS) e Google Play Store (Android).
Emulador/Simulador: Android Studio (para emuladores Android) ou Xcode (para simuladores iOS, requer macOS).

2. Configuração do Projeto:
Obtenha os Arquivos: o projeto estando em um repositório Git, clone-o. Caso contrário, certifique-se de que tem todos os arquivos do projeto (my-expo-app) em seu computador.
Navegue até o Diretório: Abra seu terminal e navegue até a pasta raiz do projeto usando o comando 'cd my-expo-app'
Instale as Dependências: Execute o comando para instalar todos os pacotes necessários definidos no package.json:
npm install(ou yarn install se você usa Yarn)

3. Executando o Aplicativo:
Inicie o Servidor de Desenvolvimento Expo: No terminal, dentro da pasta do projeto, execute:
    npx expo start
Isso iniciará o Metro Bundler. Um QR code será exibido no terminal, e uma interface web do Expo Dev Tools deverá abrir no seu navegador.
Abrindo no Dispositivo Físico (com Expo Go):
Certifique-se de que seu computador e seu dispositivo móvel estão conectados à mesma rede Wi-Fi.
Abra o aplicativo Expo Go no seu celular.
Escaneie o QR code exibido no terminal ou na página web do Expo Dev Tools.
Abrindo no Emulador/Simulador:
Android: Com um emulador Android já em execução (ou se o Android Studio estiver configurado para iniciar um), pressione a no terminal onde o npx expo start está rodando.
iOS: (Requer macOS) Com um simulador iOS já em execução (ou se o Xcode estiver configurado para iniciar um), pressione i no terminal.

4. Solução de Problemas Comuns:
Erro de Rede (Timeout no Expo Go):
Verifique se o computador e o celular estão na mesma rede Wi-Fi.
Desative temporariamente firewalls ou VPNs no seu computador, pois podem bloquear a conexão.
Problemas de Cache: Se encontrar erros estranhos após mudanças, tente limpar o cache:
Apply to Notification...
Run
Dependências Corrompidas: Se suspeitar de problemas com as dependências, você pode tentar:
Apagar a pasta node_modules.
Apagar o arquivo package-lock.json (ou yarn.lock).
Reinstalar com npm install.

- Autores - Lucas Paiva Brasil e Henrique Botti
- [Link Figma](https://www.figma.com/design/2Ym1Z3dyeOlvnOJIxUNdGi/Pond-Figma-Ux?node-id=0-1&t=d0xctCHB6hz1GckX-1)
