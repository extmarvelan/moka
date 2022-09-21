# Moka

Simple mock system that includes a proxy to intervene the requests of the project in question.

![moka](https://user-images.githubusercontent.com/105240291/191595465-f4d0ec5c-81b3-4aa2-8414-9b0d14be3f2b.png)

# Getting Started

1. Install dependencies
```
yarn
```
2. Run project
```
yarn dev
```
3. Config Proxy (Optional):

Enter system preferences

![m1](https://user-images.githubusercontent.com/105240291/191597973-79622fd0-7142-4696-9ce0-448b445cea06.png)

Select network

![Captura de Pantalla 2022-09-21 a la(s) 2 52 38 p m](https://user-images.githubusercontent.com/105240291/191597993-6ed01688-832f-4054-9aee-c90189fdc974.png)


Select advanced

![m2](https://user-images.githubusercontent.com/105240291/191598733-5a545842-30a8-4742-86d3-0166471f157e.png)


Select proxies and configure automatic proxies and URL http://localhost:6011/proxy.pac

![m3](https://user-images.githubusercontent.com/105240291/191598898-7a0bc7d5-80ec-44c7-b3e4-749d2522bf6e.png)

# Config Project

With the following file you can configure the routes that you want to be rendered by mocks.

![m4](https://user-images.githubusercontent.com/105240291/191600756-ddcb3e29-1146-40d7-82d5-6c1369187a99.png)

Next we will see an example of how to configure a mock

![Captura de Pantalla 2022-09-21 a la(s) 3 11 26 p m](https://user-images.githubusercontent.com/105240291/191601142-140e3242-8161-429c-8ad2-748a2144cd5a.png)

![Captura de Pantalla 2022-09-21 a la(s) 3 13 44 p m](https://user-images.githubusercontent.com/105240291/191601524-bf9a89d4-964a-4eb0-b393-bd21fc1b551e.png)

Testing the mock route

![Captura de Pantalla 2022-09-21 a la(s) 3 16 57 p m](https://user-images.githubusercontent.com/105240291/191602024-981ad684-7e65-4c88-8410-1a46b7eb9e77.png)

# Config Proxy

![Captura de Pantalla 2022-09-21 a la(s) 3 20 04 p m](https://user-images.githubusercontent.com/105240291/191602648-173caeed-c8da-4a92-9a4d-9cf9b594ab97.png)

The proxy is configured in the language "Proxy Auto-Configuration" for more information https://developer.mozilla.org/en-US/docs/Web/HTTP/Proxy_servers_and_tunneling/Proxy_Auto-Configuration_PAC_file.

Basically this file tells the computer to only look for those requests with the domain internal.mercadopago.com and redirect them to the MOKA proxy.

![Captura de Pantalla 2022-09-21 a la(s) 3 21 05 p m](https://user-images.githubusercontent.com/105240291/191602730-09b45115-7049-4951-9ca6-710253d6e1a2.png)

