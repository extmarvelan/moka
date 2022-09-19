function FindProxyForURL(url, host) {

    if (url.startsWith("http:")) {
        PROXY = "PROXY localhost:6010"

        if (dnsDomainIs(host,"internal.mercadopago.com")) {
            return PROXY;
        }
    } 
    return "DIRECT";
}